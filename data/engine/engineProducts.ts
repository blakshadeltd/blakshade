export interface EngineProduct {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  slug: string;
  category: "engine";
  brand: string;
  size: number;
  image: string;
  standbyPower: string;
  primePower: string;
  fuelConsumption:string;
  description: string;
  rpm: string;
  frequency: string;
  fuel: string;
  emissions: string;
  cylinders: number;


  shortSpecs: { label: string; value: string }[];

  specs: {
    group: string;
    items: { label: string; value: string }[];
  }[];
}

export const engines: EngineProduct[] = [
  {
    title: "Cummins X2.5-G1",
    metaTitle: "Cummins X2.5-G1 Diesel Engine",
    metaDescription: "string",
    keywords: [
  "Cummins X2.5-G1",
  "30 kVA diesel Engine",
  "Silent diesel generator",
  "Standby power generator 22 kVA"
],
    slug: "cummins-x25-g1",
    category: "engine",
    brand: "Cummins",
    size: 30,
    image: "/components/engine/cummins-20-32kva.jpg",
    standbyPower: "30 kVA",
    primePower: "25 kVA",
    fuelConsumption:"5.6 L/hr",
    rpm: "1500",
    frequency: "50Hz",
    fuel: "Diesel",
    emissions: "N/R",
    cylinders: 3,
    description: "The Cummins X2.5-G1 is a robust diesel engine designed for high-performance generator applications, ensuring reliability and efficiency in demanding conditions.",
    shortSpecs: [
      { label: "RPM", value: "1500" },
      { label: "Frequency", value: "50Hz" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Cylinders", value: "3" },
    ],
    specs: [
      {
        group: "Performance",
        items: [
          { label: "Standby Power", value: "28 kVA" },
          { label: "Prime Power", value: "25 kVA" },
          { label: "Fuel Consumption", value: "5.6 L/hr" },
        ],
      },
      {
        group: "Technical Details",
        items: [
          { label: "Emissions", value: "N/R" },
          { label: "Compression Ratio", value: "17.5:1" },
          { label: "Cooling System", value: "Water Cooled" },
        ],
      },
    ],
  },


];
