export interface CumminsProduct {
  controlpanel: string;
  ampsperphase: any;
  engine: string;
  emissions: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  image: string;
  fullspec: string;
  brand: string;
  category: string;
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
    title: "Cummins C22D5",
    metaTitle: "Cummins C22D5 Silent Diesel Generator",
    metaDescription: "Cummins C22D5 22 kVA 50Hz silent diesel generator with auto start, X2.5-G2 engine & Stamford S0L2-M1 alternator. Reliable three-phase power.",
    slug: "c22d5",
    image: "/generators/cummins/22kva-28kva-cummins-silent-diesel-generator.webp",
    fullspec: "/generators/cummins/cummins-c22d5-data-sheet.pdf",
    brand: "Cummins",
    category: "cummins",
    engine: "Cummins X2.5-G2",
    ampsperphase: "3",
    controlpanel: "Cummins PowerStart 0600",
    alternator: "Stamford S0L2‑M1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "380‑415 V",
    buildType: "Silent",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: `
<p>The Cummins C22D5 is a powerful and efficient 22 kVA silent diesel generator designed to provide reliable three-phase power for commercial, industrial, and data center applications.</p>

<p>Featuring the robust and fuel-efficient Cummins X2.5-G2 3-cylinder engine, this generator operates smoothly at 1500 rpm, ensuring stable prime and standby power output with exceptional voltage regulation (±1%) and low total harmonic distortion (≤2%). Engineered for durability and quiet operation, the C22D5 incorporates a water-cooled cooling system and an advanced mechanical governor for precise engine control. The Stamford S0L2-M1 alternator delivers consistent electrical output, while the Cummins PowerStart 0600 control panel offers intuitive monitoring, automatic start/stop functions, and comprehensive protection features to safeguard your equipment.</p>

<p>Ideal for backup power and continuous prime power needs, the Cummins C22D5 silent diesel generator combines robust performance, low emissions, and ease of maintenance. Its compact design and low noise profile make it suitable for use in both indoor and outdoor environments, providing peace of mind during power outages and operational demands.</p>
`,


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
          { label: "Engine Model", value: "X2.5-G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Lube Oil Capacity", value: "7.3 L" },
          { label: "Overspeed Limit", value: "1 725 rpm" },
        ],
      },
      {
        group: "Alternator Specs",
        items: [
          { label: "Model", value: "Stamford S0L2‑M1" },
          { label: "Insulation Class", value: "H" },
          { label: "IP Rating", value: "IP23" },
          { label: "Stator Winding Resistance (Ra)", value: "≈ 0.219 Ω" },
          { label: "Vibration Grade", value: "BS6861 Grade 2.5" },
        ],
      },

      {
        group: "Control Panel Specs",
        items: [
          { label: "Controller Model", value: "Cummins PowerStart 0600" },
          { label: "Display", value: "128×64 pixel monochrome LCD" },
          { label: "Battery Operation", value: "12 V and 24 V supported" },
          { label: "Fault Sensors", value: "Under/Over voltage, Frequency, Breaker failure" },
          { label: "AMF Function", value: "Open‑transition Auto Mains Failure" },
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
    emissions: ""
  },
  {
    title: "Cummins C22D5Q",
    metaTitle: "Cummins C22D5Q Silent Diesel Generator",
    metaDescription: "Cummins C22D5Q 22 kVA (Standby) / 20 kVA (Prime), 50Hz silent diesel generator with Cummins X2.5‑G2 engine & Stamford S0L2‑G1 alternator. Reliable three‑phase power.",
    slug: "c22d5q",
    image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
    fullspec: "/generators/cummins/cummins-c22d5q-data-sheet.pdf",
    brand: "Cummins",
    category: "cummins",
    engine: "Cummins X2.5‑G2",
    ampsperphase: "31.8",
    controlpanel: "Cummins PowerStart 0600",
    alternator: "Stamford S0L2‑G1",
    frequency: "50Hz",
    fuelType: "Diesel",
    phase: "Three Phase",
    voltage: "400 V",
    buildType: "Silent",
    startType: "Auto Start (12 V DC)",
    size: 22,
    standbyPower: "22 kVA",
    primePower: "20 kVA",
    description: `
<p>The Cummins C22D5Q is a compact yet robust 22 kVA silent diesel generator from the Q‑Range, designed for stationary, standby and prime power applications.</p>

<p>Powered by the Cummins X2.5‑G2 naturally aspirated 3‑cylinder engine running at 1 500 rpm, this genset delivers prime output of 20 kVA (16 kW) and standby output of 22 kVA (18 kW) with reliable voltage regulation (± 2.5%) and droop frequency control. The Stamford S0L2‑G1 alternator provides consistent 400 V three‑phase output at 50Hz. Integrated microprocessor‑based PowerStart 0600 controls offer automatic start/stop, comprehensive fault protection, and digital metering.</p>

<p>Built in Europe and certified CE/UKCA, the C22D5Q features a standard 55 L fuel tank (≈ 13 h autonomy at 75 % PRP), coolant heater, battery charger and SLI battery system. Its compact and stackable silent canopy design ensures ease of transport, storage, and low noise levels (≈ 77 dB(A) at 1 m, 65 dB(A) at 7 m).</p>
`,
    ratedSpeed: "1500 rpm",
    aspiration: "Naturally Aspirated",
    fuelSystem: "Direct Injection",
    governorType: "Mechanical",
    displacement: "2.5 L",
    boreStroke: "91.4 × 127 mm",
    compressionRatio: "18.5 : 1",
    lubeOilCapacity: "7.3 / 8.0 L",
    coolingSystem: "Water Cooled with radiator",
    specs: [
      {
        group: "Engine Specs",
        items: [
          { label: "Engine Model", value: "X2.5‑G2 (3‑cyl, naturally aspirated)" },
          { label: "Rated Speed", value: "1 500 rpm" },
          { label: "Bore × Stroke", value: "91.4 × 127 mm" },
          { label: "Displacement", value: "2.5 L" },
          { label: "Lube Oil Capacity", value: "7.3 L (pan) / 8.0 L (total)" }
        ]
      },
      {
        group: "Alternator Specs",
        items: [
          { label: "Model", value: "Stamford S0L2‑G1" },
          { label: "Insulation Class", value: "H" },
          { label: "Voltage Regulation", value: "± 2.5 % (no load to full load)" },
          { label: "Frequency Regulation", value: "Droop, ± 0.75 % random" }
        ]
      },
      {
        group: "Control Panel Specs",
        items: [
          { label: "Controller Model", value: "PowerStart 0600" },
          { label: "Display", value: "128×64 monochrome LCD with LED indicators" },
          { label: "Battery Operation", value: "12 V DC (SLI battery & charger included)" },
          { label: "Functions", value: "Auto/Manual start, metering, fault annunciation, AMF, remote start" }
        ]
      },
      {
        group: "Fuel & Consumption",
        items: [
          { label: "Fuel Tank Capacity", value: "55 L" },
          { label: "Autonomy @ 75 % PRP", value: "≈ 13 h" },
          { label: "Fuel Consumption @ 100 %", value: "≈ 5.2 L/hr" }
        ]
      },
      {
        group: "Noise & Sound",
        items: [
          { label: "Sound Power Level (Enclosed)", value: "94 dB(A) measured / 96 dB(A) guaranteed" },
          { label: "Sound Pressure @1 m", value: "77 dB(A)" },
          { label: "Sound Pressure @7 m", value: "65 dB(A)" }
        ]
      },
      {
        group: "Dimensions & Weight",
        items: [
          { label: "Enclosed Set (L×W×H)", value: "1 960 × 820 × 1 285 mm" },
          { label: "Dry Weight", value: "≈ 715 kg" }
        ]
      },
      {
        group: "Standards & Accessories",
        items: [
          { label: "Certifications", value: "CE / UKCA" },
          { label: "Coolant Heater", value: "230 VAC, standard" },
          { label: "Battery System", value: "Flooded SLI with charger & disconnector" },
          { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" }
        ]
      }
    ],
    emissions: ""
  },
{
  title: "Cummins C28D5",
  metaTitle: "Cummins C28D5 Silent Diesel Generator",
  metaDescription: "Cummins C28D5 27.5 kVA standby / 25 kVA prime, 50Hz silent diesel generator with Cummins X2.5‑G2 engine & Stamford S0L2‑P1 alternator. Reliable three‑phase power.",
  slug: "c28d5",
  image: "/generators/cummins/22kva-28kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c28d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X2.5‑G2",
  ampsperphase: "39.6",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford S0L2‑P1",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 28,
  standbyPower: "27.5 kVA",
  primePower: "25 kVA",
  description: `
<p>The Cummins C28D5 is a compact and powerful 28 kVA silent diesel generator built for reliable three‑phase standby and prime power applications.</p>

<p>Equipped with the Cummins X2.5‑G2 naturally aspirated 3‑cylinder engine operating at 1 500 rpm, it delivers a prime rating of 25 kVA (20 kW) and standby rating of 27.5 kVA (22 kW). The Stamford S0L2‑P1 brushless alternator ensures stable output with ± 1% voltage regulation and droop frequency control. The PowerStart 0600 control panel provides automatic start/stop, robust metering, fault diagnostics, and AMF capability.</p>

<p>Designed for silent operation under enclosed or open configurations, the C28D5 features a large 150 L base fuel tank, low noise canopy (~77 dB(A) at 1 m), and meets ISO, CE standards. It’s ideal for commercial, industrial, and data center usage.</p>
`,
  compressionRatio: "18.5 : 1",
  ratedSpeed: "1 500 rpm",
  aspiration: "Naturally Aspirated",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "2.5 L",
  boreStroke: "91.4 × 127 mm",
  lubeOilCapacity: "7.3 L",
  coolingSystem: "Water Cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "X2.5‑G2 (3‑cyl, naturally aspirated)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "91.4 × 127 mm" },
        { label: "Compression Ratio", value: "18.5 : 1" },
        { label: "Lube Oil Capacity", value: "7.3 L" },
        { label: "Overspeed Limit", value: "1 725 rpm" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S0L2‑P1" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 % (no load to full load)" },
        { label: "Frequency Regulation", value: "Droop" },
        { label: "Random Frequency Variation", value: "± 0.25 %" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600" },
        { label: "Display", value: "LCD with LED indicators" },
        { label: "Functions", value: "Auto/manual start, metering, fault annun., AMF, remote start" },
        { label: "Starting Voltage", value: "12 V DC" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "150 L" },
        { label: "Fuel Consumption @Full Load", value: "≈ 6.5 L/hr (standby) / 6.0 L/hr (prime)" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 7 L (with radiator)" },
        { label: "Combustion Air Flow", value: "2.30 m³/min" },
        { label: "Ambient Rating", value: "50 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "660 °C" },
        { label: "Max Back Pressure", value: "3.38 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "1 667 × 930 × 1 282 mm" },
        { label: "Enclosed Set (L×W×H)", value: "2 082 × 987 × 1 524 mm" },
        { label: "Dry Weight (Open)", value: "≈ 694 kg" },
        { label: "Dry Weight (Enclosed)", value: "≈ 716 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Governor Type", value: "Mechanical" },
        { label: "Certification", value: "ISO, CE/UKCA" },
        { label: "Optional Extras", value: "Coolant heater, battery charger, ATS, extended fuel tank" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" }
      ]
    }
  ],
  emissions: ""
},
{
  title: "Cummins C33D5",
  metaTitle: "Cummins C33D5 Silent Diesel Generator",
  metaDescription: "Cummins C33D5 33 kVA standby / 30 kVA prime, 50Hz silent diesel generator with Cummins X3.3‑G1 engine & Stamford S0L2‑P1 alternator. Reliable three‑phase power.",
  slug: "c33d5",
  image: "/generators/cummins/33kva-38kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c33d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X3.3‑G1",
  ampsperphase: "47.5",
  controlpanel: "Cummins PowerCommand 1.1",
  alternator: "Stamford S0L2‑P1",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 33,
  standbyPower: "33 kVA",
  primePower: "30 kVA",
  description: `
<p>The Cummins C33D5 is a robust 33 kVA silent diesel generator designed for stationary standby and prime power applications.</p>

<p>It is powered by the Cummins X3.3‑G1 naturally aspirated in‑line 4‑cylinder engine operating at 1 500 rpm. The set provides 30 kVA (24 kW) prime and 33 kVA (26.4 kW) standby outputs. With the Stamford S0L2‑P1 alternator, voltage regulation is within ± 1%, and frequency is managed via droop control. The PowerCommand 1.1 control system offers automatic start/stop, full data display, metering, fault diagnostics, and AMF functionality.</p>

<p>Available in silent or weather‑protected enclosures, base fuel tank capacity is 175 L. Noise levels are approximately 77 dB(A) at 1 m. Certified to CE/ISO standards, the C33D5 includes optional features such as coolant heaters, battery chargers, and extended fuel tanks.</p>
`,
  compressionRatio: "18.5 : 1",
  ratedSpeed: "1 500 rpm",
  aspiration: "Naturally Aspirated",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "91.4 × 127 mm",
  lubeOilCapacity: "6.8 L",
  coolingSystem: "Water Cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "X3.3‑G1 (4‑cyl, naturally aspirated)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "91.4 × 127 mm" },
        { label: "Compression Ratio", value: "18.5 : 1" },
        { label: "Lube Oil Capacity", value: "6.8 L" },
        { label: "Overspeed Limit", value: "1 725 rpm" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S0L2‑P1" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.1" },
        { label: "Display", value: "LCD with status messages & metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, remote start" },
        { label: "Starting Voltage", value: "12 V DC" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "175 L" },
        { label: "Fuel Consumption @ Full Load (Standby)", value: "≈ 8.7 L/hr" },
        { label: "Fuel Consumption @ Full Load (Prime)", value: "≈ 7.6 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "26 L (with radiator)" },
        { label: "Combustion Air Flow", value: "2.06 m³/min" },
        { label: "Ambient Rating", value: "50 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Temp", value: "≈ 600 °C" },
        { label: "Exhaust Flow", value: "2.29 m³/min" },
        { label: "Max Back Pressure", value: "4.75 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "≈ 1 753 × 930 × 1 238 mm" },
        { label: "Enclosed Set (L×W×H)", value: "≈ 2 253 × 969 × 1 619 mm" },
        { label: "Dry Weight (Open)", value: "≈ 708 kg" },
        { label: "Dry Weight (Enclosed)", value: "≈ 1 092 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "ISO / CE" },
        { label: "Optional Features", value: "Coolant heater, battery charger, ATS, extended fuel tank" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" }
      ]
    }
  ],
  emissions: ""
},
{
  title: "Cummins C38D5",
  metaTitle: "Cummins C38D5 Silent Diesel Generator",
  metaDescription: "Cummins C38D5 38 kVA standby / 35 kVA prime, 50Hz silent diesel generator with Cummins X3.3-G1 engine & Stamford S1L2-J1 alternator. Reliable three-phase power.",
  slug: "c38d5",
  image: "/generators/cummins/33kva-38kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c38d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X3.3-G1",
  ampsperphase: "54.7",
  controlpanel: "Cummins PowerCommand 1.1",
  alternator: "Stamford S1L2-J1",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 38,
  standbyPower: "38 kVA",
  primePower: "35 kVA",
  description: `
<p>The Cummins C38D5 is a robust 38 kVA silent diesel generator designed for standby and prime power applications.</p>

<p>Powered by the Cummins X3.3‑G1 in-line 4‑cylinder, naturally aspirated engine running at 1500 rpm, it offers 35 kVA prime (28 kW) and 38 kVA standby (30.4 kW). The Stamford S1L2‑J1 alternator delivers consistent three‑phase voltage. The PowerCommand 1.1 control panel provides auto/start-stop, full metering, diagnostics, and AMF functions.</p>

<p>Equipped with a 175 L base fuel tank, sound‑attenuated enclosure (~77 dB(A) at 1 m), and optional accessories like battery charger and coolant heater, this CE/ISO compliant genset is ideal for demanding industrial use.</p>
`,
  compressionRatio: "18.5 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Naturally Aspirated",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "91.4 × 127 mm",
  lubeOilCapacity: "6.8 L",
  coolingSystem: "Water Cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "X3.3‑G1 (4‑cyl, naturally aspirated)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "91.4 × 127 mm" },
        { label: "Compression Ratio", value: "18.5 : 1" },
        { label: "Lube Oil Capacity", value: "6.8 L" },
        { label: "Overspeed Limit", value: "1725 rpm" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S1L2‑J1" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.1" },
        { label: "Display", value: "128×64 LCD with LED indicators" },
        { label: "Functions", value: "Auto/manual start, AMF, fault annunciation, remote start" },
        { label: "Starting Voltage", value: "12 V DC" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Base Fuel Tank Capacity", value: "175 L" },
        { label: "Fuel Consumption @Full Load", value: "≈ 10.8 L/hr (standby) / ≈ 9.0 L/hr (prime)" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "26 L (with radiator)" },
        { label: "Combustion Air Flow", value: "2.06 m³/min" },
        { label: "Ambient Rating", value: "50 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 600 °C" },
        { label: "Exhaust Flow", value: "2.29 m³/min" },
        { label: "Max Back Pressure", value: "4.75 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "1753 × 930 × 1238 mm" },
        { label: "Enclosed Set (L×W×H)", value: "2253 × 969 × 1619 mm" },
        { label: "Dry Weight (Open)", value: "743 kg" },
        { label: "Dry Weight (Enclosed)", value: "1127 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "ISO / CE" },
        { label: "Optional Features", value: "Coolant heater, battery charger, ATS, extended fuel tank" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" }
      ]
    }
  ],
  emissions: ""
},
{
  title: "Cummins C38D5Q",
  metaTitle: "Cummins C38D5Q Silent Diesel Generator",
  metaDescription: "Cummins C38D5Q 38 kVA standby / 35 kVA prime, 50Hz silent diesel generator with Cummins X3.3‑G1 engine & Stamford S1L2‑J1 alternator. Reliable three‑phase power.",
  slug: "c38d5q",
  image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c38d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X3.3‑G1",
  ampsperphase: "54.8",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford S1L2‑J1",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400‑230 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 38,
  standbyPower: "38 kVA",
  primePower: "35 kVA",
  description: `
<p>The Cummins C38D5Q is a sound-attenuated diesel generator offering 38 kVA standby / 35 kVA prime output, engineered for stationary standby and prime applications across commercial and industrial sectors.</p>

<p>Driven by a Cummins X3.3‑G1 naturally aspirated 4-cylinder engine at 1500 rpm, it delivers stable performance with ± 2.5% voltage regulation and droop frequency control. The Stamford S1L2‑J1 alternator ensures reliable 400 V three-phase power. The PowerStart 0600 microprocessor-based control system enables automatic start/stop, comprehensive diagnostics, metering and AMF functions.</p>

<p>Standard features include a 55 L base fuel tank (≈ 8.6 h autonomy at 75% PRP), coolant heater, flooded SLI battery with charger, and a quiet canopy delivering ~76 dB(A) at 1 m and ~64 dB(A) at 7 m. The genset is CE/UKCA certified and backed by a full warranty network.</p>
`,
  compressionRatio: "18.5 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Naturally Aspirated",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "91.4 × 127 mm",
  lubeOilCapacity: "6.8 L (pan) / 7.5 L total",
  coolingSystem: "Water Cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "X3.3‑G1 (4‑cyl, naturally aspirated)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "91.4 × 127 mm" },
        { label: "Compression Ratio", value: "18.5 : 1" },
        { label: "Lube Oil Capacity", value: "6.8 L (pan) / 7.5 L (total)" },
        { label: "Overspeed Limit", value: "1725 rpm" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S1L2‑J1" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 2.5 % (no‑load to full‑load)" },
        { label: "Frequency Regulation", value: "Droop; random ± 0.75 %" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600" },
        { label: "Display", value: "128×64 monochrome LCD with LED indicators" },
        { label: "Functions", value: "Auto/manual/remote start, AMF, fault annunciation, metering" },
        { label: "Starting Voltage", value: "12 V DC" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "55 L" },
        { label: "Autonomy @ 75 % PRP", value: "≈ 8.6 h" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 10.8 L/hr (standby), ≈ 9.0 L/hr (prime)" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "26 L (with radiator)" },
        { label: "Combustion Air Flow", value: "2.06 m³/min" },
        { label: "Ambient Rating", value: "50 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 600 °C" },
        { label: "Exhaust Flow", value: "2.29 m³/min" },
        { label: "Max Back Pressure", value: "4.75 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "1 960 × 820 × 1 285 mm" },
        { label: "Enclosed Set (L×W×H)", value: "1 960 × 820 × 1 285 mm (enclosed variant)" },
        { label: "Dry Weight (Open)", value: "≈ 649 kg" },
        { label: "Dry Weight (Enclosed)", value: "≈ 800 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Included Features", value: "Coolant heater, battery charger, ATS options" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" }
      ]
    }
  ],
  emissions: ""
},
{
  title: "Cummins C44D5E",
  metaTitle: "Cummins C44D5E Silent Diesel Generator",
  metaDescription: "Cummins C44D5E 44 kVA standby / 40 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UCI224C alternator. Reliable three‑phase power.",
  slug: "c44d5e",
  image: "/generators/cummins/44kva-55kva-66kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c44d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emissions: "Stage IIIa",
  ampsperphase: "63.3",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UCI224C",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 44,
  standbyPower: "44 kVA",
  primePower: "40 kVA",
  description: `
<p>The Cummins C44D5E is a high‑performance 44 kVA silent diesel generator engineered for reliable standby and prime power applications.</p>

<p>Powered by the turbocharged and after‑cooled Cummins 4BTAA3.3‑G14 inline 4‑cylinder engine running at 1500 rpm, it delivers 40 kVA (32 kW) prime and 44 kVA (35 kW) standby outputs. The Stamford UCI224C alternator ensures ± 1% voltage regulation and reliable frequency via mechanical governor. The PowerStart 0600 microprocessor control offers automatic start/stop, fault diagnostics, metering, and AMF capabilities.</p>

<p>Equipped with a 180 L base fuel tank, low sound canopy (~76 dB(A) at 1 m), CE/Stage IIIa compliant design, and optional extras including coolant heater and battery charger, the C44D5E is ideal for industrial and commercial backup needs.</p>
`,
  compressionRatio: "19 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑cooled",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "95 × 115 mm",
  lubeOilCapacity: "8 L",
  coolingSystem: "Water Cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "4BTAA3.3‑G14 (inline‑4, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "95 × 115 mm" },
        { label: "Compression Ratio", value: "19 : 1" },
        { label: "Lube Oil Capacity", value: "8 L" },
        { label: "Overspeed Limit", value: "1650 rpm" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI224C" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 % (line‑to‑line)" },
        { label: "Frequency Regulation", value: "Droop control" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600" },
        { label: "Display", value: "LCD with status metering & LED indicators" },
        { label: "Functions", value: "Auto/manual start, AMF, fault annunciation, metering" },
        { label: "Starting Voltage", value: "12 V DC" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "180 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 10.4 L/hr (standby), ≈ 10.2 L/hr (prime)" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "10.3 L (with radiator)" },
        { label: "Combustion Air Flow", value: "4.92 m³/min (standby)" },
        { label: "Ambient Rating", value: "55 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Temp", value: "≈ 497 °C (standby)" },
        { label: "Exhaust Flow", value: "≈ 13.02 m³/min" },
        { label: "Max Back Pressure", value: "10 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2050 × 967 × 1510 mm" },
        { label: "Enclosed Set (L×W×H)", value: "2270 × 975 × 1920 mm" },
        { label: "Dry Weight (Open)", value: "922 kg" },
        { label: "Dry Weight (Enclosed)", value: "1236 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" }
      ]
    }
  ],
},
{
  title: "Cummins C55D5E",
  metaTitle: "Cummins C55D5E Silent Diesel Generator",
  metaDescription: "Cummins C55D5E 55 kVA standby / 50 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3-G14 engine & Stamford UCI224D alternator. Reliable three-phase power.",
  slug: "c55d5e",
  image: "/generators/cummins/44kva-55kva-66kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c55d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3-G14",
  emissions: "Stage IIIa",
  ampsperphase: "79",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UCI224D",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 55,
  standbyPower: "55 kVA",
  primePower: "50 kVA",
  description: `
<p>The Cummins C55D5E is a powerful 55 kVA silent diesel generator built for dependable standby and prime power applications.</p>

<p>Featuring the turbocharged and after-cooled Cummins 4BTAA3.3-G14 engine running at 1500 rpm, it delivers stable output with efficient fuel consumption. The Stamford UCI224D alternator provides consistent three-phase power with excellent voltage regulation. The PowerStart 0600 control panel offers comprehensive monitoring and automatic start/stop functionality.</p>

<p>Ideal for commercial and industrial use, this generator is CE/Stage IIIa compliant, comes with a low noise canopy, and offers optional extras like battery charger and coolant heater.</p>
  `,
  compressionRatio: "19 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After-Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "8 L",
  coolingSystem: "Water Cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "4BTAA3.3-G14 (inline 4, turbocharged & after-cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "19 : 1" },
        { label: "Lube Oil Capacity", value: "8 L" },
        { label: "Overspeed Limit", value: "1650 rpm" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI224D" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600" },
        { label: "Display", value: "LCD with metering & LED indicators" },
        { label: "Functions", value: "Auto/manual start, AMF, fault annunciation, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "180 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 13.2 L/hr (standby), ≈ 12.0 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "10.3 L" },
        { label: "Combustion Air Flow", value: "≈ 4.92 m³/min (standby)" },
        { label: "Ambient Rating", value: "55 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 540 °C (standby), ≈ 492 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 13.0 m³/min" },
        { label: "Max Back Pressure", value: "10 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2050 × 967 × 1510 mm" },
        { label: "Enclosed Set (L×W×H)", value: "2270 × 975 × 1920 mm" },
        { label: "Dry Weight (Open)", value: "922 kg" },
        { label: "Dry Weight (Enclosed)", value: "1236 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C55D5EQ",
  metaTitle: "Cummins C55D5EQ Silent Diesel Generator",
  metaDescription: "Cummins C55D5EQ 55 kVA standby / 50 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UC224D alternator. Reliable three‑phase power.",
  slug: "c55d5eq",
  image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c55d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emissions: "Stage IIIa",
  ampsperphase: "79.5",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UC224D",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 / 230 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 55,
  standbyPower: "55 kVA",
  primePower: "50 kVA",
  description: `
<p>The Cummins C55D5EQ Q‑Range generator delivers 55 kVA standby and 50 kVA prime power in a sound‑attenuated canopy.</p>

<p>Powered by the turbocharged and after‑cooled Cummins 4BTAA3.3‑G14 Stage IIIa engine running at 1500 rpm and featuring the Stamford UC224D alternator, it provides stable three‑phase output with ±1 % voltage regulation. The PowerStart 0600 control panel offers automatic start/stop, diagnostics and full metering.</p>

<p>Designed for industrial and commercial backup power, it includes CE/UKCA compliance and options like coolant heater, battery charger, extended tank and ATS.</p>
`,
  compressionRatio: "19 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "8 L",
  coolingSystem: "Water Cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "4BTAA3.3‑G14 (inline‑4, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "19 : 1" },
        { label: "Lube Oil Capacity", value: "8 L" },
        { label: "Overspeed Limit", value: "1650 rpm" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UC224D" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600" },
        { label: "Display", value: "LCD with metering & LED indicators" },
        { label: "Functions", value: "Auto/manual start, AMF, fault annunciation, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 200 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 13.2 L/hr (standby), ≈ 12.0 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 10.3 L" },
        { label: "Combustion Air Flow", value: "≈ 4.9 m³/min" },
        { label: "Ambient Rating", value: "55 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 540 °C (standby), ≈ 492 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 13.0 m³/min" },
        { label: "Max Back Pressure", value: "10 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2315 × 1015 × 1685 mm" },
        { label: "Enclosed Set (L×W×H)", value: "2315 × 1015 × 1685 mm" },
        { label: "Dry Weight (Open)", value: "≈ 649 kg" },
        { label: "Dry Weight (Enclosed)", value: "≈ 800 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C66D5E",
  metaTitle: "Cummins C66D5E Silent Diesel Generator",
  metaDescription: "Cummins C66D5E 66 kVA standby / 60 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UCI22 4F alternator. Reliable three‑phase power.",
  slug: "c66d5e",
  image: "/generators/cummins/44kva-55kva-66kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c66d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emissions: "Stage IIIa",
  ampsperphase: "95",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UCI22 4F",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 66,
  standbyPower: "66 kVA",
  primePower: "60 kVA",
  description: `
<p>The Cummins C66D5E is a robust 66 kVA (53 kW) standby / 60 kVA (48 kW) prime silent diesel generator suited for commercial and industrial backup power.</p>

<p>Equipped with the turbocharged and after‑cooled Cummins 4BTAA3.3‑G14 engine at 1500 rpm, it ensures consistent performance with efficient fuel consumption. The Stamford UCI22 4F alternator offers stable three‑phase output with ±1 % voltage regulation. The PowerStart 0600 control panel supports auto/manual start, diagnostics, metering, and AMF functionality.</p>

<p>Compliant with Stage IIIa and CE/UKCA standards, it features a sound‑attenuated enclosure and options including battery charger, coolant heater, extended tank, and ATS.</p>
`,
  compressionRatio: "19 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "95 × 115 mm",
  lubeOilCapacity: "8 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "4BTAA3.3‑G14 (inline‑4, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "95 × 115 mm" },
        { label: "Compression Ratio", value: "19 : 1" },
        { label: "Lube Oil Capacity", value: "8 L" },
        { label: "Overspeed Limit", value: "1650 rpm" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI22 4F" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600" },
        { label: "Display", value: "LCD with metering & LED indicators" },
        { label: "Functions", value: "Auto/manual start, AMF, fault annunciation, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "180 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 16.2 L/hr (standby), ≈ 14.0 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 10.7 L" },
        { label: "Combustion Air Flow", value: "≈ 4.92 m³/min (standby), ≈ 4.47 m³/min (prime)" },
        { label: "Ambient Rating", value: "55 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 497 °C (standby), ≈ 492 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 13.02 m³/min (standby), ≈ 11.63 m³/min (prime)" },
        { label: "Max Back Pressure", value: "10 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2050 × 967 × 1510 mm" },
        { label: "Enclosed Set (L×W×H)", value: "2270 × 975 × 1920 mm" },
        { label: "Dry Weight (Open)", value: "1019 kg" },
        { label: "Dry Weight (Enclosed)", value: "1423 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C66D5EQ",
  metaTitle: "Cummins C66D5EQ Silent Diesel Generator",
  metaDescription: "Cummins C66D5EQ 66 kVA standby / 60 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UC224F alternator. Reliable three‑phase power.",
  slug: "c66d5eq",
  image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c66d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emissions: "Stage IIIa",
  ampsperphase: "95.4",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UC224F",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 66,
  standbyPower: "66 kVA",
  primePower: "60 kVA",
  description: `
<p>The Cummins C66D5EQ Q‑Range generator delivers 66 kVA standby and 60 kVA prime power in a sound‑attenuated canopy.</p>

<p>Powered by the turbocharged and after‑cooled Cummins 4BTAA3.3‑G14 engine at 1500 rpm and featuring the Stamford UC224F alternator, it provides stable three‑phase output with ± 1 % voltage regulation. The PowerStart 0600 control panel offers automatic start/stop, diagnostics and full metering.</p>

<p>Designed for industrial and commercial backup power, it includes CE/UKCA compliance and options like coolant heater, battery charger, extended tank and ATS.</p>
`,
  compressionRatio: "19 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Mechanical",
  displacement: "3.3 L",
  boreStroke: "95 × 115 mm",
  lubeOilCapacity: "8 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "4BTAA3.3‑G14 (inline‑4, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "95 × 115 mm" },
        { label: "Compression Ratio", value: "19 : 1" },
        { label: "Lube Oil Capacity", value: "8 L" },
        { label: "Overspeed Limit", value: "1650 rpm" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UC224F" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 0.63 % no‑load to full‑load" },
        { label: "Frequency Regulation", value: "6 % Droop" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600 (PS0600)" },
        { label: "Display", value: "LCD with metering & LED indicators" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "200 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 14 L/hr (standby / prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 10.7 L" },
        { label: "Combustion Air Flow", value: "≈ 4.92 m³/min (standby), ≈ 4.47 m³/min (prime)" },
        { label: "Ambient Rating", value: "55 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 497 °C (standby), ≈ 492 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 13.02 m³/min (standby), ≈ 11.63 m³/min (prime)" },
        { label: "Max Back Pressure", value: "10 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Enclosed Set (L×W×H)", value: "2315 × 1015 × 1685 mm" },
        { label: "Dry Weight (Enclosed)", value: "1,282 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C90D5",
  metaTitle: "Cummins C90D5 Silent Diesel Generator",
  metaDescription: "Cummins C90D5 90 kVA standby / 82 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G5 engine & Stamford UCI224G alternator. Reliable three‑phase power.",
  slug: "c90d5",
  image: "/generators/cummins/90kva-110kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c90d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G5",
  emissions: "Unregulated / Stage IIIa (dependent on configuration)",
  ampsperphase: "129.6",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI224G",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 90,
  standbyPower: "90 kVA",
  primePower: "82 kVA",
  description: `
<p>The Cummins C90D5 is a 90 kVA (72 kW) standby / 82 kVA (66 kW) prime 50Hz silent diesel generator, ideal for demanding industrial and commercial applications.</p>

<p>Powered by a rugged Cummins 6BTA5.9-G5 inline‑6 turbocharged & after‑cooled engine running at 1500 rpm, it delivers dependable performance under load. The brushless Stamford UCI224G alternator ensures stable three‑phase voltage with ±1 % regulation. The PowerCommand 1.2 control system offers auto/start, diagnostics and full protection features.</p>

<p>Sound‑attenuated enclosure, compliant with CE (and optionally Stage IIIa in applicable regions), is available with accessories such as battery charger, water heater and extended fuel tank.</p>
`,
  compressionRatio: "16.5 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "5.9 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "≈ 6 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "6BTA5.9‑G5 (inline‑6, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "16.5 : 1" },
        { label: "Lube Oil Capacity", value: "≈ 6 L" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI224G" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, fault annunciation, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 350 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 21.2 L/hr (at standby rating)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 6 L" },
        { label: "Combustion Air Flow", value: "≈ 6.3 m³/min" },
        { label: "Ambient Rating", value: "55 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 540 °C" },
        { label: "Exhaust Flow", value: "≈ 9.5 m³/min" },
        { label: "Max Back Pressure", value: "≈ 10 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3151 × 1142 × 1714 mm" },
        { label: "Enclosed Set (L×W×H)", value: "3151 × 1142 × 1714 mm" },
        { label: "Dry Weight (Enclosed)", value: "1,944 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA (unregulated engine unless Stage IIIa specified)" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C110D5",
  metaTitle: "Cummins C110D5 Silent Diesel Generator",
  metaDescription: "Cummins C110D5 110 kVA standby / 100 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G5 engine & Stamford UCI274C alternator. Reliable three‑phase power.",
  slug: "c110d5",
  image: "/generators/cummins/90kva-110kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c110d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G5",
  emissions: "Unregulated",
  ampsperphase: "159.6",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274C",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 110,
  standbyPower: "110 kVA",
  primePower: "100 kVA",
  description: `
<p>The Cummins C110D5 is a 110 kVA (88 kW) standby / 100 kVA (80 kW) prime 50Hz silent diesel generator, designed for high-demand commercial and industrial power applications.</p>

<p>Powered by a robust turbocharged and after‑cooled Cummins 6BTA5.9‑G5 inline‑6 engine running at 1500 rpm, it delivers dependable performance. The Stamford UCI274C alternator provides stable three‑phase voltage with ±1 % regulation. The PowerCommand 1.2 control system supports auto/manual start, diagnostics, fault protection, and metering.</p>

<p>Comes in a sound‑attenuated enclosure compliant with CE/UKCA. Accessories include battery charger, coolant heater, extended fuel tank, and ATS options.</p>
`,
  compressionRatio: "17.6 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "5.9 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "16.4 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "6BTA5.9‑G5 (inline‑6, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "17.6 : 1" },
        { label: "Lube Oil Capacity", value: "16.4 L" },
        { label: "Overspeed Limit", value: "1800 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI274C" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, fault annunciation, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "350 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 27.2 L/hr (standby), ≈ 24.7 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 19.8 L" },
        { label: "Combustion Air Flow", value: "≈ 7.86 m³/min (standby), ≈ 7.2 m³/min (prime)" },
        { label: "Ambient Rating", value: "54 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 540 °C (standby), ≈ 533 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 21.4 m³/min (standby), ≈ 19.5 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.5 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2268 × 1094 × 1576 mm" },
        { label: "Enclosed Set (L×W×H)", value: "3151 × 1142 × 1714 mm" },
        { label: "Dry Weight (Open)", value: "1,263 kg" },
        { label: "Dry Weight (Enclosed)", value: "1,963 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C110D5Q",
  metaTitle: "Cummins C110D5Q Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C110D5Q 110 kVA standby / 100 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G5 engine & Stamford UC274C alternator. Reliable three‑phase power.",
  slug: "c110d5q",
  image: "/generators/cummins/110kva-170kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c110d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G5",
  emissions: "Unregulated",
  ampsperphase: "158.4",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UC274C",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 110,
  standbyPower: "110 kVA",
  primePower: "100 kVA",
  description: `
<p>The Cummins C110D5Q is a 110 kVA (88 kW) standby / 100 kVA (80 kW) 50Hz sound‑attenuated generator from the Q‑Range. Powered by the 6BTA5.9‑G5 turbocharged and after‑cooled engine running at 1500 rpm, it ensures reliable performance with efficient fuel consumption. The Stamford UC274C alternator delivers steady three‑phase output with ± 1 % voltage regulation. Controlled via the PowerStart 0600 microprocessor panel for automatic start, diagnostics, fault protection, and metering.</p>

<p>Includes a CE/UKCA‑approved canopy, with options like battery charger, coolant heater, extended fuel tank and ATS. Emissions level is unregulated for this Q‑Range model.</p>
`,
  compressionRatio: "17.6 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "5.9 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "≈ 16.4 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "6BTA5.9‑G5 (inline‑6, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "17.6 : 1" },
        { label: "Lube Oil Capacity", value: "≈ 16.4 L" },
        { label: "Overspeed Limit", value: "1800 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UC274C" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control, isochronous" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600 (PS0600)" },
        { label: "Display", value: "LCD + LED indicators" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "400 L (base tank)" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 27.2 L/hr (standby), ≈ 24.7 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 19.75 L" },
        { label: "Combustion Air Flow", value: "≈ 7.86 m³/min (standby), ≈ 7.2 m³/min (prime)" },
        { label: "Ambient Rating", value: "54 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 540 °C (standby), ≈ 533 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 21.4 m³/min (standby), ≈ 19.5 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.5 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Enclosed Set (L×W×H)", value: "3166 × 1100 × 1981 mm" },
        { label: "Dry Weight (Enclosed)", value: "1,898 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C150D5",
  metaTitle: "Cummins C150D5 Silent Diesel Generator",
  metaDescription: "Cummins C150D5 150 kVA standby / 136 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G6 engine & Stamford UCI274E alternator. Reliable three‑phase power.",
  slug: "c150d5",
  image: "/generators/cummins/150kva-170kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c150d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G6",
  emissions: "Unregulated",
  ampsperphase: "217",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274E",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 150,
  standbyPower: "150 kVA",
  primePower: "136 kVA",
  description: `
<p>The Cummins C150D5 is a robust 150 kVA (120 kW) standby / 136 kVA (109 kW) prime 50Hz silent diesel generator, ideal for industrial and commercial backup applications.</p>

<p>Equipped with the turbocharged and charge‑air cooled Cummins 6BTA5.9‑G6 inline‑6 engine running at 1500 rpm, it delivers dependable performance under load. The Stamford UCI274E alternator ensures stable three‑phase output with ±1 % voltage regulation. The PowerCommand 1.2 control system offers automatic start/stop, diagnostics, protection, and full metering.</p>

<p>Mounted in a sound‑attenuated canopy compliant with CE/UKCA. Optional extras include extended fuel tanks, battery charger, coolant heater, and ATS.</p>
`,
  compressionRatio: "16.5 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge-Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "5.9 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "16.4 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "6BTA5.9‑G6 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "16.5 : 1" },
        { label: "Lube Oil Capacity", value: "16.4 L" },
        { label: "Overspeed Limit", value: "1800 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI274E" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 448 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 36 L/hr (standby), ≈ 31.2 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 22.1 L" },
        { label: "Combustion Air Flow", value: "≈ 8.95 m³/min (standby), ≈ 8.35 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 520 °C (standby), ≈ 519 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 31 m³/min (standby), ≈ 29 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.15 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2537 × 1090 × 1846 mm" },
        { label: "Enclosed Set (L×W×H)", value: "3460 × 1090 × 2387 mm" },
        { label: "Dry Weight (Open)", value: "1,635 kg" },
        { label: "Dry Weight (Enclosed)", value: "2,390 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C170D5",
  metaTitle: "Cummins C170D5 Silent Diesel Generator",
  metaDescription: "Cummins C170D5 170 kVA standby / 155 kVA prime, 50Hz silent diesel generator with Cummins 6BTAA5.9‑G7 engine & Stamford UCI274F alternator. Reliable three‑phase power.",
  slug: "c170d5",
  image: "/generators/cummins/150kva-170kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c170d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTAA5.9‑G7",
  emissions: "Unregulated",
  ampsperphase: "245",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274F",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 170,
  standbyPower: "170 kVA",
  primePower: "155 kVA",
  description: `
<p>The Cummins C170D5 is a robust 170 kVA (136 kW) standby / 155 kVA (124 kW) 50Hz sound‑attenuated generator, ideal for industrial and commercial backup applications.</p>

<p>Powered by the turbocharged and charge‑air cooled Cummins 6BTAA5.9‑G7 inline‑6 engine running at 1500 rpm, it delivers dependable performance under load. The Stamford UCI274F alternator ensures stable three‑phase output with ±1 % voltage regulation. The PowerCommand 1.2 control system offers automatic start/stop, diagnostics, protection, and full metering.</p>

<p>Mounted in a sound‑attenuated canopy compliant with CE/UKCA. Optional extras include extended fuel tanks, battery charger, coolant heater, and ATS.</p>
`,
  compressionRatio: "16.5 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge-Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "5.9 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "16.4 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "6BTAA5.9‑G7 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "16.5 : 1" },
        { label: "Lube Oil Capacity", value: "16.4 L" },
        { label: "Overspeed Limit", value: "1800 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI274F" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 448 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 36 L/hr (standby), ≈ 31.2 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 22.1 L" },
        { label: "Combustion Air Flow", value: "≈ 8.95 m³/min (standby), ≈ 8.35 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 520 °C (standby), ≈ 519 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 31 m³/min (standby), ≈ 29 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.15 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2537 × 1090 × 1846 mm" },
        { label: "Enclosed Set (L×W×H)", value: "3460 × 1090 × 2387 mm" },
        { label: "Dry Weight (Open)", value: "1,635 kg" },
        { label: "Dry Weight (Enclosed)", value: "2,390 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C170D5Q",
  metaTitle: "Cummins C170D5Q Silent Diesel Generator",
  metaDescription: "Cummins C170D5Q 170 kVA standby / 155 kVA prime, 50Hz silent diesel generator with Cummins 6BTAA5.9‑G7 engine & Stamford UC274F alternator. Reliable three‑phase power.",
  slug: "c170d5q",
  image: "/generators/cummins/110kva-170kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c170d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTAA5.9‑G7",
  emissions: "Unregulated",
  ampsperphase: "245",
  controlpanel: "Cummins PowerStart PS0600",
  alternator: "Stamford UC274F",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400/230 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 170,
  standbyPower: "170 kVA",
  primePower: "155 kVA",
  description: `
<p>The Cummins C170D5Q is a robust 170 kVA (136 kW) standby / 155 kVA (124 kW) prime 50Hz silent diesel generator, ideal for industrial and commercial backup applications.</p>

<p>Powered by the turbocharged and charge‑air cooled Cummins 6BTAA5.9‑G7 inline‑6 engine running at 1500 rpm, it delivers dependable performance under load. The Stamford UC274F alternator ensures stable three‑phase output with ±1 % voltage regulation. The PowerStart PS0600 control system offers automatic start/stop, diagnostics, protection, and full metering.</p>

<p>Mounted in a sound‑attenuated and weather‑protective canopy compliant with CE/UKCA. Optional extras include extended fuel tanks, battery charger, coolant heater, and ATS.</p>
`,
  compressionRatio: "16.5 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge-Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "5.9 L",
  boreStroke: "102 × 120 mm",
  lubeOilCapacity: "16.4 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "6BTAA5.9‑G7 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "102 × 120 mm" },
        { label: "Compression Ratio", value: "16.5 : 1" },
        { label: "Lube Oil Capacity", value: "16.4 L" },
        { label: "Overspeed Limit", value: "1800 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UC274F" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart PS0600" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, diagnostics, protection, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "400 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 37 L/hr (standby), ≈ 31.5 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 22.1 L" },
        { label: "Combustion Air Flow", value: "≈ 12.42 m³/min (standby)" },
        { label: "Ambient Rating", value: "50 °C (open), 40 °C (enclosed)" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 533 °C (standby)" },
        { label: "Exhaust Flow", value: "≈ 32.46 m³/min (standby)" },
        { label: "Max Back Pressure", value: "≈ 10.25 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3100 × 1180 × 1950 mm" },
        { label: "Enclosed Set (L×W×H)", value: "3100 × 1180 × 1950 mm" },
        { label: "Dry Weight (Open)", value: "1,973 kg" },
        { label: "Dry Weight (Enclosed)", value: "1,973 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C220D5E",
  metaTitle: "Cummins C220D5E Silent Diesel Generator",
  metaDescription: "Cummins C220D5E 220 kVA standby / 200 kVA prime, 50Hz silent diesel generator with Cummins QSB7‑G5 engine & Stamford UCI274H alternator. Stage IIIa certified reliable three‑phase power.",
  slug: "c220d5e",
  image: "/generators/cummins/175kva-200kva-220kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c220d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSB7‑G5",
  emissions: "Stage IIIa",
  ampsperphase: "318",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274H",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 220,
  standbyPower: "220 kVA",
  primePower: "200 kVA",
  description: `
<p>The Cummins C220D5E is a certified Stage IIIa diesel generator offering 220 kVA (176 kW) standby / 200 kVA (160 kW) prime output at 50Hz. Powered by the Cummins QSB7‑G5 inline‑6 engine (turbocharged and charge‑air cooled) and Stamford UCI274H alternator, it delivers precise ± 1 % voltage regulation under load. The PowerCommand 1.2 control panel provides automated start/stop, diagnostics, protection, and full metering.</p>

<p>Designed for robust industrial and commercial standby applications, it comes in a sound‑attenuated and weather‑protective canopy compliant with CE/UKCA. Optional features include extended fuel tanks, coolant heater, battery charger, and ATS integration.</p>
`,
  compressionRatio: "17.2 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "≈ 7.44 L",
  boreStroke: "107 × 124 mm",
  lubeOilCapacity: "≈ 19 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSB7‑G5 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "107 × 124 mm" },
        { label: "Compression Ratio", value: "17.2 : 1" },
        { label: "Lube Oil Capacity", value: "≈ 19 L" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCI274H" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 464 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 48.8 L/hr (standby), ≈ 45.6 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 30.2 L" },
        { label: "Combustion Air Flow", value: "≈ 12.72 m³/min (standby), ≈ 12.30 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 561 °C (standby), ≈ 544 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 35.8 m³/min (standby), ≈ 34.1 m³/min (prime)" },
        { label: "Max Back Pressure", value: "10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "2656 × 1130 × 1822 mm" },
        { label: "Enclosed Set (L×W×H)", value: "4209 × 1130 × 2227 mm" },
        { label: "Dry Weight (Open)", value: "2,070 kg" },
        { label: "Dry Weight (Enclosed)", value: "2,984 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C220D5EQ",
  metaTitle: "Cummins C220D5EQ Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C220D5EQ 220 kVA standby / 200 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSB7‑G5 engine & Stamford UC274H alternator. Stage IIIa compliant reliable three‑phase power.",
  slug: "c220d5eq",
  image: "/generators/cummins/220kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c220d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSB7‑G5",
  emissions: "Stage IIIa",
  ampsperphase: "316.8",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UC274H",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Silent",
  startType: "Auto Start (12 V DC)",
  size: 220,
  standbyPower: "220 kVA",
  primePower: "200 kVA",
  description: `
<p>The Cummins C220D5EQ from the Q‑Range delivers 220 kVA (176 kW) standby and 200 kVA (160 kW) prime power at 50Hz. It is powered by the Stage IIIa compliant Cummins QSB7‑G5 turbocharged & charge‑air cooled engine running at 1500 rpm, coupled with a Stamford UC274H alternator offering ±1 % voltage regulation.</p>

<p>Controlled via the PowerCommand 1.2 microprocessor panel with automatic start/stop, diagnostics, fault protection, and full metering. The weather‑protective sound‑attenuated canopy is CE/UKCA certified, with options such as extended fuel tanks, battery charger, coolant heater, and ATS.</p>
`,
  compressionRatio: "17.2 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "≈ 7.44 L",
  boreStroke: "107 × 124 mm",
  lubeOilCapacity: "≈ 19 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSB7‑G5 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "107 × 124 mm" },
        { label: "Compression Ratio", value: "17.2 : 1" },
        { label: "Lube Oil Capacity", value: "≈ 19 L" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UC274H" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Isochronous / Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, fault protection, metering" },
        { label: "Starting Voltage", value: "12 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "400 L (base)" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 45.6 L/hr" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 30 L" },
        { label: "Combustion Air Flow", value: "≈ 12.7 m³/min (standby), ≈ 12.3 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 561 °C (standby), ≈ 544 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 35.8 m³/min (standby), ≈ 34.1 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Enclosed Set (L×W×H)", value: "3200 × 1180 × 1950 mm" },
        { label: "Dry Weight (Enclosed)", value: "≈ 2,984 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C275D5E",
  metaTitle: "Cummins C275D5E Silent Diesel Generator",
  metaDescription: "Cummins C275D5E 275 kVA standby / 250 kVA prime, 50Hz silent diesel generator with Cummins QSL9‑G5 engine & Stamford UCD274K alternator. Reliable three-phase power.",
  slug: "c275d5e",
  image: "/generators/cummins/275kva-300kva-330kva-350kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c275d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G5",
  emissions: "Unregulated",
  ampsperphase: "396",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCD274K",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 275,
  standbyPower: "275 kVA",
  primePower: "250 kVA",
  description: `
<p>The Cummins C275D5E is a strong 275 kVA (220 kW) standby / 250 kVA (200 kW) prime 50Hz silent diesel generator. Equipped with the electronic-governed, turbocharged and charge‑air cooled Cummins QSL9‑G5 engine and Stamford UCD274K alternator, it delivers ±1 % voltage regulation for stable output.</p>

<p>Featuring PowerCommand 1.2 control for auto/manual start, diagnostics, protection and metering. Designed with a sound‑attenuated and weather‑protective enclosure compliant with CE/UKCA. Options include extended fuel tanks, coolant heater, battery charger and ATS integration.</p>
`,
  compressionRatio: "16.8 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "9.0 L",
  boreStroke: "114 × 145 mm",
  lubeOilCapacity: "26.5 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSL9‑G5 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "114 × 145 mm" },
        { label: "Compression Ratio", value: "16.8 : 1" },
        { label: "Lube Oil Capacity", value: "26.5 L" },
        { label: "Overspeed Limit", value: "1800 ± 50 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCD274K" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 % (no‑load to full‑load)" },
        { label: "Frequency Regulation", value: "Isochronous / Droop" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 608 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 62.5 L/hr (standby), ≈ 52.5 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 40 L" },
        { label: "Combustion Air Flow", value: "≈ 20.67 m³/min (standby), ≈ 20.47 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 560 °C (standby), ≈ 500 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 53.0 m³/min (standby), ≈ 44.9 m³/min (prime)" },
        { label: "Max Back Pressure", value: "10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3135 × 1100 × 2018 mm" },
        { label: "Enclosed Set (L×W×H)", value: "4259 × 1424 × 2315 mm" },
        { label: "Dry Weight (Open)", value: "≈ 2,129 kg" },
        { label: "Dry Weight (Enclosed)", value: "≈ 4,125 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Unregulated / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C275D5EQ",
  metaTitle: "Cummins C275D5EQ Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C275D5EQ 275 kVA standby / 250 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSL9‑G7 engine & Stamford UCD274K alternator. Stage IIIa certified three‑phase power.",
  slug: "c275d5eq",
  image: "/generators/cummins/275kva-330kva-450kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c275d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G7",
  emissions: "Stage IIIa",
  ampsperphase: "396",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCD274K",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 275,
  standbyPower: "275 kVA",
  primePower: "250 kVA",
  description: `
<p>The Cummins C275D5EQ Q‑Range generator delivers 275 kVA (220 kW) standby and 250 kVA (200 kW) prime power at 50Hz. Powered by the turbocharged and charge‑air cooled Cummins QSL9‑G7 Stage IIIa engine running at 1500 rpm and paired with a Stamford UCD274K alternator offering ±1 % voltage regulation.</p>
<p>Equipped with the PowerCommand 1.2 microprocessor control system—with automatic start/stop, diagnostics, fault protection, and metering. The weather‑protected and sound‑attenuated canopy is CE/UKCA compliant. Optional extras include extended fuel tanks, coolant heater, battery charger, and ATS.</p>
`,
  compressionRatio: "16.8 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "9.0 L",
  boreStroke: "114 × 145 mm",
  lubeOilCapacity: "26.5 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSL9‑G7 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "114 × 145 mm" },
        { label: "Compression Ratio", value: "16.8 : 1" },
        { label: "Lube Oil Capacity", value: "26.5 L" },
        { label: "Overspeed Limit", value: "1800 ± 50 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford UCD274K" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 % (no‑load to full‑load)" },
        { label: "Frequency Regulation", value: "Isochronous / Droop control" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, protection, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 995 L (base tank)" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 62.5 L/hr (standby), ≈ 52.5 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 40 L" },
        { label: "Combustion Air Flow", value: "≈ 20.7 m³/min (standby), ≈ 20.5 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 560 °C (standby), ≈ 500 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 53.0 m³/min (standby), ≈ 44.9 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3135 × 1360 × 2018 mm" },
        { label: "Enclosed Set (L×W×H)", value: "4259 × 1424 × 2315 mm" },
        { label: "Dry Weight (Open)", value: "3,155 kg" },
        { label: "Dry Weight (Enclosed)", value: "≈ 4,125 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C330D5",
  metaTitle: "Cummins C330D5 Silent Diesel Generator",
  metaDescription: "Cummins C330D5 330 kVA standby / 300 kVA prime, 50Hz silent diesel generator with Cummins QSL9‑G5 engine & Stamford HC4D alternator. Reliable three‑phase power.",
  slug: "c330d5",
  image: "/generators/cummins/275kva-300kva-330kva-350kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c330d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G5",
  emissions: "Unregulated",
  ampsperphase: "475.2",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford HC4D",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 330,
  standbyPower: "330 kVA",
  primePower: "300 kVA",
  description: `
<p>The Cummins C330D5 is a high‑performance 330 kVA (264 kW) standby / 300 kVA (240 kW) prime 50Hz silent diesel generator. Powered by a rugged Cummins QSL9‑G5 turbocharged & charge‑air cooled inline‑6 engine running at 1500 rpm, it delivers dependable output and efficiency. The Stamford HC4D alternator ensures stable three‑phase voltage with ± 1 % regulation, while the PowerCommand 1.2 controller offers automatic start/stop, diagnostics, protection, and full monitoring.</p>

<p>Designed for demanding industrial and commercial applications, this generator features a sound‑attenuated, weather‑protective canopy compliant with CE/UKCA. Optional extras include extended fuel tanks, battery charger, coolant heater, and ATS.</p>
`,
  compressionRatio: "16.8 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "9.0 L",
  boreStroke: "114 × 145 mm",
  lubeOilCapacity: "26.5 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSL9‑G5 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "114 × 145 mm" },
        { label: "Compression Ratio", value: "16.8 : 1" },
        { label: "Lube Oil Capacity", value: "26.5 L" },
        { label: "Overspeed Limit", value: "1800 ± 50 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford HC4D" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 % (no‑load to full‑load)" },
        { label: "Frequency Regulation", value: "Droop / Isochronous" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, fault protection, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 691 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 63 L/hr" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity (with radiator)", value: "≈ 15 L" },
        { label: "Combustion Air Flow", value: "≈ 20.3 m³/min (standby), ≈ 18.7 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 560 °C (standby), ≈ 500 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 53.0 m³/min (standby), ≈ 44.9 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3135 × 1100 × 1928 mm" },
        { label: "Enclosed Set (L×W×H)", value: "4258 × 1424 × 2215 mm" },
        { label: "Dry Weight (Open)", value: "2346 kg" },
        { label: "Dry Weight (Enclosed)", value: "4095 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C330D5EQ",
  metaTitle: "Cummins C330D5EQ Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C330D5EQ 330 kVA standby / 300 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSL9‑G7 engine & Stamford HC444D alternator. Stage IIIa compliant three‑phase power.",
  slug: "c330d5eq",
  image: "/generators/cummins/275kva-330kva-450kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c330d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G7",
  emissions: "Stage IIIa",
  ampsperphase: "475.2",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford HC444D",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 330,
  standbyPower: "330 kVA",
  primePower: "300 kVA",
  description: `
<p>The Cummins C330D5EQ Q‑Range generator delivers 330 kVA (264 kW) standby and 300 kVA (240 kW) prime power at 50Hz. It is powered by the Stage IIIa‑certified Cummins QSL9‑G7 turbocharged & charge‑air cooled engine running at 1500 rpm, paired with a Stamford HC444D alternator offering ± 1 % voltage regulation.</p>

<p>Controlled via the PowerCommand 1.2 microprocessor panel with automatic start/stop, diagnostics, fault protection, and metering. The weather‑protected sound‑attenuated canopy is CE/UKCA certified. Optional extras include additional fuel tanks, battery charger, coolant heater, and ATS.</p>
`,
  compressionRatio: "16.8 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "9.0 L",
  boreStroke: "114 × 145 mm",
  lubeOilCapacity: "26.5 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSL9‑G7 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "114 × 145 mm" },
        { label: "Compression Ratio", value: "16.8 : 1" },
        { label: "Lube Oil Capacity", value: "26.5 L" },
        { label: "Overspeed Limit", value: "1800 ± 50 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford HC444D" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 % (no-load to full-load)" },
        { label: "Frequency Regulation", value: "Isochronous / Droop control" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, protection, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "995 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 70 L/hr" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustant Air Flow", value: "≈ 20.3 m³/min (standby), ≈ 18.7 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 560 °C (standby), ≈ 500 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 53.0 m³/min (standby), ≈ 44.9 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Dimensions (L×W×H)", value: "4015 × 1400 × 2495 mm" },
        { label: "Dry Weight", value: "3,378 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Stage IIIa / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C450D5Q",
  metaTitle: "Cummins C450D5Q Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C450D5Q 450 kVA standby / 409 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSG12‑G4 engine & Stamford S4L1D‑G41 alternator. Unregulated emissions, reliable three‑phase power.",
  slug: "c450d5q",
  image: "/generators/cummins/275kva-330kva-450kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c450d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSG12‑G4",
  emissions: "Unregulated",
  ampsperphase: "650",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S4L1D‑G41",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 450,
  standbyPower: "450 kVA",
  primePower: "409 kVA",
  description: `
<p>The Cummins C450D5Q Q‑Range generator delivers 450 kVA (360 kW) standby and 409 kVA (327 kW) prime power at 50Hz. It is powered by the Cummins QSG12‑G4 turbocharged and after‑cooled engine coupled with a Stamford S4L1D‑G41 alternator, providing ± 1 % voltage regulation.</p>

<p>Managed by the PowerCommand 2.2 control panel offering auto/manual start/stop, diagnostics, fault protection and digital metering. The weather‑protective, sound‑attenuated canopy is CE/UKCA compliant. Optional features include extended fuel tank, coolant heater, battery charger and ATS.</p>
`,
  compressionRatio: "17 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑Cooled",
  fuelSystem: "XPI Direct Injection",
  governorType: "Electronic",
  displacement: "12.0 L",
  boreStroke: "132 × 144 mm",
  lubeOilCapacity: "34.1 L",
  coolingSystem: "Water‑cooled radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSG12‑G4 (inline‑6, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "132 × 144 mm" },
        { label: "Compression Ratio", value: "17 : 1" },
        { label: "Lube Oil Capacity", value: "34.1 L" },
        { label: "Overspeed Limit", value: "1725 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S4L1D‑G41" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Isochronous" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 2.2" },
        { label: "Display", value: "LCD + LED metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 995 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 91.6 L/hr (standby), ≈ 81.7 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 48 L" },
        { label: "Combustion Air Flow", value: "≈ 1524 m³/hr (~25.4 m³/min)" },
        { label: "Ambient Rating", value: "50 °C (open), 40 °C (enclosed)" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 524 °C (standby), ≈ 507 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 61.7 m³/min (standby), ≈ 53.2 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3686 × 1100 × 2180 mm" },
        { label: "Enclosed Set (L×W×H)", value: "5093 × 1564 × 2375 mm" },
        { label: "Dry Weight (Open)", value: "3,116 kg" },
        { label: "Dry Weight (Enclosed)", value: "4,436 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Unregulated / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C450D5",
  metaTitle: "Cummins C450D5 Silent Diesel Generator",
  metaDescription: "Cummins C450D5 450 kVA standby / 410 kVA prime, 50Hz silent diesel generator with Cummins QSG12‑G2 engine & Stamford S4G alternator. Reliable three‑phase power.",
  slug: "c450d5",
  image: "/generators/cummins/400kva-450kva-500kva-550kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c450d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSG12‑G2",
  emissions: "Unregulated",
  ampsperphase: "648",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S4G",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 450,
  standbyPower: "450 kVA",
  primePower: "410 kVA",
  description: `
<p>The Cummins C450D5 is a powerful 450 kVA (360 kW) standby / 410 kVA (328 kW) 50Hz silent diesel generator. It is driven by a Cummins QSG12‑G2 turbocharged and after‑cooled inline‑6 engine and paired with a Stamford S4G alternator delivering ± 1 % voltage regulation across the load range.</p>

<p>Equipped with the PowerCommand 2.2 control panel for auto/manual start, diagnostics, fault protection, and detailed metering. Designed in a sound‑attenuated, weather‑protective canopy compliant with CE/UKCA.</p>
`,
  compressionRatio: "17 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & After‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "12.0 L",
  boreStroke: "132 × 144 mm",
  lubeOilCapacity: "34.1 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSG12‑G2 (inline‑6, turbocharged & after‑cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "132 × 144 mm" },
        { label: "Compression Ratio", value: "17 : 1" },
        { label: "Lube Oil Capacity", value: "34.1 L" },
        { label: "Overspeed Limit", value: "1725 rpm" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S4G" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 2.2" },
        { label: "Display", value: "LCD + LED metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 834 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 92 L/hr (standby), ≈ 82 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 48 L" },
        { label: "Combustion Air Flow", value: "≈ 424 L/sec (382 L/sec prime = ~25.4 m³/min, ~23.5 prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 524 °C (standby), ≈ 507 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 1029 L/sec (~61.7 m³/min standby), 936 L/sec (~56.2 m³/min prime)" },
        { label: "Max Back Pressure", value: "≈ 10.2 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Enclosed Set (L×W×H)", value: "5093 × 1564 × 2375 mm" },
        { label: "Dry Weight (Enclosed)", value: "4,436 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Unregulated / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C550D5",
  metaTitle: "Cummins C550D5 Silent Diesel Generator",
  metaDescription: "Cummins C550D5 550 kVA standby / 500 kVA prime, 50Hz silent diesel generator with Cummins QSZ13‑G10 engine & Stamford S5E alternator. Reliable three‑phase power.",
  slug: "c550d5",
  image: "/generators/cummins/400kva-450kva-500kva-550kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c550d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSZ13‑G10",
  emissions: "Unregulated",
  ampsperphase: "792",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S5E",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 550,
  standbyPower: "550 kVA",
  primePower: "500 kVA",
  description: `
<p>The Cummins C550D5 is a heavy-duty diesel generator offering 550 kVA standby and 500 kVA prime power at 50Hz. Powered by the QSZ13‑G10 turbocharged and charge‑air cooled inline‑6 engine and a Stamford S5E alternator with ± 1 % voltage regulation.</p>

<p>Managed with PowerCommand 2.2 control panel for automatic start/stop, diagnostics, protection, and metering. Designed in a sound‑attenuated, weather‑protective canopy compliant with CE/UKCA. Options include extended base fuel tanks, coolant heater, battery charger, ATS, and more.</p>
`,
  compressionRatio: "17 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "≈ 15 L",
  boreStroke: "130 × 163 mm",
  lubeOilCapacity: "≈ 75 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSZ13‑G10 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "130 × 163 mm" },
        { label: "Compression Ratio", value: "17 : 1" },
        { label: "Lube Oil Capacity", value: "≈ 75.3 L" },
        { label: "Overspeed Limit", value: "1500 ± 10 %" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S5E" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Droop control (50Hz)" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 2.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "≈ 820 L" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 103.4 L/hr (standby), ≈ 93.1 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "≈ 77.1 L" },
        { label: "Combustion Air Flow", value: "≈ 30.72 m³/min (standby), ≈ 29.82 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 547 °C (standby), ≈ 520 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 82.02 m³/min (standby), ≈ 73.02 m³/min (prime)" },
        { label: "Max Back Pressure", value: "≈ 13 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3376 × 1500 × 2191 mm" },
        { label: "Enclosed Set (L×W×H)", value: "5095 × 1564 × 2441 mm" },
        { label: "Dry Weight (Open)", value: "4120 kg" },
        { label: "Dry Weight (Enclosed)", value: "5439 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Unregulated / CE / UKCA" },
        { label: "Optional Features", value: "Extended base tank, battery charger, coolant heater, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C550D5QB",
  metaTitle: "Cummins C550D5QB Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C550D5QB 550 kVA standby / 500 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins M15‑G8 engine & Stamford S5L1S‑D4 alternator. Reliable three‑phase power, unregulated emissions.",
  slug: "c550d5qb",
  image: "/generators/cummins/550kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c550d5qb-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins M15‑G8",
  emissions: "Unregulated",
  ampsperphase: "792",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S5L1S‑D4",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Silent",
  startType: "Auto Start (24 V DC)",
  size: 550,
  standbyPower: "550 kVA",
  primePower: "500 kVA",
  description: `
<p>The Cummins C550D5QB Q‑Range generator delivers 550 kVA (440 kW) standby and 500 kVA (400 kW) prime power at 50Hz. Powered by the Cummins M15‑G8 turbocharged, charge‑air cooled engine and a Stamford S5L1S‑D4 alternator with ±1 % voltage regulation.</p>
<p>Controlled by the PowerCommand 2.2 microprocessor system for auto start/stop, diagnostics, protection, and full metering. Enclosed in a sound‑attenuated, weatherproof canopy compliant with CE/UKCA. Optional extras include extended fuel tank (995 L), battery charger, coolant heater, and ATS.</p>
`,
  compressionRatio: "17 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge‑Air‑Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic (PGI)",
  displacement: "15 L",
  boreStroke: "130 × 163 mm",
  lubeOilCapacity: "≈ 75 L",
  coolingSystem: "Water‑cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "M15‑G8 (inline‑6, turbocharged & charge‑air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "130 × 163 mm" },
        { label: "Compression Ratio", value: "17 : 1" },
        { label: "Lube Oil Capacity", value: "≈ 75 L" },
        { label: "Governor Type", value: "Electronic (PGI)" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S5L1S‑D4" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Isochronous control" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 2.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "995 L (base tank)" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 91.8 L/hr" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow", value: "≈ 31.7 m³/min (standby), ≈ 29 m³/min (prime)" },
        { label: "Ambient Rating", value: "50 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Guaranteed Sound Power Level (Enclosed)", value: "106 dB(A)" },
        { label: "Sound Pressure Level at 1 m / 7 m", value: "≈ 85 / 75 dB(A)" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Unregulated / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C640D5",
  metaTitle: "Cummins C640D5 Diesel Generator",
  metaDescription: "Cummins C640D5 640 kVA standby / 582 kVA prime, 50Hz diesel generator with Cummins KTAA19-G6 engine & Stamford HCI534E alternator. Reliable three-phase power.",
  slug: "c640d5",
  image: "/generators/cummins/640kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c640d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTAA19-G6",
  emissions: "Unregulated",
  ampsperphase: "928",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford HCI534E",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 640,
  standbyPower: "640 kVA",
  primePower: "582 kVA",
  description: `
<p>The Cummins C640D5 is a heavy-duty diesel generator offering 640 kVA standby and 582 kVA prime power at 50Hz. Powered by the KTAA19-G6 turbocharged, charge-air cooled inline-6 engine and a Stamford HCI534E alternator with ± 1 % voltage regulation.</p>

<p>Managed with PowerCommand 1.2 control panel for automatic start/stop, diagnostics, protection, and metering. Designed as an open set suitable for various industrial applications. Options include extended base fuel tanks, battery charger, coolant heater, ATS, and more.</p>
`,
  compressionRatio: "13.9 : 1",
  ratedSpeed: "1500 rpm",
  aspiration: "Turbocharged & Charge-Air-Cooled",
  fuelSystem: "Direct Injection",
  governorType: "Electronic",
  displacement: "19 L",
  boreStroke: "159 × 159 mm",
  lubeOilCapacity: "50 L",
  coolingSystem: "Water-cooled with radiator",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTAA19-G6 (inline-6, turbocharged & charge-air cooled)" },
        { label: "Rated Speed", value: "1500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Compression Ratio", value: "13.9 : 1" },
        { label: "Lube Oil Capacity", value: "50 L" },
        { label: "Governor Type", value: "Electronic" },
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford HCI534E" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 1 %" },
        { label: "Frequency Regulation", value: "Isochronous control" },
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 1.2" },
        { label: "Display", value: "LED + LCD metering" },
        { label: "Functions", value: "Auto/manual start, AMF, diagnostics, metering" },
        { label: "Starting Voltage", value: "24 V DC" },
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "Not specified" },
        { label: "Fuel Consumption @ Full Load", value: "≈ 143 L/hr (standby), ≈ 131 L/hr (prime)" },
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow", value: "≈ 42.18 m³/min (standby), ≈ 37.38 m³/min (prime)" },
        { label: "Ambient Rating", value: "45 °C" },
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Temp", value: "≈ 457 °C (standby), ≈ 433 °C (prime)" },
        { label: "Exhaust Flow", value: "≈ 119.1 m³/min (standby), ≈ 111.6 m³/min (prime)" },
        { label: "Max Back Pressure", value: "10 kPa" },
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "3680 × 1450 × 2050 mm" },
        { label: "Dry Weight (Open)", value: "4645 kg" },
        { label: "Wet Weight (Open)", value: "4784 kg" },
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Certifications", value: "Unregulated / CE / UKCA" },
        { label: "Optional Features", value: "Extended base tank, battery charger, coolant heater, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},








];
