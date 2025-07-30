export interface AlternatorProduct {
  title: string;
  slug: string;
  category: string;
  brand: string;
  size: number;
  image: string;
  ratedPower: string;
  voltage: string;
  frequency: string;
  phase: string;
  model: string;
  description?: string;

  shortSpecs: { label: string; value: string }[];
  specs: {
    group: string;
    items: { label: string; value: string }[];
  }[];
}

export const alternators: AlternatorProduct[] = [
  {
    title: "Stamford UC22",
    slug: "stamford-uc22",
    category: "alternator",
    brand: "Stamford",
    size: 150,
    image: "/images/alternators/stamford-uc22.jpg",
    ratedPower: "150 kVA",
    voltage: "400V",
    frequency: "50Hz",
    phase: "Three Phase",
    model: "UC22",
    description:
      "The Stamford UC22 is a high-efficiency alternator designed for reliable power generation in demanding industrial applications.",
    shortSpecs: [
      { label: "Rated Power", value: "150 kVA" },
      { label: "Voltage", value: "400V" },
      { label: "Frequency", value: "50Hz" },
      { label: "Phase", value: "Three Phase" },
    ],
    specs: [
      {
        group: "Performance",
        items: [
          { label: "Rated Power", value: "150 kVA" },
          { label: "Power Factor", value: "0.8" },
          { label: "Efficiency", value: "94%" },
        ],
      },
      {
        group: "Technical Details",
        items: [
          { label: "Insulation Class", value: "H" },
          { label: "AVR Model", value: "AS440" },
          { label: "Poles", value: "4" },
        ],
      },
    ],
  },

  {
    title: "Leroy Somer LSA 40.3",
    slug: "leroy-somer-lsa-403",
    category: "alternator",
    brand: "Leroy Somer",
    size: 200,
    image: "/images/alternators/leroy-somer-lsa-403.jpg",
    ratedPower: "200 kVA",
    voltage: "400V",
    frequency: "50Hz",
    phase: "Three Phase",
    model: "LSA 40.3",
    description:
      "The Leroy Somer LSA 40.3 alternator offers excellent voltage regulation and durability for heavy-duty power generation.",
    shortSpecs: [
      { label: "Rated Power", value: "200 kVA" },
      { label: "Voltage", value: "400V" },
      { label: "Frequency", value: "50Hz" },
      { label: "Phase", value: "Three Phase" },
    ],
    specs: [
      {
        group: "Performance",
        items: [
          { label: "Rated Power", value: "200 kVA" },
          { label: "Power Factor", value: "0.8" },
          { label: "Efficiency", value: "95%" },
        ],
      },
      {
        group: "Technical Details",
        items: [
          { label: "Insulation Class", value: "H" },
          { label: "AVR Model", value: "R450" },
          { label: "Poles", value: "4" },
        ],
      },
    ],
  },
];
