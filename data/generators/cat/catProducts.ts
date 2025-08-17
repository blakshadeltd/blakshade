export interface CatProduct {
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

export const cats: CatProduct[] = [

{
    title: "CAT DE33 GC",
    metaTitle: "CAT DE33 GC Silent Diesel Generator",
    metaDescription: "CAT DE33 GC 33 kVA 50Hz silent diesel generator with auto start, Cat® C3.3 engine & Standerd alternator. Reliable three-phase power.",
    keywords: [
  "CAT DE33 GC",
  "33 kVA diesel generator",
  "Silent diesel generator",
  "Standby power generator 33 kVA"
],
    slug: "de33gc",
    image: "/generators/cat/22kva-28kva-cummins-silent-diesel-generator.webp",
    fullspec: "/generators/cat/CAT®-DE33-GC-33kVA-Datasheet.pdf",
    brand: "CAT",
    category: "cat",
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
<p>The CAT DE33 GC is a powerful and efficient 22 kVA silent diesel generator designed to provide reliable three-phase power for commercial, industrial, and data center applications.</p>

<p>Featuring the robust and fuel-efficient Cummins X2.5-G2 3-cylinder engine, this generator operates smoothly at 1500 rpm, ensuring stable prime and standby power output with exceptional voltage regulation (±1%) and low total harmonic distortion (≤2%). Engineered for durability and quiet operation, the C22D5 incorporates a water-cooled cooling system and an advanced mechanical governor for precise engine control. The Stamford S0L2-M1 alternator delivers consistent electrical output, while the Cummins PowerStart 0600 control panel offers intuitive monitoring, automatic start/stop functions, and comprehensive protection features to safeguard your equipment.</p>

<p>Ideal for backup power and continuous prime power needs, the CAT DE33 GC silent diesel generator combines robust performance, low emission, and ease of maintenance. Its compact design and low noise profile make it suitable for use in both indoor and outdoor environments, providing peace of mind during power outages and operational demands.</p>
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


];