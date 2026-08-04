import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { findInvalidChangesets, hasRefs } from "./check-changeset-refs.js";

describe("hasRefs", () => {
  const validContents = [
    "Refs: TD-123",
    "Refs: CD-123",
    "Refs: WE-123",
    "Description\n\nRefs: TD-CHORE",
  ];

  for (const content of validContents) {
    it(`accepts ${content}`, () => {
      assert.equal(hasRefs(content), true);
    });
  }

  const invalidContents = [
    "Description without a reference",
    "Refs:",
    "Refs: TD-",
    "Refs: XD-123",
    "refs: TD-123",
  ];

  for (const content of invalidContents) {
    it(`rejects ${content}`, () => {
      assert.equal(hasRefs(content), false);
    });
  }
});

describe("findInvalidChangesets", () => {
  it("returns no files when no changeset was added", () => {
    const runGit = (args: string[]): string => {
      assert.equal(args[0], "diff");
      return "";
    };

    assert.deepEqual(findInvalidChangesets(runGit), []);
  });

  it("returns only added changesets without valid refs", () => {
    const contents = new Map([
      [".changeset/valid.md", "Description\n\nRefs: TD-123"],
      [".changeset/invalid.md", "Description without refs"],
    ]);
    const runGit = (args: string[]): string => {
      if (args[0] === "diff") {
        return [
          ".changeset/valid.md",
          ".changeset/invalid.md",
          ".changeset/README.md",
          "",
        ].join("\0");
      }

      return contents.get(args[1].slice(1)) ?? "";
    };

    assert.deepEqual(findInvalidChangesets(runGit), [".changeset/invalid.md"]);
  });
});
