#!/usr/bin/env ts-node

import { Command, Option, program } from "commander";
import { openMergeRequest } from "./command/openMergeRequest";
import { commentMergeRequest } from "./command/commentMergeRequest";

function commaSeparatedList(value: string) {
  return value.split(",").map((it) => {
    it.trim();
  });
}

program.name("gitlab-ci-utils").showHelpAfterError();

// ---------------------- openMergeRequest Command ----------------------
program
  .command("openMergeRequest")
  .addOption(
    new Option("--projectId <string>", "ID of Project")
      .env("CI_PROJECT_ID")
      .makeOptionMandatory(),
  )
  .addOption(
    new Option("--sourceBranch <string>", "source branch for merge request")
      .env("CI_COMMIT_BRANCH")
      .makeOptionMandatory(),
  )
  .addOption(
    new Option("--targetBranch <string>", "target branch for merge request")
      .env("CI_DEFAULT_BRANCH")
      .makeOptionMandatory(),
  )
  .addOption(
    new Option("--title <string>", "title of merge request").default(
      "Update Figma Token",
    ),
  )
  .addOption(new Option("--body <string>", "body of merge request").default(""))
  .addOption(
    new Option(
      "--labels <string>",
      "comma seperated list of labels to assign to merge request",
    )
      .default("team-deko,design-tokens,fair")
      .argParser(commaSeparatedList),
  )
  .action(async (options) => {
    const {
      host,
      token,
      projectId,
      sourceBranch,
      targetBranch,
      title,
      body,
      labels,
    } = options;
    openMergeRequest({
      title: title,
      body: body,
      labels: labels,
      projectId: projectId,
      sourceBranch: sourceBranch,
      targetBranch: targetBranch,
      gitlabHost: host,
      gitlabToken: token,
    });
  });

// ---------------------- commentMergeRequest Command ----------------------
program
  .command("commentMergeRequest")
  .addOption(
    new Option("--projectId <string>", "ID of Project")
      .env("CI_PROJECT_ID")
      .makeOptionMandatory(),
  )
  .addOption(
    new Option("--mergeRequestIID <string>", "ID of merge request")
      .env("CI_MERGE_REQUEST_IID")
      .makeOptionMandatory(),
  )
  .addOption(
    new Option("--title <string>", "title of note/comment").default(""),
  )
  .addOption(new Option("--body <string>", "body of note/comment").default(""))
  .action(async (options) => {
    const { host, token, projectId, mergeRequestIID, title, body } = options;
    commentMergeRequest({
      title: title,
      body: body,
      projectId: projectId,
      mrIid: mergeRequestIID,
      gitlabHost: host,
      gitlabToken: token,
    });
  });

// ---------------------- general Options ----------------------
program.commands.forEach((cmd: Command) => {
  cmd.addOption(
    new Option("--host <string>", "gitlab host")
      .env("CI_SERVER_URL")
      .makeOptionMandatory(),
  );
  cmd.addOption(
    new Option("--token <string>", "personal gitlab token")
      .env("GITLAB_TOKEN")
      .makeOptionMandatory(),
  );
});

program.parse(process.argv);
