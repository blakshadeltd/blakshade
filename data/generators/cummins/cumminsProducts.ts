export interface CumminsProduct {
  controlpanel: string;
  ampsperphase: any;
  engine: string;
  emission: string;
  title: string;
  metaTitle: string;
  keywords: string[];
  metaDescription: string;
  slug: string;
  image: string;
  fullspec: string;
  brand: string;
  category: string;
  alternator: string;
  alternatorbrand: string;
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

  specs: { group: string; items: { label: string; value: string }[] }[];
}

export const cummins: CumminsProduct[] = [
  {
    title: "Cummins C22D5",
    metaTitle: "Cummins C22D5 Silent Diesel Generator",
    metaDescription: "Cummins C22D5 22 kVA 50Hz silent diesel generator with auto start, X2.5-G2 engine & Stamford S0L2-M1 alternator.",
    keywords: [
  "Cummins C22D5",
  "22 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 22 kVA"
],
    slug: "c22d5",
    image: "/generators/cummins/22kva-28kva-cummins-silent-diesel-generator.webp",
    fullspec: "/generators/cummins/cummins-c22d5-data-sheet.pdf",
    brand: "Cummins",
    category: "cummins",
    engine: "Cummins X2.5-G2",
    emission: "Unregulated",
    ampsperphase: "3",
    controlpanel: "Cummins PowerStart 0600",
    alternator: "Stamford S0L2‑M1",
    alternatorbrand: "Stamford",
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

<p>Ideal for backup power and continuous prime power needs, the Cummins C22D5 silent diesel generator combines robust performance, low emission, and ease of maintenance. Its compact design and low noise profile make it suitable for use in both indoor and outdoor environments, providing peace of mind during power outages and operational demands.</p>
`,

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

  },
  {
  title: "Cummins C22D5Q",
  metaTitle: "Cummins C22D5Q Silent Diesel Generator",
  metaDescription: "Cummins C22D5Q 22 kVA (Standby) / 20 kVA (Prime), 50Hz silent diesel generator with Cummins X2.5-G2 engine & Stamford S0L2-G1 alternator.",
  keywords: [
  "Cummins C22D5Q",
  "22 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 22 kVA"
],
  slug: "c22d5q",
  image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c22d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X2.5-G2",
  emission: "Unregulated",
  ampsperphase: "31.8",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford S0L2-G1",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400V",
  buildType: "Silent",
  startType: "Auto Start",
  size: 22,
  standbyPower: "22 kVA",
  primePower: "20 kVA",
  description: "<p>The Cummins C22D5Q is a compact yet robust 22 kVA silent diesel generator from the Q-Range, designed for stationary, standby and prime power applications.</p><p>Powered by the Cummins X2.5-G2 naturally aspirated 3-cylinder engine running at 1,500 rpm, this genset delivers prime output of 20 kVA (16 kW) and standby output of 22 kVA (17.6 kW) with reliable voltage regulation (± 2.5%) and droop frequency control. The Stamford S0L2-G1 alternator provides consistent 400V three-phase output at 50Hz. Integrated microprocessor-based PowerStart 0600 controls offer automatic start/stop, comprehensive fault protection, and digital metering.</p><p>Built in the UK and certified CE/UKCA, the C22D5Q features a standard 55 L fuel tank (≈ 13 h autonomy at 75% PRP), coolant heater, battery charger and SLI battery system. Its compact and stackable silent canopy design ensures ease of transport, storage, and low noise levels (≈ 77 dB(A) at 1 m, 65 dB(A) at 7 m).</p>",
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "Cummins X2.5-G2" },
        { label: "Engine Type", value: "Diesel, 4-Cycle" },
        { label: "Aspiration", value: "Naturally Aspirated" },
        { label: "Cylinders", value: "3" },
        { label: "Bore × Stroke", value: "91.4 mm × 127 mm" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Alternator Model", value: "Stamford S0L2-G1" },
        { label: "IP Rating", value: "IP23" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "± 2.5%" },
        { label: "Cooling", value: "Direct Drive Centrifugal Fan" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerStart 0600" },
        { label: "Display", value: "128×64 Monochrome LCD" },
        { label: "Operation", value: "Auto & Manual Start" },
        { label: "Functions", value: "AMF, Remote Start/Stop" },
        { label: "Battery System", value: "12V DC" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Tank Capacity", value: "55 L" },
        { label: "Consumption @ 75% Prime", value: "4.3 L/hr" },
        { label: "Autonomy @ 75% Prime", value: "12.8 hours" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity", value: "6.1 L" },
        { label: "Max Air Intake Restriction", value: "3.7 kPa" },
        { label: "Combustion Air Flow @ Standby", value: "1.4 m³/min" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow @ Standby", value: "3.8 m³/min" },
        { label: "Exhaust Gas Temperature @ Standby", value: "515 °C" },
        { label: "Max Back Pressure", value: "10.2 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Length (Enclosed)", value: "1960 mm" },
        { label: "Width (Enclosed)", value: "820 mm" },
        { label: "Height (Enclosed)", value: "1285 mm" },
        { label: "Dry Weight (Enclosed)", value: "715 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Noise @ 7m (75% Load)", value: "65 dB(A)" },
        { label: "Certifications", value: "CE / UKCA" },
        { label: "Standard Features", value: "Coolant Heater, Battery Charger" },
        { label: "Warranty", value: "2 years / 500 hrs (Standby)" }
      ]
    }
  ]
},

{
  title: "Cummins C28D5",
  metaTitle: "Cummins C28D5 Silent Diesel Generator",
  metaDescription: "Cummins C28D5 27.5 kVA standby / 25 kVA prime, 50Hz silent diesel generator with Cummins X2.5‑G2 engine & Stamford S0L2‑P1 alternator.",
  keywords: [
  "Cummins C28D5",
  "28 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 28 kVA"
],
  slug: "c28d5",
  image: "/generators/cummins/22kva-28kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c28d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X2.5‑G2",
  emission: "Unregulated",
  ampsperphase: "39.6",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford S0L2‑P1",
  alternatorbrand: "Stamford",
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
},
{
  title: "Cummins C33D5",
  metaTitle: "Cummins C33D5 Silent Diesel Generator",
  metaDescription: "Cummins C33D5 33 kVA standby / 30 kVA prime, 50Hz silent diesel generator with Cummins X3.3‑G1 engine & Stamford S0L2‑P1 alternator.",
  keywords: [
  "Cummins C33D5",
  "33 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 33 kVA"
],
  slug: "c33d5",
  image: "/generators/cummins/33kva-38kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c33d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X3.3‑G1",
  emission: "Unregulated",
  ampsperphase: "47.5",
  controlpanel: "Cummins PowerCommand 1.1",
  alternator: "Stamford S0L2‑P1",
  alternatorbrand: "Stamford",
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

},
{
  title: "Cummins C38D5",
  metaTitle: "Cummins C38D5 Silent Diesel Generator",
  metaDescription: "Cummins C38D5 38 kVA standby / 35 kVA prime, 50Hz silent diesel generator with Cummins X3.3-G1 engine & Stamford S1L2-J1 alternator.",
  keywords: [
  "Cummins C38D5",
  "38 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 38 kVA"
],
  slug: "c38d5",
  image: "/generators/cummins/33kva-38kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c38d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X3.3-G1",
  emission: "Unregulated",
  ampsperphase: "54.7",
  controlpanel: "Cummins PowerCommand 1.1",
  alternator: "Stamford S1L2-J1",
  alternatorbrand: "Stamford",
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

},
{
  title: "Cummins C38D5Q",
  metaTitle: "Cummins C38D5Q Silent Diesel Generator",
  metaDescription: "Cummins C38D5Q 38 kVA standby / 35 kVA prime, 50Hz silent diesel generator with Cummins X3.3‑G1 engine & Stamford S1L2‑J1 alternator.",
  keywords: [
  "Cummins C38D5Q",
  "38 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 38 kVA"
],
  slug: "c38d5q",
  image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c38d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins X3.3‑G1",
  emission: "Unregulated",
  ampsperphase: "54.8",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford S1L2‑J1",
  alternatorbrand: "Stamford",
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
<p>The Cummins C38D5Q is a silent diesel generator offering 38 kVA standby / 35 kVA prime output, engineered for stationary standby and prime applications across commercial and industrial sectors.</p>

<p>Driven by a Cummins X3.3‑G1 naturally aspirated 4-cylinder engine at 1500 rpm, it delivers stable performance with ± 2.5% voltage regulation and droop frequency control. The Stamford S1L2‑J1 alternator ensures reliable 400 V three-phase power. The PowerStart 0600 microprocessor-based control system enables automatic start/stop, comprehensive diagnostics, metering and AMF functions.</p>

<p>Standard features include a 55 L base fuel tank (≈ 8.6 h autonomy at 75% PRP), coolant heater, flooded SLI battery with charger, and a quiet canopy delivering ~76 dB(A) at 1 m and ~64 dB(A) at 7 m. The genset is CE/UKCA certified and backed by a full warranty network.</p>
`,

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

},
{
  title: "Cummins C44D5E",
  metaTitle: "Cummins C44D5E Silent Diesel Generator",
  metaDescription: "Cummins C44D5E 44 kVA standby / 40 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UCI224C alternator.",
  keywords: [
  "Cummins C44D5E",
  "44 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 44 kVA"
],
  slug: "c44d5e",
  image: "/generators/cummins/44kva-55kva-66kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c44d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emission: "Stage IIIA",
  ampsperphase: "63.3",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UCI224C",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C55D5E 55 kVA standby / 50 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3-G14 engine & Stamford UCI224D alternator.",
  keywords: [
  "Cummins C55D5E",
  "55 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 55 kVA"
],
  slug: "c55d5e",
  image: "/generators/cummins/44kva-55kva-66kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c55d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3-G14",
  emission: "Stage IIIA",
  ampsperphase: "79",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UCI224D",
  alternatorbrand: "Stamford",
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

<p>Ideal for commercial and industrial use, this generator is CE/Stage IIIA compliant, comes with a low noise canopy, and offers optional extras like battery charger and coolant heater.</p>
  `,

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
        { label: "Certifications", value: "Stage IIIA / CE" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C55D5EQ",
  metaTitle: "Cummins C55D5EQ Silent Diesel Generator",
  metaDescription: "Cummins C55D5EQ 55 kVA standby / 50 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UC224D alternator.",
  keywords: [
  "Cummins C55D5EQ",
  "55 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 55 kVA"
],
  slug: "c55d5eq",
  image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c55d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emission: "Stage IIIA",
  ampsperphase: "79.5",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UC224D",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "Stage IIIA / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C66D5E",
  metaTitle: "Cummins C66D5E Silent Diesel Generator",
  metaDescription: "Cummins C66D5E 66 kVA standby / 60 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UCI22 4F alternator.",
  keywords: [
  "Cummins C66D5E",
  "66 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 66 kVA"
],
  slug: "c66d5e",
  image: "/generators/cummins/44kva-55kva-66kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c66d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emission: "Stage IIIA",
  ampsperphase: "95",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UCI22 4F",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "Stage IIIA / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C66D5EQ",
  metaTitle: "Cummins C66D5EQ Silent Diesel Generator",
  metaDescription: "Cummins C66D5EQ 66 kVA standby / 60 kVA prime, 50Hz silent diesel generator with Cummins 4BTAA3.3‑G14 engine & Stamford UC224F alternator.",
  keywords: [
  "Cummins C66D5EQ",
  "66 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 66 kVA"
],
  slug: "c66d5eq",
  image: "/generators/cummins/22kva-28kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c66d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 4BTAA3.3‑G14",
  emission: "Stage IIIA",
  ampsperphase: "95.4",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UC224F",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "Stage IIIA / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C90D5",
  metaTitle: "Cummins C90D5 Silent Diesel Generator",
  metaDescription: "Cummins C90D5 90 kVA standby / 82 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G5 engine & Stamford UCI224G alternator.",
  keywords: [
  "Cummins C90D5",
  "90 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 90 kVA"
],
  slug: "c90d5",
  image: "/generators/cummins/90kva-110kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c90d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G5",
  emission: "Unregulated / Stage IIIa (dependent on configuration)",
  ampsperphase: "129.6",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI224G",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "CE / UKCA (Unregulated engine unless Stage IIIa specified)" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},
{
  title: "Cummins C110D5",
  metaTitle: "Cummins C110D5 Silent Diesel Generator",
  metaDescription: "Cummins C110D5 110 kVA standby / 100 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G5 engine & Stamford UCI274C alternator.",
  keywords: [
  "Cummins C110D5",
  "110 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 110 kVA"
],
  slug: "c110d5",
  image: "/generators/cummins/90kva-110kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c110d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G5",
  emission: "Unregulated",
  ampsperphase: "159.6",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274C",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C110D5Q 110 kVA standby / 100 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G5 engine & Stamford UC274C alternator.",
  keywords: [
  "Cummins C110D5Q",
  "110 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 110 kVA"
],
  slug: "c110d5q",
  image: "/generators/cummins/110kva-170kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c110d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G5",
  emission: "Unregulated",
  ampsperphase: "158.4",
  controlpanel: "Cummins PowerStart 0600",
  alternator: "Stamford UC274C",
  alternatorbrand: "Stamford",
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

<p>Includes a CE/UKCA‑approved canopy, with options like battery charger, coolant heater, extended fuel tank and ATS. emission level is Unregulated for this Q‑Range model.</p>
`,

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
  metaDescription: "Cummins C150D5 150 kVA standby / 136 kVA prime, 50Hz silent diesel generator with Cummins 6BTA5.9‑G6 engine & Stamford UCI274E alternator.",
  keywords: [
  "Cummins C150D5",
  "150 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 150 kVA"
],
  slug: "c150d5",
  image: "/generators/cummins/150kva-170kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c150d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTA5.9‑G6",
  emission: "Unregulated",
  ampsperphase: "217",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274E",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C170D5 170 kVA standby / 155 kVA prime, 50Hz silent diesel generator with Cummins 6BTAA5.9‑G7 engine & Stamford UCI274F alternator.",
  keywords: [
  "Cummins C170D5",
  "170 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 170 kVA"
],
  slug: "c170d5",
  image: "/generators/cummins/150kva-170kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c170d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTAA5.9‑G7",
  emission: "Unregulated",
  ampsperphase: "245",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274F",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C170D5Q 170 kVA standby / 155 kVA prime, 50Hz silent diesel generator with Cummins 6BTAA5.9‑G7 engine & Stamford UC274F alternator.",
  keywords: [
  "Cummins C170D5Q",
  "170 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 170 kVA"
],
  slug: "c170d5q",
  image: "/generators/cummins/110kva-170kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c170d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins 6BTAA5.9‑G7",
  emission: "Unregulated",
  ampsperphase: "245",
  controlpanel: "Cummins PowerStart PS0600",
  alternator: "Stamford UC274F",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C220D5E 220 kVA standby / 200 kVA prime, 50Hz silent diesel generator with Cummins QSB7‑G5 engine & Stamford UCI274H alternator. Stage IIIa certified",
  keywords: [
  "Cummins C220D5E",
  "220 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 220 kVA"
],
  slug: "c220d5e",
  image: "/generators/cummins/175kva-200kva-220kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c220d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSB7‑G5",
  emission: "Stage IIIA",
  ampsperphase: "318",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCI274H",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "Stage IIIA / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C220D5EQ",
  metaTitle: "Cummins C220D5EQ Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C220D5EQ 220 kVA standby / 200 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSB7‑G5 engine & Stamford UC274H alternator.",
  keywords: [
  "Cummins C220D5EQ",
  "220 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 220 kVA"
],
  slug: "c220d5eq",
  image: "/generators/cummins/220kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c220d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSB7‑G5",
  emission: "Stage IIIA",
  ampsperphase: "316.8",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UC274H",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "Stage IIIA / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C275D5E",
  metaTitle: "Cummins C275D5E Silent Diesel Generator",
  metaDescription: "Cummins C275D5E 275 kVA standby / 250 kVA prime, 50Hz silent diesel generator with Cummins QSL9‑G5 engine & Stamford UCD274K alternator.",
  keywords: [
  "Cummins C275D5E",
  "275 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 275 kVA"
],
  slug: "c275d5e",
  image: "/generators/cummins/275kva-300kva-330kva-350kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c275d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G5",
  emission: "Unregulated",
  ampsperphase: "396",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCD274K",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C275D5EQ 275 kVA standby / 250 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSL9‑G7 engine & Stamford UCD274K alternator.",
  keywords: [
  "Cummins C275D5EQ",
  "275 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 275 kVA"
],
  slug: "c275d5eq",
  image: "/generators/cummins/275kva-330kva-450kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c275d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G7",
  emission: "Stage IIIA",
  ampsperphase: "396",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford UCD274K",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "Stage IIIA / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C330D5",
  metaTitle: "Cummins C330D5 Silent Diesel Generator",
  metaDescription: "Cummins C330D5 330 kVA standby / 300 kVA prime, 50Hz silent diesel generator with Cummins QSL9‑G5 engine & Stamford HC4D alternator.",
  keywords: [
  "Cummins C330D5",
  "330 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 330 kVA"
],
  slug: "c330d5",
  image: "/generators/cummins/275kva-300kva-330kva-350kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c330d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G5",
  emission: "Unregulated",
  ampsperphase: "475.2",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford HC4D",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C330D5EQ 330 kVA standby / 300 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSL9‑G7 engine & Stamford HC444D alternator.",
  keywords: [
  "Cummins C330D5EQ",
  "330 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 330 kVA"
],
  slug: "c330d5eq",
  image: "/generators/cummins/275kva-330kva-450kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c330d5eq-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSL9‑G7",
  emission: "Stage IIIA",
  ampsperphase: "475.2",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford HC444D",
  alternatorbrand: "Stamford",
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
        { label: "Certifications", value: "Stage IIIA / CE / UKCA" },
        { label: "Optional Features", value: "Battery charger, coolant heater, extended tank, ATS" },
        { label: "Warranty", value: "2 years or 500 h standby / 1 year unlimited prime" },
      ],
    },
  ],
},

{
  title: "Cummins C450D5Q",
  metaTitle: "Cummins C450D5Q Q‑Range Silent Diesel Generator",
  metaDescription: "Cummins C450D5Q 450 kVA standby / 409 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins QSG12‑G4 engine & Stamford S4L1D‑G41 alternator.",
  keywords: [
  "Cummins C450D5Q",
  "450 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 450 kVA"
],
  slug: "c450d5q",
  image: "/generators/cummins/275kva-330kva-450kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c450d5q-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSG12‑G4",
  emission: "Unregulated",
  ampsperphase: "650",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S4L1D‑G41",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C450D5 450 kVA standby / 410 kVA prime, 50Hz silent diesel generator with Cummins QSG12‑G2 engine & Stamford S4G alternator.",
  keywords: [
  "Cummins C450D5",
  "450 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 450 kVA"
],
  slug: "c450d5",
  image: "/generators/cummins/400kva-450kva-500kva-550kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c450d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSG12‑G2",
  emission: "Unregulated",
  ampsperphase: "648",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S4G",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C550D5 550 kVA standby / 500 kVA prime, 50Hz silent diesel generator with Cummins QSZ13‑G10 engine & Stamford S5E alternator.",
  keywords: [
  "Cummins C550D5",
  "550 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 550 kVA"
],
  slug: "c550d5",
  image: "/generators/cummins/400kva-450kva-500kva-550kva-cummins-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c550d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSZ13‑G10",
  emission: "Unregulated",
  ampsperphase: "792",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S5E",
  alternatorbrand: "Stamford",
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
  metaDescription: "Cummins C550D5QB 550 kVA standby / 500 kVA prime, 50Hz Q‑Range silent diesel generator with Cummins M15‑G8 engine & Stamford S5L1S‑D4 alternator.",
  keywords: [
  "Cummins C550D5QB",
  "550 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 550 kVA"
],
  slug: "c550d5qb",
  image: "/generators/cummins/550kva-cummins-q-range-silent-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c550d5qb-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins M15‑G8",
  emission: "Unregulated",
  ampsperphase: "792",
  controlpanel: "Cummins PowerCommand 2.2",
  alternator: "Stamford S5L1S‑D4",
  alternatorbrand: "Stamford",
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
  metaTitle: "Cummins C640D5 Open Diesel Generator",
  metaDescription: "Cummins C640D5 640 kVA standby / 582 kVA prime, 50Hz open diesel generator with Cummins KTAA19-G6 engine & Stamford HCI534E alternator.",
  keywords: [
  "Cummins C640D5",
  "640 kVA diesel generator",
  "Open diesel generator",
  "Standby power generator 640 kVA"
],
  slug: "c640d5",
  image: "/generators/cummins/640kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c640d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTAA19-G6",
  emission: "Unregulated",
  ampsperphase: "928",
  controlpanel: "Cummins PowerCommand 1.2",
  alternator: "Stamford HCI534E",
  alternatorbrand: "Stamford",
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
<p>The Cummins C640D5 is a heavy-duty open diesel generator offering 640 kVA standby and 582 kVA prime power at 50Hz. Powered by the KTAA19-G6 turbocharged, charge-air cooled inline-6 engine and a Stamford HCI534E alternator with ± 1 % voltage regulation.</p>

<p>Managed with PowerCommand 1.2 control panel for automatic start/stop, diagnostics, protection, and metering. Designed as an open set suitable for various industrial applications. Options include extended base fuel tanks, battery charger, coolant heater, ATS, and more.</p>
`,

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

{
  title: "Cummins C700D5",
  metaTitle: "Cummins C700D5 Open Diesel Generator",
  metaDescription: "Cummins C700D5 706 kVA standby / 640 kVA prime, 50Hz open diesel generator with Cummins VTA28‑G5 engine & Stamford HC5F alternator.",
  keywords: [
    "Cummins C700D5",
    "700 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 700 kVA"
  ],
  slug: "c700d5",
  image: "/generators/cummins/700kva-825kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c700d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins VTA28‑G5",
  emission: "Unregulated",
  ampsperphase: "1016",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford HC5F",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 700,
  standbyPower: "706 kVA",
  primePower: "640 kVA",
  description: `
<p>The Cummins C700D5 is a rugged open diesel generator delivering 706 kVA standby and 640 kVA prime power at 50 Hz. Powered by the turbocharged, after‑cooled VTA28‑G5 engine and a Stamford HC5F alternator. Equipped with the PowerCommand 3.3 control panel for fully automatic start/stop, diagnostics, protection, and monitoring.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "VTA28‑G5 (12‑Cylinder, Turbocharged/After‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Gross Engine Power (Standby)", value: "612 kWm" },
        { label: "Gross Engine Power (Prime)", value: "560 kWm" },
        { label: "Lube Oil Capacity", value: "83 L" },
        { label: "Overspeed Limit", value: "1 800 rpm ±50" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford HC5F" }
      ]
    },
    {
      group: "Generator Specs",
      items: [
        { label: "Standby Power", value: "706 kVA / 565 kW" },
        { label: "Prime Power", value: "640 kVA / 512 kW" },
        { label: "Voltage", value: "380‑440 V" },
        { label: "Frequency", value: "50 Hz" },
        { label: "Amps Per Phase", value: "1016 A" },
        { label: "Control Panel", value: "Cummins PowerCommand 3.3" }
      ]
    },
    {
      group: "Fuel & Cooling",
      items: [
        { label: "Max Fuel Flow", value: "337 L/hr" }
      ]
    }
  ]
},

{
  title: "Cummins C825D5",
  metaTitle: "Cummins C825D5 Open Diesel Generator",
  metaDescription: "Cummins C825D5 825 kVA standby / 750 kVA prime, 50 Hz open diesel generator with Cummins QSK23‑G3 engine & Stamford S6L1‑C41 alternator.",
  keywords: [
    "Cummins C825D5",
    "825 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 825 kVA"
  ],
  slug: "c825d5",
  image: "/generators/cummins/700kva-825kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c825d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK23‑G3",
  emission: "Unregulated",
  ampsperphase: "1191",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S6L1‑C41",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 825,
  standbyPower: "825 kVA",
  primePower: "750 kVA",
  description: `
<p>The Cummins C825D5 is a robust open diesel generator delivering 825 kVA standby and 750 kVA prime power at 50 Hz. Powered by the turbocharged, after‑cooled QSK23‑G3 inline‑6 engine and Stamford S6L1‑C41 alternator. Equipped with the PowerCommand 3.3 control panel for advanced protection, diagnostics, and metering.</p>
`,
specs: [
  {
    group: "Engine Specs",
    items: [
      { label: "Engine Model", value: "QSK23‑G3 (inline‑6, turbocharged and after‑cooled)" },
      { label: "Rated Speed", value: "1 500 rpm" },
      { label: "Bore × Stroke", value: "170 × 170 mm" },
      { label: "Lube Oil Capacity", value: "103 L" },
      { label: "Overspeed Limit", value: "1 800 rpm" },
      { label: "Governor Type", value: "Electronic" },
      { label: "Starting Voltage", value: "24 V DC" },
      { label: "Gross Engine Power (Standby)", value: "768 kWm" },
      { label: "Gross Engine Power (Prime)", value: "701 kWm" },
      { label: "Emission Level", value: "Unregulated" }
    ],
  },
  {
    group: "Alternator Specs",
    items: [
      { label: "Model", value: "Stamford S6L1‑C41" },
      { label: "Insulation Class", value: "H" },
      { label: "IP Rating", value: "IP23" },
      { label: "Stator Winding Resistance (Ra)", value: "≈ 0.0191 Ω" },
      { label: "Vibration Grade", value: "BS5000 Part 3" },
    ],
  },
  {
    group: "Control Panel Specs",
    items: [
      { label: "Controller Model", value: "Cummins PowerCommand 3.3" },
      { label: "Display", value: "128×64 pixel backlit LCD" },
      { label: "Battery Operation", value: "12 V and 24 V supported" },
      { label: "Fault Sensors", value: "Over/Under voltage, Overcurrent, Engine faults" },
      { label: "AMF Function", value: "Auto Mains Failure with event logging" },
    ],
  },
  {
    group: "Fuel & Consumption",
    items: [
      { label: "Standby Consumption @100%", value: "165.3 L/hr" },
      { label: "Prime Consumption @100%", value: "149.8 L/hr" },
      { label: "Max Fuel Flow", value: "684 L/hr" },
    ],
  },
  {
    group: "Cooling & Air",
    items: [
      { label: "Coolant Capacity (with radiator)", value: "136.5 L" },
      { label: "Combustion Air Flow (Standby)", value: "53.3 m³/min" },
      { label: "Combustion Air Flow (Prime)", value: "48.7 m³/min" },
      { label: "Cooling System Air Flow", value: "8.2 m³/sec" },
      { label: "Ambient Rating", value: "50 °C" },
    ],
  },
  {
    group: "Exhaust",
    items: [
      { label: "Exhaust Gas Flow (Standby)", value: "147.78 m³/min" },
      { label: "Exhaust Gas Temperature (Standby)", value: "543 °C" },
      { label: "Max Back Pressure", value: "10.2 kPa" },
    ],
  },
  {
    group: "Dimensions & Weight",
    items: [
      { label: "Open Set (L×W×H)", value: "3677 × 1320 × 2114 mm" },
      { label: "Dry Weight (Open)", value: "5160 kg" },
    ],
  },
  {
    group: "Standards & Accessories",
    items: [
      { label: "Voltage Regulation", value: "±1 % electronic" },
      { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
      { label: "Gov. Type", value: "Electronic" },
      { label: "ATC & Battery Charger", value: "Optional" },
    ],
  },
],

},

{
  title: "Cummins C900D5",
  metaTitle: "Cummins C900D5 Open Diesel Generator",
  metaDescription: "Cummins C900D5 900 kVA standby / 820 kVA prime, 50 Hz open diesel generator with Cummins QSK23‑G3 engine & Stamford S6L1‑D4 alternator.",
  keywords: [
    "Cummins C900D5",
    "900 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 900 kVA"
  ],
  slug: "c900d5",
  image: "/generators/cummins/900kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c900d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK23‑G3",
  emission: "Unregulated",
  ampsperphase: "1181",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S6L1‑D4",
  alternatorbrand: "Stamford",
  frequency: "50 Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 900,
  standbyPower: "900 kVA",
  primePower: "820 kVA",
  description: `
<p>The Cummins C900D5 is a high-performance open diesel generator delivering 900 kVA standby and 820 kVA prime power at 50 Hz. It features a robust Cummins QSK23‑G3 engine and a Stamford S6L1‑D4 alternator. Equipped with the PowerCommand 3.3 control panel for automatic start/stop, diagnostics, and protection.</p>
`,
specs: [
  {
    group: "Engine Specs",
    items: [
      { label: "Engine Model", value: "QSK23‑G3 (inline‑6, turbocharged and after‑cooled)" },
      { label: "Rated Speed", value: "1 500 rpm" },
      { label: "Bore × Stroke", value: "170 × 170 mm" },
      { label: "Lube Oil Capacity", value: "103 L" },
      { label: "Overspeed Limit", value: "1 800 rpm" },
      { label: "Governor Type", value: "Electronic" },
      { label: "Starting Voltage", value: "24 V DC" },
      { label: "Gross Engine Power (Standby)", value: "768 kWm" },
      { label: "Gross Engine Power (Prime)", value: "701 kWm" },
      { label: "Emission Level", value: "Unregulated" }
    ],
  },
  {
    group: "Alternator Specs",
    items: [
      { label: "Model", value: "Stamford S6L1‑D4" },
      { label: "Insulation Class", value: "H" },
      { label: "IP Rating", value: "IP23" },
      { label: "Stator Winding Resistance (Ra)", value: "≈ 0.0191 Ω" },
      { label: "Vibration Grade", value: "BS5000 Part 3" },
    ],
  },
  {
    group: "Control Panel Specs",
    items: [
      { label: "Controller Model", value: "Cummins PowerCommand 3.3" },
      { label: "Display", value: "128×64 pixel backlit LCD" },
      { label: "Battery Operation", value: "12 V and 24 V supported" },
      { label: "Fault Sensors", value: "Over/Under voltage, Overcurrent, Engine faults" },
      { label: "AMF Function", value: "Auto Mains Failure with event logging" },
    ],
  },
  {
    group: "Fuel & Consumption",
    items: [
      { label: "Standby Consumption @100%", value: "182.5 L/hr" },
      { label: "Prime Consumption @100%", value: "163.8 L/hr" },
      { label: "Max Fuel Flow", value: "685 L/hr" },
    ],
  },
  {
    group: "Cooling & Air",
    items: [
      { label: "Coolant Capacity (with radiator)", value: "136.5 L" },
      { label: "Combustion Air Flow (Standby)", value: "53.3 m³/min" },
      { label: "Combustion Air Flow (Prime)", value: "48.7 m³/min" },
      { label: "Cooling System Air Flow", value: "8.2 m³/sec" },
      { label: "Ambient Rating", value: "40 °C (standard), 50 °C optional" },
    ],
  },
  {
    group: "Exhaust",
    items: [
      { label: "Exhaust Gas Flow (Standby)", value: "147.78 m³/min" },
      { label: "Exhaust Gas Temperature (Standby)", value: "543 °C" },
      { label: "Max Back Pressure", value: "10.2 kPa" },
    ],
  },
  {
    group: "Dimensions & Weight",
    items: [
      { label: "Open Set (L×W×H)", value: "4340 × 1763 × 2095 mm" },
      { label: "Dry Weight (Open)", value: "6091 kg" },
    ],
  },
  {
    group: "Standards & Accessories",
    items: [
      { label: "Voltage Regulation", value: "±1 % electronic" },
      { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
      { label: "Gov. Type", value: "Electronic" },
      { label: "ATC & Battery Charger", value: "Optional" },
    ],
  },
],

},

{
  title: "Cummins C1000D5",
  metaTitle: "Cummins C1000D5 Open Diesel Generator",
  metaDescription: "Cummins C1000D5 1041 kVA standby / 939 kVA prime, 50 Hz open diesel generator with Cummins QST30‑G3 engine & Stamford S6E alternator.",
  keywords: [
    "Cummins C1000D5",
    "1000 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1000 kVA"
  ],
  slug: "c1000d5",
  image: "/generators/cummins/1000kva-1100kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1000d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QST30‑G3",
  emission: "Unregulated",
  ampsperphase: "1503",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S6E",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1000,
  standbyPower: "1041 kVA",
  primePower: "939 kVA",
  description: `
<p>The Cummins C1000D5 is a heavy-duty open diesel generator delivering 1041 kVA standby and 939 kVA prime power at 50 Hz. Featuring a Cummins QST30‑G3 V12 engine with turbocharging and after‑cooling, paired with a Stamford S6E alternator. Equipped with a PowerCommand 3.3 control panel for automatic start/stop, comprehensive diagnostics, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QST30‑G3 (V12, turbocharged and after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "140 × 165 mm" },
        { label: "Lube Oil Capacity", value: "133 L" },
        { label: "Overspeed Limit", value: "1 725 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Gross Engine Power (Standby)", value: "895 kWm" },
        { label: "Gross Engine Power (Prime)", value: "806 kWm" },
        { label: "Compression Ratio", value: "14 : 1" },
        { label: "Regenerative Power", value: "58 kW" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S6E" },
        { label: "Insulation Class", value: "H" },
        { label: "IP Rating", value: "IP23" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "Cummins PowerCommand 3.3" },
        { label: "Display", value: "128×64 pixel backlit LCD" },
        { label: "Battery Operation", value: "12 V and 24 V supported" },
        { label: "Fault Sensors", value: "Over/Under voltage, Overcurrent, Engine faults" },
        { label: "AMF Function", value: "Auto Mains Failure with event logging" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby Consumption @¼ load", value: "55 L/hr" },
        { label: "Standby Consumption @½ load", value: "105 L/hr" },
        { label: "Standby Consumption @¾ load", value: "154 L/hr" },
        { label: "Standby Consumption @full load", value: "204 L/hr" },
        { label: "Prime Consumption @¼ load", value: "51 L/hr" },
        { label: "Prime Consumption @½ load", value: "94 L/hr" },
        { label: "Prime Consumption @¾ load", value: "139 L/hr" },
        { label: "Prime Consumption @full load", value: "184 L/hr" },
        { label: "Max Fuel Flow", value: "550 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby)", value: "56.1 m³/min" },
        { label: "Combustion Air Flow (Prime)", value: "51.9 m³/min" },
        { label: "Coolant Capacity (with radiator)", value: "169 L" },
        { label: "Cooling System Air Flow", value: "15.5 m³/sec" },
        { label: "Ambient Rating", value: "40 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby)", value: "163 m³/min" },
        { label: "Exhaust Gas Flow (Prime)", value: "146 m³/min" },
        { label: "Exhaust Gas Temperature (Standby)", value: "563 °C" },
        { label: "Exhaust Gas Temperature (Prime)", value: "541 °C" },
        { label: "Max Back Pressure", value: "10.2 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "4302 × 1702 × 2139 mm" },
        { label: "Dry Weight (Open)", value: "6304 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Gov. Type", value: "Electronic" },
        { label: "Battery Charger & Water Heater", value: "Included as standard" }
      ]
    }
  ]
},

{
  title: "Cummins C1100D5",
  metaTitle: "Cummins C1100D5 Open Diesel Generator",
  metaDescription: "Cummins C1100D5 1110 kVA standby / 1000 kVA prime, 50 Hz open diesel generator with Cummins QST30‑G4 engine & Stamford S6F alternator.",
  keywords: [
    "Cummins C1100D5",
    "1100 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1100 kVA"
  ],
  slug: "c1100d5",
  image: "/generators/cummins/1000kva-1100kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1100d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QST30‑G4",
  emission: "Unregulated",
  ampsperphase: "1602",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S6F",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1100,
  standbyPower: "1110 kVA",
  primePower: "1000 kVA",
  description: `
<p>The Cummins C1100D5 is a high-capacity open diesel generator delivering 1110 kVA standby and 1000 kVA prime power at 50 Hz. It is powered by a Cummins QST30‑G4 V12 turbocharged, charge-air-cooled engine, coupled with a Stamford S6F alternator. The PowerCommand 3.3 control panel provides automatic start/stop, full diagnostics, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QST30‑G4 (50° V12, turbocharged and charge-air-cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "140 × 165 mm" },
        { label: "Lube Oil Capacity", value: "135 L" },
        { label: "Overspeed Limit", value: "1 725 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Gross Engine Power (Standby)", value: "970 kWm" },
        { label: "Gross Engine Power (Prime)", value: "880 kWm" },
        { label: "Regenerative Power", value: "58 kW" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S6F" },
        { label: "Insulation Class", value: "H" },
        { label: "IP Rating", value: "IP23" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "AMPS per Phase", value: "1602 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼ load", value: "58 L/hr" },
        { label: "Standby @½ load", value: "113 L/hr" },
        { label: "Standby @¾ load", value: "167 L/hr" },
        { label: "Standby @full load", value: "224 L/hr" },
        { label: "Prime @¼ load", value: "54 L/hr" },
        { label: "Prime @½ load", value: "102 L/hr" },
        { label: "Prime @¾ load", value: "151 L/hr" },
        { label: "Prime @full load", value: "202 L/hr" },
        { label: "Max Fuel Flow", value: "550 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby)", value: "60.3 m³/min" },
        { label: "Combustion Air Flow (Prime)", value: "56.7 m³/min" },
        { label: "Coolant Capacity (with radiator)", value: "192 L" },
        { label: "Ambient Rating", value: "40 °C" },
        { label: "Fan Load", value: "18 kWm" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby)", value: "179 m³/min" },
        { label: "Exhaust Gas Flow (Prime)", value: "165 m³/min" },
        { label: "Exhaust Gas Temperature (Standby)", value: "575 °C" },
        { label: "Exhaust Gas Temperature (Prime)", value: "565 °C" },
        { label: "Max Back Pressure", value: "6.8 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "4191 × 1560 × 2414 mm" },
        { label: "Dry Weight (Open)", value: "8705 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Gov. Type", value: "Electronic" },
        { label: "ATC & Battery Charger", value: "Optional" }
      ]
    }
  ]
},

{
  title: "Cummins C1100D5B",
  metaTitle: "Cummins C1100D5B Open Diesel Generator",
  metaDescription: "Cummins C1100D5B 1132 kVA standby / 1029 kVA prime, 50 Hz open diesel generator with Cummins KTA38‑G14 engine & Stamford HCI6K alternator.",
  keywords: [
    "Cummins C1100D5B",
    "1100 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1100 kVA"
  ],
  slug: "c1100d5b",
  image: "/generators/cummins/c1000d5b-c1100d5b-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1100d5b-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA38‑G14",
  emission: "Unregulated",
  ampsperphase: "1630",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford HCI6K",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑480 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1100,
  standbyPower: "1132 kVA",
  primePower: "1029 kVA",
  description: `
<p>The Cummins C1100D5B is a robust open diesel generator delivering 1132 kVA standby and 1029 kVA prime power at 50 Hz. It features a Cummins KTA38‑G14 V12 turbocharged and after‑cooled engine, mated to a Stamford HCI6K alternator, with the advanced PowerCommand 3.3 control system providing full monitoring and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA38‑G14 (60° V12, turbocharged and after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Lube Oil Capacity", value: "161 L" },
        { label: "Overspeed Limit", value: "1 850 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Gross Engine Power (Standby)", value: "950 kWm" },
        { label: "Gross Engine Power (Prime)", value: "860 kWm" },
        { label: "Compression Ratio", value: "13.9 : 1" },
        { label: "Regenerative Power", value: "86 kW" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford HCI6K" },
        { label: "Insulation Class", value: "H" },
        { label: "IP Rating", value: "IP23" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "Cummins PowerCommand 3.3" },
        { label: "AMPS per Phase", value: "1630 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼ load", value: "95 L/hr" },
        { label: "Standby @½ load", value: "127 L/hr" },
        { label: "Standby @¾ load", value: "169 L/hr" },
        { label: "Standby @full load", value: "225 L/hr" },
        { label: "Prime @¼ load", value: "65 L/hr" },
        { label: "Prime @½ load", value: "113 L/hr" },
        { label: "Prime @¾ load", value: "161 L/hr" },
        { label: "Prime @full load", value: "208 L/hr" },
        { label: "Max Fuel Flow", value: "550 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby)", value: "72.8 m³/min" },
        { label: "Combustion Air Flow (Prime)", value: "68.4 m³/min" },
        { label: "Coolant Capacity (with radiator)", value: "192 L" },
        { label: "Ambient Rating", value: "40 °C" },
        { label: "Fan Load", value: "20 kWm" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby)", value: "198.5 m³/min" },
        { label: "Exhaust Gas Flow (Prime)", value: "183 m³/min" },
        { label: "Exhaust Gas Temperature (Standby)", value: "513 °C" },
        { label: "Exhaust Gas Temperature (Prime)", value: "499 °C" },
        { label: "Max Back Pressure", value: "10 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "4470 × 1785 × 2229 mm" },
        { label: "Dry Weight (Open)", value: "7990 kg" },
        { label: "Wet Weight (Open)", value: "8380 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Battery Charger & Water Heater", value: "Optional" },
        { label: "Ambient Design Option", value: "50 °C available" },
        { label: "Optional Enclosures", value: "Acoustic/weather protection available" }
      ]
    }
  ]
},

{
  title: "Cummins C1250D5A",
  metaTitle: "Cummins C1250D5A Open Diesel Generator",
  metaDescription: "Cummins C1250D5A 1250 kVA standby / 1125 kVA prime, 50 Hz open diesel generator with Cummins KTA38‑G9 engine & Stamford P7A alternator.",
  keywords: [
    "Cummins C1250D5A",
    "1250 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1250 kVA"
  ],
  slug: "c1250d5a",
  image: "/generators/cummins/1250kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1250d5a-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA38‑G9",
  emission: "Unregulated",
  ampsperphase: "1800",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford P7A",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1250,
  standbyPower: "1250 kVA",
  primePower: "1125 kVA",
  description: `
<p>The Cummins C1250D5A is a heavy-duty open diesel generator delivering 1250 kVA standby and 1125 kVA prime power at 50 Hz. It incorporates the Cummins KTA38‑G9 V12 turbocharged and after‑cooled engine, paired with a Stamford P7A alternator. The PowerCommand 3.3 control panel manages automatic start/stop, protection, and advanced diagnostics.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA38‑G9 (60° V12, turbocharged and after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Lube Oil Capacity", value: "114 L" },
        { label: "Overspeed Limit", value: "1 800 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Gross Engine Power", value: "1089 kWm" },
        { label: "Regenerative Power", value: "86 kWm" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford P7A" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Max Fuel Flow", value: "428 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow", value: "78.5 m³/min" },
        { label: "Coolant Capacity", value: "336 L" },
        { label: "Ambient Rating", value: "40 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow", value: "403.7 m³/min" },
        { label: "Exhaust Gas Temperature", value: "524 °C" },
        { label: "Max Back Pressure", value: "10.2 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "4722 × 1785 × 2241 mm" },
        { label: "Dry Weight (Open)", value: "8179 kg" },
        { label: "Wet Weight (Open)", value: "8569 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Battery Charger", value: "Included" },
        { label: "Water Heater", value: "Included" },
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "Optional Enclosure", value: "Available (acoustic/weatherproof)" }
      ]
    }
  ]
},

{
  title: "Cummins C1250D5AB",
  metaTitle: "Cummins C1250D5AB Open Diesel Generator",
  metaDescription: "Cummins C1250D5AB 1250 kVA standby / 1125 kVA prime, 50 Hz open diesel generator with Cummins KTA38‑G9 engine & Stamford S6G alternator.",
  keywords: [
    "Cummins C1250D5AB",
    "1250 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1250 kVA"
  ],
  slug: "c1250d5ab",
  image: "/generators/cummins/c1250d5ab-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1250d5ab-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA38‑G9",
  emission: "Unregulated",
  ampsperphase: "1800",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S6G",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1250,
  standbyPower: "1250 kVA",
  primePower: "1125 kVA",
  description: `
<p>The Cummins C1250D5AB is a robust open diesel generator delivering 1250 kVA standby and 1125 kVA prime power at 50 Hz. It features the Cummins KTA38‑G9 V12 turbocharged, after‑cooled engine paired with a Stamford S6G alternator. Managed by a PowerCommand 3.3 control panel for fully automatic operation, protection, and diagnostics.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA38‑G9 (60° V12, turbocharged and after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Lube Oil Capacity", value: "135 L" },
        { label: "Overspeed Limit", value: "1 850 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Gross Engine Power", value: "1089 kWm" },
        { label: "Regenerative Power", value: "86 kWm" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S6G" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼ load", value: "79 L/hr" },
        { label: "Standby @½ load", value: "137 L/hr" },
        { label: "Standby @¾ load", value: "196 L/hr" },
        { label: "Standby @full load", value: "256 L/hr" },
        { label: "Prime @¼ load", value: "75 L/hr" },
        { label: "Prime @½ load", value: "126 L/hr" },
        { label: "Prime @¾ load", value: "186 L/hr" },
        { label: "Prime @full load", value: "244 L/hr" },
        { label: "Max Fuel Flow", value: "428 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow", value: "78.6 m³/min" },
        { label: "Coolant Capacity (with radiator)", value: "229 L" },
        { label: "Ambient Design Temperature", value: "45 °C" },
        { label: "Fan Load", value: "23.7 kWm" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby)", value: "212.4 m³/min" },
        { label: "Exhaust Gas Temperature", value: "529 °C" },
        { label: "Max Back Pressure", value: "10 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "4722 × 1785 × 2241 mm" },
        { label: "Dry Weight (Open)", value: "8179 kg" },
        { label: "Wet Weight (Open)", value: "8569 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Battery Charger", value: "Included" },
        { label: "Water Heater", value: "Included" },
        { label: "Optional Enclosure", value: "Available (acoustic/weatherproof)" }
      ]
    }
  ]
},

{
  title: "Cummins C1400D5",
  metaTitle: "Cummins C1400D5 Open Diesel Generator",
  metaDescription: "Cummins C1400D5 1400 kVA standby / 1250 kVA prime, 50 Hz open diesel generator with Cummins KTA50‑G3 engine & Stamford PI734B alternator.",
  keywords: [
    "Cummins C1400D5",
    "1400 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1400 kVA"
  ],
  slug: "c1400d5",
  image: "/generators/cummins/1400kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1400d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA50‑G3",
  emission: "Unregulated",
  ampsperphase: "2016",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford PI734B",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1400,
  standbyPower: "1400 kVA",
  primePower: "1250 kVA",
  description: `
<p>The Cummins C1400D5 is a high-capacity open diesel generator delivering 1400 kVA standby and 1250 kVA prime power at 50 Hz. Equipped with a rugged Cummins KTA50‑G3 V16 turbocharged, after-cooled engine and Stamford PI734B alternator. With PowerCommand 3.3 control panel, it provides robust diagnostics, automatic operation, and reliable protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA50‑G3 (60° V16, turbocharged and after-cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Lube Oil Capacity", value: "152 L" },
        { label: "Overspeed Limit", value: "1 725 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Gross Engine Power (Standby)", value: "1 227 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1 097 kWm" },
        { label: "Regenerative Power", value: "116 kW" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford PI734B" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "AMPS per Phase", value: "2016 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Max Fuel Flow", value: "625 L/hr" },
        { label: "Standby Consumption @¼ / ½ / ¾ / full load", value: "91 / 158 / 224 / 291 L/hr" },
        { label: "Prime Consumption @¼ / ½ / ¾ / full load", value: "84 / 144 / 203 / 263 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby)", value: "104.8 m³/min" },
        { label: "Combustion Air Flow (Prime)", value: "96.3 m³/min" },
        { label: "Coolant Capacity (with radiator)", value: "424 L" },
        { label: "Ambient Design Temperature", value: "40 °C" },
        { label: "Fan Load", value: "46 kWm" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby)", value: "240.7 m³/min" },
        { label: "Exhaust Gas Flow (Prime)", value: "223.6 m³/min" },
        { label: "Exhaust Gas Temperature (Standby)", value: "525 °C" },
        { label: "Exhaust Gas Temperature (Prime)", value: "520 °C" },
        { label: "Max Back Pressure", value: "6.7 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "5105 × 2000 × 2238 mm" },
        { label: "Dry Weight (Open)", value: "9190 kg" },
        { label: "Wet Weight (Open)", value: "9613 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Optional Acoustic Enclosure", value: "Available" }
      ]
    }
  ]
},

{
  title: "Cummins C1675D5A",
  metaTitle: "Cummins C1675D5A Open Diesel Generator",
  metaDescription: "Cummins C1675D5A 1675 kVA standby / 1500 kVA prime, 50 Hz open diesel generator with Cummins KTA50‑GS8 engine & Stamford PI734D alternator.",
  keywords: [
    "Cummins C1675D5A",
    "1675 kVA diesel generator",
    "Open diesel generator",
    "Standby power 1675 kVA"
  ],
  slug: "c1675d5a",
  image: "/generators/cummins/1675kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1675d5a-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA50 GS8",
  emission: "Unregulated",
  ampsperphase: "2418",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford PI734D",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1675,
  standbyPower: "1675 kVA",
  primePower: "1500 kVA",
  description: `
<p>The Cummins C1675D5A is an industrial-grade open diesel generator delivering 1675 kVA standby and 1500 kVA prime output at 50 Hz. It’s powered by the robust KTA50‑GS8 V16 turbocharged, after-cooled engine, mated to a Stamford PI734D alternator. Featuring the PowerCommand 3.3 control system for automatic operation, diagnostics, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA50‑GS8 (60° V16, turbocharged and low‑temperature after‑cooled)" },
        { label: "Gross Engine Power", value: "1429 kWm (Standby) / 1287 kWm (Prime)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Lube Oil Capacity", value: "178 L" },
        { label: "Overspeed Limit", value: "1 725 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Compression Ratio", value: "14.9 : 1" },
        { label: "Regenerative Power", value: "116 kW" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford PI734D" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby Load @¼/½/¾/full", value: "92 / 165 / 253 / 345 L/hr" },
        { label: "Prime Load @¼/½/¾/full", value: "88 / 167 / 238 / 309 L/hr" },
        { label: "Max Fuel Flow", value: "570 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby/Prime)", value: "99.3 / 94.9 m³/min" },
        { label: "Ambient Design Temperature", value: "40 °C" },
        { label: "Fan Load", value: "30 kWm" },
        { label: "Coolant Capacity (with radiator)", value: "496 L" },
        { label: "Cooling Air Flow", value: "21.7 m³/sec @ 12.7 mm H₂O" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby/Prime)", value: "261 / 242 m³/min" },
        { label: "Exhaust Gas Temperature (Standby/Prime)", value: "510 / 499 °C" },
        { label: "Max Back Pressure", value: "6.7 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "5811 × 2033 × 2330 mm" },
        { label: "Dry Weight (Open)", value: "10 348 kg" },
        { label: "Wet Weight (Open)", value: "10 967 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Optional Enclosure", value: "Available" }
      ]
    }
  ]
},

{
  title: "Cummins C1760D5e",
  metaTitle: "Cummins C1760D5e Open Diesel Generator",
  metaDescription: "Cummins C1760D5e 1760 kVA standby / 1600 kVA prime, 50 Hz open diesel generator with Cummins QSK60‑GS3 engine & Stamford PI734D alternator.",
  keywords: [
    "Cummins C1760D5e",
    "1760 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1760 kVA"
  ],
  slug: "c1760d5e",
  image: "/generators/cummins/1760kva-2000kva-2250kva-2500kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1760d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK60‑GS3",
  emission: "Unregulated",
  ampsperphase: "2534",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford PI734D",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400‑416 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1760,
  standbyPower: "1760 kVA",
  primePower: "1600 kVA",
  description: `
<p>The Cummins C1760D5e is a heavy-duty open diesel generator delivering 1760 kVA standby and 1600 kVA prime power at 50 Hz. It utilizes a Cummins QSK60‑GS3 V16 engine, features a Stamford PI734D alternator, and includes the PowerCommand 3.3 control system for seamless automation and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSK60‑GS3 (60° V16, turbocharged and low‑temp after‑cooled)" },
        { label: "Gross Engine Power (Standby)", value: "1835 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1620 kWm" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore", value: "159 mm" },
        { label: "Stroke", value: "190 mm" },
        { label: "Compression Ratio", value: "16.2 : 1" },
        { label: "Lube Oil Capacity", value: "378 L" },
        { label: "Piston Speed", value: "9.5 m/s" },
        { label: "Overspeed Limit", value: "1 725 rpm ±50" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Regenerative Power", value: "146 kW" },
        { label: "Emission Level", value: "Unregulated" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford PI734D" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2534 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Max Fuel Flow", value: "1 630 L/hr" },
        { label: "Standby @¼/½/¾/full load", value: "120 / 212 / 303 / 395 L/hr" },
        { label: "Prime @¼/½/¾/full load", value: "113 / 197 / 281 / 365 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Ambient Design Temperature", value: "27 °C" },
        { label: "Fan Load", value: "33 kWm" },
        { label: "Coolant Capacity (with radiator)", value: "580 L" },
        { label: "Cooling Air Flow", value: "40 m³/sec @ 12.7 mm H₂O" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby)", value: "320 m³/min" },
        { label: "Exhaust Gas Flow (Prime)", value: "295 m³/min" },
        { label: "Exhaust Gas Temperature (Standby)", value: "477 °C" },
        { label: "Exhaust Gas Temperature (Prime)", value: "452 °C" },
        { label: "Max Back Pressure", value: "6.7 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "6 175.1 × 2 494 × 3 422 mm" },
        { label: "Dry Weight (Open)", value: "14 825 kg" },
        { label: "Wet Weight (Open)", value: "16 040 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Optional Acoustic Enclosure", value: "Available" }
      ]
    }
  ]
},

{
  title: "Cummins C1760D5",
  metaTitle: "Cummins C1760D5 Open Diesel Generator",
  metaDescription: "Cummins C1760D5 1760 kVA standby / 1600 kVA prime, 50 Hz open diesel generator with Cummins KTA50‑G23 engine & Stamford S7L1D‑E4 alternator.",
  keywords: [
    "Cummins C1760D5",
    "1760 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1760 kVA"
  ],
  slug: "c1760d5",
  image: "/generators/cummins/1760kva-1875kva-2000kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1760d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA50‑G23",
  emission: "Unregulated",
  ampsperphase: "2534",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S7L1D‑E4",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1760,
  standbyPower: "1760 kVA",
  primePower: "1600 kVA",
  description: `
<p>The Cummins C1760D5 is a high-capacity open diesel generator delivering 1760 kVA standby and 1600 kVA prime power at 50 Hz. It features a heavy-duty KTA50‑G23 V16 turbocharged, low-temperature after‑cooled engine paired with a Stamford S7L1D‑E4 alternator. The PowerCommand 3.3 control panel offers advanced automation, diagnostics, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA50‑G23 (60° V16, turbocharged, low-temp after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Gross Engine Power (Standby)", value: "1740 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1567 kWm" },
        { label: "Piston Speed", value: "7.95 m/s" },
        { label: "Compression Ratio", value: "14.7 : 1" },
        { label: "Lube Oil Capacity", value: "178 L" },
        { label: "Overspeed Limit", value: "1 725 rpm ±50" },
        { label: "Regenerative Power", value: "116 kW" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Max Fuel Flow", value: "723 L/hr" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S7L1D‑E4" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2534 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby ¼ / ½ / ¾ / Full Load", value: "115 / 200 / 275 / 376 L/hr" },
        { label: "Prime ¼ / ½ / ¾ / Full Load", value: "100 / 182 / 250 / 334 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby / Prime)", value: "135 / 130 m³/min" },
        { label: "Coolant Capacity (with radiator)", value: "516 L" },
        { label: "Ambient Design Temperature", value: "40 °C" },
        { label: "Fan Load", value: "55 kWm" },
        { label: "Cooling Air Flow", value: "36.14 m³/sec @ 12.7 mm H₂O" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby / Prime)", value: "331 / 306 m³/min" },
        { label: "Exhaust Gas Temperature", value: "508 / 477 °C" },
        { label: "Max Back Pressure", value: "6.77 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "6017 × 2590 × 3330 mm" },
        { label: "Dry Weight (Open)", value: "12 692 kg" },
        { label: "Wet Weight (Open)", value: "13 396 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Standard Cooling", value: "Radiator with ambient 40 °C design" },
        { label: "Optional Acoustic Enclosure", value: "Available" }
      ]
    }
  ]
},

{
  title: "Cummins C1875D5",
  metaTitle: "Cummins C1875D5 Open Diesel Generator",
  metaDescription: "Cummins C1875D5 1875 kVA standby / 1700 kVA prime, 50 Hz open diesel generator with Cummins KTA50‑G23 engine & Stamford S7L1D‑E4 alternator.",
  keywords: [
    "Cummins C1875D5",
    "1875 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1875 kVA"
  ],
  slug: "c1875d5",
  image: "/generators/cummins/1760kva-1875kva-2000kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1875d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA50‑G23",
  emission: "Unregulated",
  ampsperphase: "2700",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S7L1D‑E4",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1875,
  standbyPower: "1875 kVA",
  primePower: "1700 kVA",
  description: `
<p>The Cummins C1875D5 is a high-performance open diesel generator delivering 1875 kVA standby and 1700 kVA prime power at 50 Hz. It features the powerful KTA50‑G23 V16 turbocharged and low‑temperature after‑cooled engine, paired with a Stamford S7L1D‑E4 alternator. Equipped with PowerCommand 3.3 control panel for automated operation, diagnostics, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA50‑G23 (60° V16, turbocharged and low-temperature after‑cooled)" },
        { label: "Gross Engine Power (Standby)", value: "1740 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1567 kWm" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Compression Ratio", value: "14.7 : 1" },
        { label: "Piston Speed", value: "7.95 m/s" },
        { label: "Lube Oil Capacity", value: "178 L" },
        { label: "Overspeed Limit", value: "1 725 rpm" },
        { label: "Regenerative Power", value: "116 kW" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S7L1D‑E4" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2700 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼ load", value: "117 L/hr" },
        { label: "Standby @½ load", value: "206 L/hr" },
        { label: "Standby @¾ load", value: "291 L/hr" },
        { label: "Standby @full load", value: "395 L/hr" },
        { label: "Prime @¼ load", value: "109 L/hr" },
        { label: "Prime @½ load", value: "194 L/hr" },
        { label: "Prime @¾ load", value: "265 L/hr" },
        { label: "Prime @full load", value: "360 L/hr" },
        { label: "Max Fuel Flow", value: "723 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby)", value: "135 m³/min" },
        { label: "Combustion Air Flow (Prime)", value: "130 m³/min" },
        { label: "Ambient Design Temperature", value: "40 °C" },
        { label: "Fan Load", value: "55 kWm" },
        { label: "Coolant Capacity (with radiator)", value: "516 L" },
        { label: "Cooling Air Flow", value: "36.14 m³/sec @ 12.7 mm H₂O" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby)", value: "331 m³/min" },
        { label: "Exhaust Gas Flow (Prime)", value: "306 m³/min" },
        { label: "Exhaust Gas Temperature (Standby)", value: "508 °C" },
        { label: "Exhaust Gas Temperature (Prime)", value: "477 °C" },
        { label: "Max Exhaust Back Pressure", value: "6.77 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "6017 × 2590 × 3330 mm" },
        { label: "Unit Dry Weight (Open)", value: "12 692 kg" },
        { label: "Unit Wet Weight (Open)", value: "13 396 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Standard Cooling", value: "Radiator with 40 °C ambient design" },
        { label: "Optional Acoustic Enclosure", value: "Available" }
      ]
    }
  ]
},

{
  title: "Cummins C1875D5e",
  metaTitle: "Cummins C1875D5e Open Diesel Generator",
  metaDescription: "Cummins C1875D5e 1875 kVA standby / 1700 kVA prime, 50 Hz open diesel generator with Cummins QSK50‑G15 engine & Stamford S7L1D‑F41 alternator.",
  keywords: [
    "Cummins C1875D5e",
    "1875 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 1875 kVA"
  ],
  slug: "c1875d5e",
  image: "/generators/cummins/1875kva-2000kva-2250kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c1875d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK50‑G15",
  emission: "Tier 2 / NRMM III",
  ampsperphase: "2700",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S7L1D‑F41",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 1875,
  standbyPower: "1875 kVA",
  primePower: "1700 kVA",
  description: `
<p>The Cummins C1875D5e is a high-performance open diesel generator delivering 1875 kVA standby and 1700 kVA prime power at 50 Hz. It features a Cummins QSK50‑G15 V16 turbocharged, low-temperature after-cooled engine, paired with a Stamford S7L1D‑F41 alternator. Managed via a PowerCommand 3.3 control panel for full automation, diagnostics, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSK50‑G15 (60° V16, turbocharged and low‑temperature after‑cooled)" },
        { label: "Configuration", value: "4‑Cycle, 60° Vee, 16‑Cylinder" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Displacement", value: "49.8 L" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Piston Speed", value: "7.95 m/s" },
        { label: "Compression Ratio", value: "14.7 : 1" },
        { label: "Lube Oil Capacity", value: "— L (not specified)" },
        { label: "Overspeed Limit", value: "1 725 rpm" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Regenerative Power", value: "— kW (not specified)" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S7L1D‑F41" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2700 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Consumption @100%", value: "346 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity (with radiator)", value: "276 L" },
        { label: "Fan Load", value: "37 kWm" },
        { label: "Ambient Design Temperature", value: "— °C (not specified)" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow at Rated Load", value: "— m³/min (not specified)" },
        { label: "Exhaust Temperature", value: "Not stated" },
        { label: "Max Back Pressure", value: "10.1 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Dimensions (L×W×H)", value: "5864 × 2248 × 2521 mm" },
        { label: "Dry Weight", value: "11 217 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Battery Charger", value: "Included" },
        { label: "Water Heater", value: "Included" },
        { label: "Emission Compliance", value: "U.S. EPA Tier 2 / China NRMM III" },
        { label: "Optional Acoustic Enclosure", value: "Available" }
      ]
    }
  ]
},

{
  title: "Cummins C2000D5e",
  metaTitle: "Cummins C2000D5e Open Diesel Generator",
  metaDescription: "Cummins C2000D5e 2000 kVA standby / 1825 kVA prime, 50 Hz open diesel generator with Cummins QSK60‑GS3 engine & Stamford PI734F alternator.",
  keywords: [
    "Cummins C2000D5e",
    "2000 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 2000 kVA"
  ],
  slug: "c2000d5e",
  image: "/generators/cummins/1760kva-2000kva-2250kva-2500kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c2000d5e-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK60‑GS3",
  emission: "Unregulated",
  ampsperphase: "2880",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford PI734F",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 2000,
  standbyPower: "2000 kVA",
  primePower: "1825 kVA",
  description: `
<p>The Cummins C2000D5e is a powerful open diesel generator delivering 2000 kVA standby and 1825 kVA prime power at 50 Hz. It features a Cummins QSK60‑GS3 V16 engine (turbocharged, low-temperature after-cooled), a Stamford PI734F alternator, and Cummins PowerCommand 3.3 control panel for automatic start/stop, diagnostics, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSK60‑GS3 (60° V16, turbocharged, low-temp after‑cooled)" },
        { label: "Configuration", value: "Cast iron, 60° V16 cylinder" },
        { label: "Gross Engine Power (Standby)", value: "1835 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1650 kWm" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 190 mm" },
        { label: "Piston Speed", value: "9.5 m/s" },
        { label: "Compression Ratio", value: "14.5 : 1" },
        { label: "Lube Oil Capacity", value: "378 L" },
        { label: "Overspeed Limit", value: "1 725 rpm ±50" },
        { label: "Regenerative Power", value: "146 kW" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford PI734F" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2880 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼/½/¾/full load", value: "140 / 245 / 360 / 467 L/hr" },
        { label: "Prime @¼/½/¾/full load", value: "131 / 224 / 323 / 432 L/hr" },
        { label: "Max Fuel Flow", value: "1630 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby / Prime)", value: "148 / 146 m³/min" },
        { label: "Ambient Design Temperature", value: "40 °C" },
        { label: "Fan Load", value: "53 kWm" },
        { label: "Coolant Capacity (with radiator)", value: "580 L" },
        { label: "Cooling System Air Flow", value: "40 m³/sec @ 12.7 mm H₂O" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby / Prime)", value: "361 / 348 m³/min" },
        { label: "Exhaust Gas Temperature (Standby / Prime)", value: "465 / 445 °C" },
        { label: "Max Back Pressure", value: "6.7 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "6175 × 2494 × 3422 mm" },
        { label: "Dry Weight (Open)", value: "15 345 kg" },
        { label: "Wet Weight (Open)", value: "16 560 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Battery Charger", value: "Included" },
        { label: "Water Heater", value: "Included" },
        { label: "Warranty", value: "2 years or 500 hr (standby); 1 year unlimited (prime)" },
        { label: "Circuit Breaker", value: "4‑Pole" }
      ]
    }
  ]
},

{
  title: "Cummins C2000D5B",
  metaTitle: "Cummins C2000D5B Open Diesel Generator",
  metaDescription: "Cummins C2000D5B 2000 kVA standby / 1800 kVA prime, 50 Hz open diesel generator with Cummins KTA50‑G23 engine & Stamford S7L1D‑G4 alternator.",
  keywords: [
    "Cummins C2000D5B",
    "2000 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 2000 kVA"
  ],
  slug: "c2000d5b",
  image: "/generators/cummins/1760kva-1875kva-2000kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c2000d5b-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins KTA50‑G23",
  emission: "Unregulated",
  ampsperphase: "2880",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S7L1D‑G4",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 2000,
  standbyPower: "2000 kVA",
  primePower: "1800 kVA",
  description: `
<p>The Cummins C2000D5B is a powerful open diesel generator offering 2000 kVA standby and 1800 kVA prime power at 50 Hz. It features a robust KTA50‑G23 V16 engine with turbocharging and low-temperature aftercooling, paired with a Stamford S7L1D‑G4 alternator and controlled by PowerCommand 3.3 for full automation and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "KTA50‑G23 (60° V16, turbocharged and low‑temperature after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Gross Engine Power (Standby)", value: "1740 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1567 kWm" },
        { label: "Lube Oil Capacity", value: "178 L" },
        { label: "Overspeed Limit", value: "1 725 rpm" },
        { label: "Regenerative Power", value: "116 kW" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S7L1D‑G4" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2880 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby Consumption @¼ / ½ / ¾ / full load", value: "114 / 208 / 308 / 411 L/hr" },
        { label: "Prime Consumption @¼ / ½ / ¾ / full load", value: "119 / 205 / 281 / 386 L/hr" },
        { label: "Max Fuel Flow", value: "723 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby / Prime)", value: "135 / 130 m³/min" },
        { label: "Coolant Capacity (with radiator)", value: "516 L" },
        { label: "Fan Load", value: "55 kWm" },
        { label: "Ambient Design Temperature", value: "40 °C" },
        { label: "Cooling System Air Flow", value: "36.14 m³/sec @ 12.7 mm H₂O" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby / Prime)", value: "331 / 306 m³/min" },
        { label: "Exhaust Gas Temperature", value: "508 / 477 °C" },
        { label: "Max Back Pressure", value: "6.77 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "6175 × 2286 × 2537 mm" },
        { label: "Dry Weight (Open)", value: "12 979 kg" },
        { label: "Wet Weight (Open)", value: "13 683 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Battery Charger", value: "Included" },
        { label: "Water Heater", value: "Included" },
        { label: "Circuit Breaker", value: "4‑Pole" },
        { label: "Warranty", value: "2 years or 500 hr (standby); 1 year unlimited (prime)" }
      ]
    }
  ]
},

{
  title: "Cummins C2000D5EB",
  metaTitle: "Cummins C2000D5EB Open Diesel Generator",
  metaDescription: "Cummins C2000D5EB 2000 kVA standby / 1875 kVA prime, 50 Hz open diesel generator with Cummins QSK50‑G16 engine & Stamford S7L1D‑G4 alternator.",
  keywords: [
    "Cummins C2000D5EB",
    "2000 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 2000 kVA"
  ],
  slug: "c2000d5eb",
  image: "/generators/cummins/1875kva-2000kva-2250kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c2000d5eb-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK50‑G16",
  emission: "EPA Tier 2 / China NRMM III",
  ampsperphase: "2880",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford S7L1D‑G4",
  alternatorbrand: "Stamford",
  frequency: "50Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 2000,
  standbyPower: "2000 kVA",
  primePower: "1875 kVA",
  description: `
<p>The Cummins C2000D5EB delivers robust 2000 kVA standby and 1875 kVA prime power at 50 Hz. It features the QSK50‑G16 V16 turbocharged and low‑temperature after‑cooled engine with a Stamford S7L1D‑G4 alternator, managed by PowerCommand 3.3 for complete automation and monitoring.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSK50‑G16 (60° V16, turbocharged and low‑temperature after‑cooled)" },
        { label: "Configuration", value: "4‑Cycle, 60° Vee, 16‑Cylinder" },
        { label: "Displacement", value: "49.8 L" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 159 mm" },
        { label: "Max Fuel Flow", value: "812 L/hr" },
        { label: "Starting Voltage", value: "24 V DC" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford S7L1D‑G4" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2880 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼ / ½ / ¾ / Full Load", value: "134 / 220 / 308 / 361 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow", value: "52.4 / 93.2 m³/min (Standby / Prime)" },
        { label: "Radiator Coolant Capacity", value: "276 L" },
        { label: "Fan Load", value: "37 kWm" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow at Rated Load", value: "— m³/min (not specified)" },
        { label: "Max Exhaust Back Pressure", value: "10.1 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Dimensions (L×W×H)", value: "5864 × 2248 × 2521 mm" },
        { label: "Dry Weight", value: "11,504 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Emission Compliance", value: "EPA Tier 2 / China NRMM III" },
        { label: "Battery Charger", value: "Included" },
        { label: "Water Heater", value: "Included" }
      ]
    }
  ]
},

{
  title: "Cummins C2000D5",
  metaTitle: "Cummins C2000D5 Open Diesel Generator",
  metaDescription: "Cummins C2000D5 2063 kVA standby / 1875 kVA prime, 50 Hz open diesel generator with Cummins QSK60‑G3 engine & Stamford PI734F alternator.",
  keywords: [
    "Cummins C2000D5",
    "2000 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 2000 kVA"
  ],
  slug: "c2000d5",
  image: "/generators/cummins/1760kva-2000kva-2250kva-2500kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c2000d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK60‑G3",
  emission: "Unregulated",
  ampsperphase: "2880",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford PI734F",
  alternatorbrand: "Stamford",
  frequency: "50 Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑440 V",
  buildType: "Open",
  startType: "Auto Start (24 V DC)",
  size: 2000,
  standbyPower: "2063 kVA",
  primePower: "1875 kVA",
  description: `
<p>The Cummins C2000D5 is a robust open diesel generator offering 2063 kVA standby and 1875 kVA prime power at 50 Hz. It is powered by a QSK60‑G3 V16 engine and Stamford PI734F alternator, managed by the PowerCommand 3.3 control panel for precise automation and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSK60‑G3 (cast iron, 60° V16, turbocharged and low‑temp after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 190 mm" },
        { label: "Gross Engine Power (Standby)", value: "1790 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1615 kWm" },
        { label: "Piston Speed", value: "9.5 m/s" },
        { label: "Compression Ratio", value: "14.5 : 1" },
        { label: "Lube Oil Capacity", value: "378 L" },
        { label: "Overspeed Limit", value: "1 725 rpm ± 50" },
        { label: "Regenerative Power", value: "146 kW" },
        { label: "Governor Type", value: "Electronic" }
      ]
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford PI734F" }
      ]
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Amps per Phase", value: "2880 A" }
      ]
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼ / ½ / ¾ / Full Load", value: "122 / 208 / 300 / 406 L/hr" },
        { label: "Prime @¼ / ½ / ¾ / Full Load", value: "112 / 190 / 270 / 363 L/hr" }
      ]
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Coolant Capacity (with radiator)", value: "454 L" },
        { label: "Fan Load", value: "29.1 kWm" },
        { label: "Ambient Design Temp", value: "40 °C" }
      ]
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Temperature (Standby)", value: "477 °C" },
        { label: "Exhaust Gas Temperature (Prime)", value: "452 °C" },
        { label: "Max Back Pressure", value: "6.7 kPa" }
      ]
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Open Set (L×W×H)", value: "6175.1 × 2286 × 2537.2 mm" },
        { label: "Dry Weight (Open)", value: "14 880 kg" },
        { label: "Wet Weight (Open)", value: "15 945 kg" }
      ]
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD", value: "≤2 %" }
      ]
    }
  ]
},

{
  title: "Cummins C2000D5‑PB",
  metaTitle: "Cummins C2000D5‑PB Containerised Diesel Generator",
  metaDescription: "Cummins C2000D5‑PB 2063 kVA standby / 1875 kVA prime, 50 Hz containerised diesel generator with Cummins QSK60‑G3 engine & Stamford PI734F alternator.",
  keywords: [
    "Cummins C2000D5‑PB",
    "2000 kVA diesel generator",
    "Containerised diesel generator",
    "Standby power generator 2000 kVA"
  ],
  slug: "c2000d5-pb",
  image: "/generators/cummins/2000kva-2250kva-containerised-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c2000d5-pb-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK60‑G3",
  emission: "Unregulated",
  ampsperphase: "2970.7",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford PI734F",
  alternatorbrand: "Stamford",
  frequency: "50 Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "380‑415 V",
  buildType: "Silent",
  startType: "Auto Start",
  size: 2000,
  standbyPower: "2063 kVA",
  primePower: "1875 kVA",
  description: `
<p>The Cummins C2000D5‑PB is a silent containerised diesel generator delivering 2063 kVA standby and 1875 kVA prime power at 50 Hz. Equipped with a Cummins QSK60‑G3 engine and Stamford PI734F alternator, it includes the advanced PowerCommand 3.3 control panel for full automation, monitoring, and protection.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSK60‑G3 (60° V16, turbocharged, low‑temp after‑cooled)" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 190 mm" },
        { label: "Displacement", value: "60.2 L" },
        { label: "Lube Oil Capacity", value: "378 L" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" },
        { label: "Max Fuel Flow", value: "1 514 L/hr" }
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford PI734F" },
        { label: "Insulation Class", value: "H" },
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" }
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" },
        { label: "Connection Type", value: "Circuit Breaker" }
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Fuel Usage @100% Load (Standby)", value: "388 L/hr" }
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby)", value: "49.2 m³/min (1738 CFM)" },
        { label: "Combustion Air Flow (Prime)", value: "71.1 m³/min (2510 CFM)" },
        { label: "Fan Load", value: "18 kWe (24 HP)" },
        { label: "Coolant Capacity (with radiator)", value: "615 L (162 US gal)" },
        { label: "Cooling System Air Flow", value: "28 m³/s (59 964 scfm)" },
        { label: "Cooling System Heat Rejection", value: "89.19 MJ/min (84 537 BTU/min)" },
        { label: "Total Heat Radiated", value: "17.73 MJ/min (16 800 BTU/min)" }
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow at Rated Load (Standby)", value: "331.3 m³/min (11 700 CFM)" },
        { label: "Exhaust Gas Flow at Rated Load (Prime)", value: "306.2 m³/min (10 815 CFM)" },
        { label: "Exhaust Temperature (Standby)", value: "440 °C (824 °F)" },
        { label: "Exhaust Temperature (Prime)", value: "415 °C (779 °F)" },
        { label: "Heat to Exhaust", value: "72 000 BTU/min (1 265 kWm)" },
        { label: "Maximum Exhaust Back Pressure", value: "6.772 kPa (27.2 in H₂O)" }
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Container Dimensions (L×W×H)", value: "12,192 × 2,438 × 2,896 mm" },
        { label: "Dry Weight", value: "14,880 kg" }
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD (Total Harmonic Distortion)", value: "≤2 %" },
        { label: "Gov. Type", value: "Electronic" },
        { label: "ATC & Battery Charger", value: "Optional" }
      ],
    }
  ]
},

{
  title: "Cummins C2250D5",
  metaTitle: "Cummins C2250D5 Open Diesel Generator",
  metaDescription: "Cummins C2250D5 2250 kVA standby / 2000 kVA prime, 50 Hz open diesel generator with Cummins QSK60‑G4 engine & Stamford PI734G alternator.",
  keywords: [
    "Cummins C2250D5",
    "2250 kVA diesel generator",
    "Open diesel generator",
    "Standby power generator 2250 kVA"
  ],
  slug: "c2250d5",
  image: "/generators/cummins/1760kva-2000kva-2250kva-2500kva-cummins-open-diesel-generator.webp",
  fullspec: "/generators/cummins/cummins-c2250d5-data-sheet.pdf",
  brand: "Cummins",
  category: "cummins",
  engine: "Cummins QSK60‑G4",
  emission: "Unregulated",
  ampsperphase: "3248",
  controlpanel: "Cummins PowerCommand 3.3",
  alternator: "Stamford PI734G",
  alternatorbrand: "Stamford",
  frequency: "50 Hz",
  fuelType: "Diesel",
  phase: "Three Phase",
  voltage: "400‑440 V",
  buildType: "Open",
  startType: "Auto Start",
  size: 2250,
  standbyPower: "2250 kVA",
  primePower: "2000 kVA",
  description: `
<p>The Cummins C2250D5 is a high-output open diesel generator offering 2250 kVA standby and 2000 kVA prime power at 50 Hz. It’s powered by a Cummins QSK60‑G4 V16 engine and Stamford PI734G alternator, controlled by the robust PowerCommand 3.3 panel.</p>
`,
  specs: [
    {
      group: "Engine Specs",
      items: [
        { label: "Engine Model", value: "QSK60‑G4 (60° V16, turbocharged, low‑temp after‑cooled)" },
        { label: "Gross Engine Power (Standby)", value: "1915 kWm" },
        { label: "Gross Engine Power (Prime)", value: "1730 kWm" },
        { label: "Rated Speed", value: "1 500 rpm" },
        { label: "Bore × Stroke", value: "159 × 190 mm" },
        { label: "Piston Speed", value: "9.5 m/s" },
        { label: "Compression Ratio", value: "14.5 : 1" },
        { label: "Lube Oil Capacity", value: "378 L" },
        { label: "Overspeed Limit", value: "1 725 ± 50 rpm" },
        { label: "Regenerative Power", value: "146 kW" },
        { label: "Governor Type", value: "Electronic" },
        { label: "Starting Voltage", value: "24 V DC" }
      ],
    },
    {
      group: "Alternator Specs",
      items: [
        { label: "Model", value: "Stamford PI734G" },
        { label: "Connection", value: "Wye, 3‑Phase" },
        { label: "Insulation/Temp Rise", value: "H class, 150/125 °C S/P" }
      ],
    },
    {
      group: "Control Panel Specs",
      items: [
        { label: "Controller Model", value: "PowerCommand 3.3" }
      ],
    },
    {
      group: "Fuel & Consumption",
      items: [
        { label: "Standby @¼/½/¾/Full Load", value: "138 / 229 / 328 / 437 L/hr" },
        { label: "Prime @¼/½/¾/Full Load", value: "114 / 200 / 291 / 394 L/hr" },
        { label: "Max Fuel Flow", value: "1893 L/hr" }
      ],
    },
    {
      group: "Cooling & Air",
      items: [
        { label: "Combustion Air Flow (Standby/Prime)", value: "144 / 136 m³/min" }
      ],
    },
    {
      group: "Exhaust",
      items: [
        { label: "Exhaust Gas Flow (Standby/Prime)", value: "337 / 311 m³/min" },
        { label: "Exhaust Temperature (Standby/Prime)", value: "450 / 430 °C" },
        { label: "Max Exhaust Back Pressure", value: "6.7 kPa" }
      ],
    },
    {
      group: "Dimensions & Weight",
      items: [
        { label: "Dimensions (Open Set)", value: "6175 × 2286 × 2537 mm" },
        { label: "Dry Weight", value: "15 095 kg" }
      ],
    },
    {
      group: "Standards & Accessories",
      items: [
        { label: "Voltage Regulation", value: "±1 % electronic" },
        { label: "THD", value: "≤2 %" },
        { label: "Options", value: "Battery Charger, Water Heater" }
      ],
    }
  ]
},



















];
