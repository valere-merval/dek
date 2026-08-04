## Snapshot Release

### Create a Snapshot Release

- develop your changes in a branch like you normaly do
- if you are ready to create a release, create a branch based on your development branch with the prefix `snapshot/nameOfYourSnapshot`
- use `npx changeset` to create a changeset for this Snapshot branch
- create a Merge Request for this Snapshot branch
- when the pipeline is finished a new Merge Request `Version Packages Snapshot` was created that should merge to your Snapshot branch
- when the Merge Request `Version Packages Snapshot` was merged, a new Tag with the name `@fair/react@0.0.0-nameOfYourSnapshot-20260226125025` was created and released

### Use a Snapshot Release

You can use this version with the name of the newly created tag.

```sh
pnpm add @fair/react@0.0.0-nameOfYourSnapshot-20260226125025
```

### Make changes

If you need to do further changes do them in your development branch.

To release the new changes you have 2 options:

#### Option A

- remove the snapshot tag manually
- rebase your Snapshot branch based on your development branch
- use `npx changeset` to create a changeset for this Snapshot branch and follow the steps from before

#### Option B

- remove the Snapshot branch
- create a new Snapshot branch based on your development branch and follow the steps from before

### Merge your changes to main

If your feature is ready and you would like to merge it to main do the following:

- remove the Snapshot branch
- merge your development to main like you normaly do

> [!important]
> Never merge a snapshot branch to main, because it would alter the version numbers
