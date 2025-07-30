export interface ControlPanelSpecItem {
  label: string;
  value: string;
}

export interface ControlPanelSpecGroup {
  group: string;
  items: ControlPanelSpecItem[];
}

export interface ControlPanelProduct {
  title: string;
  slug: string;
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
  specs: ControlPanelSpecGroup[];
}

export const controlPanelProducts = [
  {
    slug: "control-panel-abc",
    title: "Control Panel ABC",
    image: "/controlpanel1.png",
    type: "Automatic",
    brand: "BlakShade",
    ratedVoltage: "400V",
    ratedCurrent: "150A",
    protectionClass: "IP54",
    enclosureType: "Metal",
    dimensions: "600 x 400 x 250 mm",
    weight: "150 kg",
    description: "Its a Control Panel",
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
        ],
      },
    ],
  },
];
