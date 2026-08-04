import { postToWebhook } from "../axios-config";

const [_bin, _sourcePath, ...args] = process.argv;
const [templateName] = args;

import(`./templates/${templateName}.ts`).then(async (exports) => {
  await postToWebhook(JSON.stringify(exports.template));
});
