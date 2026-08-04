const changelogOrder = (name: string) => {
  switch (name) {
    case "examples-nextjs":
      return 0;
    case "fair/react":
      return 2;
    case "fair/icons":
      return 1;
    case "eslint-config-custom":
      return 1;
    case "tsconfig":
      return 1;
    case "fair/teams-notifications":
      return 1;
    default:
      return 1;
  }
};

type AdaptiveTextBlock = {
  type: "TextBlock";
  text: string;
  wrap: boolean;
  separator?: boolean;
  weight?: "Bolder";
  size?: "Medium";
};

export class Changelogs {
  changelogs: Changelog[];

  constructor(str: string) {
    const fileBlocks = str.split(/(?=^diff --git )/m).filter(Boolean);

    this.changelogs = fileBlocks
      .filter((block) => !/^\+\+\+ \/dev\/null$/m.test(block))
      .flatMap((block) => {
        return block
          .split(/@@[^@]*@@/g)
          .slice(1)
          .filter((hunk) => /^\+## \d{1,3}\.\d{1,3}\.\d{1,3}$/m.test(hunk))
          .map((hunk) =>
            hunk
              .split("\n")
              .filter((line) => !line.startsWith("-"))
              .map((line) => (line.startsWith("+") ? line.slice(1) : line))
              .join("<br>"),
          )
          .map((changelogString) => new Changelog(changelogString));
      });
  }

  isEmpty(): boolean {
    return this.changelogs.length === 0;
  }

  sortChangelogs() {
    this.changelogs = this.changelogs.sort((a, b) => {
      return changelogOrder(a.name) > changelogOrder(b.name) ? -1 : 1;
    });
  }

  toAdaptiveCardBody(): AdaptiveTextBlock[] {
    return this.changelogs.flatMap((it) => it.toAdaptiveCardBody());
  }

  hasPackage(packageName: string): boolean {
    return this.changelogs.some((it) => it.name === packageName);
  }
}

class Changelog {
  name: string;
  version: string;
  changeCategories: ChangeCategory[];

  constructor(str: string) {
    let lines = str.split("<br>").filter((it) => it.trim() !== "");

    let count = 0;
    lines.forEach((line, i) => {
      if (RegExp("## \\d{1,3}\\.\\d{1,3}\\.\\d{1,3}").test(line)) {
        if (count === 0) count++;
        else lines.length = i;
      }
    }); // drop everything including the previous version's notes

    this.name = lines[0].replace(RegExp(/[@#]/gi), "").trim();
    this.version = lines[1].replace(RegExp(/[#]/gi), "").trim();

    lines = lines.slice(2, lines.length);

    const changeCategoryIndicies: number[] = [];
    lines.forEach((line, index) => {
      if (RegExp("###.*Changes").test(line)) {
        changeCategoryIndicies.push(index);
      }
    });

    const categories = changeCategoryIndicies.map((index, i) => {
      if (changeCategoryIndicies.length === 1) {
        return lines;
      } else if (i === 0 && changeCategoryIndicies.length !== 1) {
        return lines.slice(index, changeCategoryIndicies[i + 1]);
      } else {
        return lines.slice(index, changeCategoryIndicies[i + 1]);
      }
    });

    this.changeCategories = categories.map(
      (it) =>
        new ChangeCategory(
          it[0].replace(RegExp(/[@#]/gi), "").trim(),
          it.slice(1).map((it) => it.replace(RegExp(/[@#]/gi), "").trim()),
        ),
    );
  }

  toAdaptiveCardBody(): AdaptiveTextBlock[] {
    return [
      {
        type: "TextBlock",
        text: `${this.name} (${this.version})`,
        wrap: true,
        separator: true,
        weight: "Bolder",
        size: "Medium",
      },
      ...(this.changeCategories.length > 0
        ? this.changeCategories.flatMap((category) =>
            category.toAdaptiveBlocks(),
          )
        : [
            {
              type: "TextBlock" as const,
              text: "- No documented changes",
              wrap: true,
            },
          ]),
    ];
  }
}

class ChangeCategory {
  name: string;
  items: string[];

  constructor(name: string, items: string[]) {
    this.name = name;
    this.items = items;
  }

  toAdaptiveBlocks(): AdaptiveTextBlock[] {
    return [
      {
        type: "TextBlock",
        text: `${this.name}:`,
        wrap: true,
        weight: "Bolder",
      },
      {
        type: "TextBlock",
        text:
          this.items.length > 0
            ? this.items
                .map((item) => `- ${item.replace(/^[-*]\s+/, "")}`)
                .join("\n")
            : "- No documented changes",
        wrap: true,
      },
    ];
  }
}
