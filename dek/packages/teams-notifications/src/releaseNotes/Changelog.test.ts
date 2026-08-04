import { strict as assert } from "node:assert";
import { test } from "node:test";
import { Changelogs } from "./Changelog";

test("ignores a deleted changelog file", () => {
  const diff = `diff --git a/packages/example/CHANGELOG.md b/packages/example/CHANGELOG.md
deleted file mode 100644
index 1234567..0000000
--- a/packages/example/CHANGELOG.md
+++ /dev/null
@@ -1,5 +0,0 @@
-# example-package
-
-## 1.2.3
-
-### Patch Changes
-- Removed release
`;

  const changelogs = new Changelogs(diff);

  assert.equal(changelogs.changelogs.length, 0);
  assert.deepEqual(changelogs.toAdaptiveCardBody(), []);
});

test("parses an added release without duplicate bullet markers", () => {
  const diff = `diff --git a/packages/example/CHANGELOG.md b/packages/example/CHANGELOG.md
index 1234567..7654321 100644
--- a/packages/example/CHANGELOG.md
+++ b/packages/example/CHANGELOG.md
@@ -1,0 +1,4 @@
+# @fair/example
+## 1.2.3
+### Patch Changes
+- Fixed release notes
`;

  const changelogs = new Changelogs(diff);
  const releaseBullets = changelogs
    .toAdaptiveCardBody()
    .filter((block) => block.text.includes("Fixed release notes"))
    .map((block) => block.text);

  assert.equal(changelogs.changelogs[0].name, "fair/example");
  assert.equal(changelogs.changelogs[0].version, "1.2.3");
  assert.deepEqual(releaseBullets, ["- Fixed release notes"]);
});

test("ignores hunks without an added release heading", () => {
  const diff = `diff --git a/packages/example/CHANGELOG.md b/packages/example/CHANGELOG.md
index 1234567..7654321 100644
--- a/packages/example/CHANGELOG.md
+++ b/packages/example/CHANGELOG.md
@@ -1,1 +1,5 @@
 # @fair/example
+## 1.2.3
+### Patch Changes
+- Fixed release notes
@@ -40,1 +44,2 @@
 Existing note
+Unrelated old note
`;

  const changelogs = new Changelogs(diff);

  assert.equal(changelogs.changelogs.length, 1);
  assert.equal(changelogs.changelogs[0].name, "fair/example");
  assert.equal(changelogs.changelogs[0].version, "1.2.3");
});
