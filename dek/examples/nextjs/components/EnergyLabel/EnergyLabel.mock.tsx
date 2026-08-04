import { EnergyLabelProps } from "@fair/react";
import XiaomiEnergyLabel from "../../public/xiaomi-eneryLabel.png";
import Image from "next/image";
export const energyLabelMock: EnergyLabelProps = {
  rating: "A",
  footnotes: [
    {
      header: "Xiaomi 15 Ultra",
      description: (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Image
            src={XiaomiEnergyLabel}
            alt="Xiaomi 15 Ultra Energie Label A"
            width={300}
          />
        </div>
      ),
    },
  ],
};
