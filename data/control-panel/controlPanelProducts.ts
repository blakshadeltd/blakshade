export interface ControlPanelProduct {
  title: string;
  slug: string;
  category: "control-panel";
  image: string;
  type: string;
  brand: string;
  ratedVoltage: string;
  ratedCurrent: string;
  protectionClass: string;
  enclosureType: string;
  dimensions: string;
  weight: string;
  description: string;

  shortSpecs: { label: string; value: string }[];

  specs: {
    group: string;
    items: { label: string; value: string }[];
  }[];
}

export const controlpanels: ControlPanelProduct[] = [
  {
    title: "Control Panel ABC",
    slug: "control-panel-abc",
    category: "control-panel",
    image: "/controlpanel1.png",
    type: "Automatic",
    brand: "BlakShade",
    ratedVoltage: "400V",
    ratedCurrent: "150A",
    protectionClass: "IP54",
    enclosureType: "Metal",
    dimensions: "600 x 400 x 250 mm",
    weight: "150 kg",
    description:
      "The Control Panel ABC is a reliable automatic control solution designed for industrial and commercial generator systems, offering high protection and durable enclosure.",
    shortSpecs: [
      { label: "Type", value: "Automatic" },
      { label: "Voltage", value: "400V" },
      { label: "Current", value: "150A" },
      { label: "Protection", value: "IP54" },
    ],
    specs: [
      {
        group: "Electrical",
        items: [
          { label: "Rated Voltage", value: "400V" },
          { label: "Rated Current", value: "150A" },
          { label: "Frequency", value: "50 Hz" },
          { label: "Phase", value: "3" },
        ],
      },
      {
        group: "Mechanical",
        items: [
          { label: "Dimensions", value: "600 x 400 x 250 mm" },
          { label: "Weight", value: "150 kg" },
          { label: "Enclosure Type", value: "Metal" },
        ],
      },
      {
        group: "Protection",
        items: [{ label: "Protection Class", value: "IP54" }],
      },
    ],
  },
];
