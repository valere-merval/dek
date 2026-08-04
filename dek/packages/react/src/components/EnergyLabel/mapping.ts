import EnergyLabelA from "./assets/energyLabel-a.svg";
import EnergyLabelB from "./assets/energyLabel-b.svg";
import EnergyLabelC from "./assets/energyLabel-c.svg";
import EnergyLabelD from "./assets/energyLabel-d.svg";
import EnergyLabelE from "./assets/energyLabel-e.svg";
import EnergyLabelF from "./assets/energyLabel-f.svg";
import EnergyLabelG from "./assets/energyLabel-g.svg";
import { EnergyLabel } from "./EnergyLabel.types";

type EnergyLabelObject = {
  label: string;
  image: string;
};

export const energyLabelMap: Record<EnergyLabel, EnergyLabelObject> = {
  A: {
    label: "Energieeffizienzklasse A",
    image: EnergyLabelA,
  },
  B: {
    label: "Energieeffizienzklasse B",
    image: EnergyLabelB,
  },
  C: {
    label: "Energieeffizienzklasse C",
    image: EnergyLabelC,
  },
  D: {
    label: "Energieeffizienzklasse D",
    image: EnergyLabelD,
  },
  E: {
    label: "Energieeffizienzklasse E",
    image: EnergyLabelE,
  },
  F: {
    label: "Energieeffizienzklasse F",
    image: EnergyLabelF,
  },
  G: {
    label: "Energieeffizienzklasse G",
    image: EnergyLabelG,
  },
};
