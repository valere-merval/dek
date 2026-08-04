import { exec } from "child_process";
import { postToWebhook } from "../axios-config";
import { template } from "./template";
import { Changelogs } from "./Changelog";

const FAIR_REACT_STORYBOOK_URL = "https://fair-react.itg-wirk.narf.tech";

exec('git diff HEAD^ HEAD -- "../../*CHANGELOG.md"', async (error, stdout) => {
  if (error) throw new Error("could not calculate a diff");

  const changelogs = new Changelogs(stdout);
  if (changelogs.isEmpty()) {
    console.log("No new changelog entries found; skipping webhook.");
    return;
  }

  changelogs.sortChangelogs();

  const actions = [...template.actions];

  if (changelogs.hasPackage("fair/react")) {
    actions.push({
      type: "Action.OpenUrl",
      title: "@fair/react Live Storybook",
      url: FAIR_REACT_STORYBOOK_URL,
    });
  }

  await postToWebhook(
    JSON.stringify({
      ...template,
      body: [...template.body, ...changelogs.toAdaptiveCardBody()],
      actions,
    }),
  );
});
