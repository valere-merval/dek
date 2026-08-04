import { expect, it, describe } from "vitest";
import { generateMemorySizeString } from "./utils";

describe("generateMemorySizeString", () => {
  describe("when input is an array of numbers", () => {
    it("formats as GB for values 8 or greater", () => {
      const input = [128, 256, 512];
      expect(generateMemorySizeString(input)).toBe("128 GB | 256 GB | 512 GB");
    });

    it("formats as TB for values less than 8", () => {
      const input = [1, 2, 8];
      expect(generateMemorySizeString(input)).toBe("1 TB | 2 TB | 8 TB");
    });

    it("formats mixed values as GB and TB appropriately", () => {
      const input = [256, 512, 1];
      expect(generateMemorySizeString(input)).toBe("256 GB | 512 GB | 1 TB");
    });
  });

  describe("when input is an array of strings", () => {
    it("formats values with GB units", () => {
      const input = ["128 GB", "256 GB", "512 GB"];
      expect(generateMemorySizeString(input)).toBe("128 GB | 256 GB | 512 GB");
    });

    it("formats values with TB units", () => {
      const input = ["1 TB", "2 TB", "8 TB"];
      expect(generateMemorySizeString(input)).toBe("1 TB | 2 TB | 8 TB");
    });

    it("formats mixed values with GB and TB units", () => {
      const input = ["256 GB", "512 GB", "1 TB"];
      expect(generateMemorySizeString(input)).toBe("256 GB | 512 GB | 1 TB");
    });
  });
});
