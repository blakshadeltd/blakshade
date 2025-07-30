export interface CumminsProduct {
  controlpanel: any;
  ampsperphase: any;
  engine: any;
  name: string;
  slug: string;
  image: string;
  brand: string;
  alternator: string;
  frequency: string;
  fuelType: string;
  phase: string;
  voltage: string;
  buildType: string;
  startType: string;
  size: number; // kVA
  standbyPower: string;
  primePower: string;
  description: string;
  ratedSpeed: string;
  aspiration: string;
  fuelSystem: string;
  governorType: string;
  displacement: string;
  boreStroke: string;
  compressionRatio: string;
  lubeOilCapacity: string;
  coolingSystem: string;

  specs: { group: string; items: { label: string; value: string }[] }[];
}

export const cummins: CumminsProduct[] = [
  {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
  {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
    {
    name: "Cummins C22D5",
    slug: "cummins-c22d5",
    image: "/generators/cummins/cummins-20kva.jpg",
    brand: "Cummins",
    engine: "Cummins",
    ampsperphase: "3",
    controlpanel: "undefined",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent / Open",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: "The Cummins C22D5 (X‑Series) is a compact, reliable 22 kVA diesel generator set powered by the Cummins X2.5G2 engine. Ideal for standby, prime, and data‑center applications, it ensures stable performance with ≤1% voltage regulation, low THD, and mechanical governing. Optional accessories include industrial/residential silencers, auto‑transfer switches, battery chargers, and enclosure upgrade options.",

    // New properties:
    ratedSpeed: "1 500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 L",
    coolingSystem: "Water Cooled",

    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Compression Ratio", value: "18.5 : 1" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Standby Consumption @100%", value: "5.6 L/hr" },
          { label: "Prime Consumption @100%", value: "5.2 L/hr" },
          { label: "Max Fuel Flow", value: "40 L/hr" },
        ],
      },
      {
        group: "Cooling & Air",
        items: [
          { label: "Coolant Capacity", value: "15 L (with radiator)" },
          { label: "Combustion Air Flow", value: "2.3 m³/min" },
          { label: "Ambient Rating", value: "50 °C" },
        ],
      },
      {
        group: "Exhaust",
        items: [
          { label: "Exhaust Flow", value: "≈ m³/min @ full load" },
          { label: "Exhaust Temp", value: "660 °C" },
          { label: "Max Back Pressure", value: "3.38 kPa" },
        ],
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Open Set (L×W×H)", value: "1667 × 930 × 1282 mm" },
          { label: "Enclosed Set (L×W×H)", value: "2082 × 987 × 1524 mm" },
          { label: "Dry Weight (Open)", value: "650 kg" },
          { label: "Dry Weight (Enclosed)", value: "970 kg" },
        ],
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Voltage Regulation", value: "±1 % electronic" },
          { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
          { label: "Gov. Type", value: "Mechanical" },
          { label: "ATC & Battery Charger", value: "Optional" },
        ],
      },
    ],
  },
];
