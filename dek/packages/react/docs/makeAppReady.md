## Make a Component App Ready

1. replace deprecated `composeBackgroundColorStories` with `composeBrandBackgroundColorStories` in `componentname.stories.portable.ts`
2. rename background color story names, e.g. `stories.WithBlackBackground` to `stories.WithCongstarWebBlackBackground` in `componentname.test-visual-ct-tsx`
3. replace `supportedBackgroundStories` map with `testDescribeAllowedBackgrounds` function
4. run `pnpm test:visual:os-agnostic:start -g componentname` to generate the new brand background color screenshots
5. compare the new screenshots with the old ones and make sure they are identical
6. remove the old background color screenshots
7. map colors, fonts, radii and spacings based on brands
8. add allowedBackgroundColors to `componentname.stories.tsx`
9. set `readyForCongstarApp`, `readyForJa` and `readyForPenny` in `componentname.stories.tsx`

### Examples

The following components have already been converted for Congstar App, Ja and Penny:

- `CardOutlined`
- `CardFilled`
- `List`
- `Price`
- `HeadlineHighlighted`
- `ButtonPrimary`
- `Text`
