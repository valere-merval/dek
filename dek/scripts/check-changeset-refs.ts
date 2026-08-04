import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const changesetPathPattern = /^\.changeset\/[^/]+\.md$/;
const refsPattern = /^Refs:\s+(?:TD|CD|WE)-\S+/m;
type ReadGit = (args: string[]) => string;

const readGit: ReadGit = (args) =>
  execFileSync("git", args, { encoding: "utf8" });

export function hasRefs(content: string): boolean {
  return refsPattern.test(content);
}

function getAddedChangesets(runGit: ReadGit): string[] {
  const output = runGit([
    "diff",
    "--cached",
    "--diff-filter=A",
    "--name-only",
    "-z",
    "--",
    ".changeset/*.md",
  ]);

  return output
    .split("\0")
    .filter(
      (filePath) =>
        changesetPathPattern.test(filePath) &&
        filePath !== ".changeset/README.md",
    );
}

export function findInvalidChangesets(runGit: ReadGit): string[] {
  return getAddedChangesets(runGit).filter((filePath) => {
    const content = runGit(["show", `:${filePath}`]);

    return !hasRefs(content);
  });
}

export function checkChangesetRefs(): void {
  const invalidChangesets = findInvalidChangesets(readGit);

  if (invalidChangesets.length === 0) {
    return;
  }

  console.error(
    "New changesets must contain a Refs line with a TD-, CD-, or WE- reference:",
  );
  invalidChangesets.forEach((filePath) => console.error(`- ${filePath}`));
  process.exitCode = 1;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  checkChangesetRefs();
}
