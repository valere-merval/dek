import { Gitlab } from "@gitbeaker/rest";

export interface OpenMergeRequestCommandOptions {
  projectId: string | number;
  sourceBranch: string;
  targetBranch: string;
  gitlabHost: string;
  gitlabToken: string;
  title: string;
  body: string;
  labels?: string[];
}

export const openMergeRequest: (
  options: OpenMergeRequestCommandOptions,
) => void = async ({
  projectId,
  sourceBranch,
  targetBranch,
  gitlabHost,
  gitlabToken,
  title,
  body,
  labels,
}) => {
  const api = new Gitlab({ token: gitlabToken, host: gitlabHost });

  const mrFullBody = `This MR was opened automatically by push to branch \`${sourceBranch}\`. 
        Please check the content and when you're ready merge this ⚠️ **without deleting the branch!** ⚠️
        
        ${body}`;

  const searchResult = await api.MergeRequests.all({
    projectId: projectId,
    state: "opened",
    sourceBranch: sourceBranch,
    targetBranch: targetBranch,
    maxPages: 1,
    perPage: 1,
  });
  console.log(JSON.stringify(searchResult, null, 2));
  if (searchResult.length > 0) {
    console.log("merge request found. Finished");
  } else {
    console.log("creating merge request");
    await api.MergeRequests.create(
      projectId,
      sourceBranch,
      targetBranch,
      title,
      {
        description: mrFullBody,
        labels: labels ?? ["team-deko", "design-system", "fair"],
        removeSourceBranch: false,
      },
    )
      .then(() => {
        console.log("successful creating merge request");
      })
      .catch(() => {
        console.log("failed creating merge request");
      });
  }
};
