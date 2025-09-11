// components/GeneratorsSidebar.tsx
"use client";

interface GeneratorsSidebarProps {
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
  selectedEmission: string;
  setSelectedEmission: (value: string) => void;
  selectedFrequency: string;
  setSelectedFrequency: (value: string) => void;
  selectedFuelType: string;
  setSelectedFuelType: (value: string) => void;
  selectedPhase: string;
  setSelectedPhase: (value: string) => void;
  selectedBuildType: string;
  setSelectedBuildType: (value: string) => void;
  showFilters: boolean;
  setSelectedKvaRating: (value: string) => void;
  selectedKvaRating: string;
}

const GeneratorsSidebar: React.FC<GeneratorsSidebarProps> = ({
  selectedBrand,
  setSelectedBrand,
  selectedEmission,
  setSelectedEmission,
  selectedFrequency,
  setSelectedFrequency,
  selectedFuelType,
  setSelectedFuelType,
  selectedPhase,
  setSelectedPhase,
  selectedBuildType,
  setSelectedBuildType,
  showFilters,
  setSelectedKvaRating,
  selectedKvaRating,
}) => {
  const filterConfig = [
    {
      label: "Brand",
      options: ["All", "Cummins", "CAT", "Perkins"],
      state: selectedBrand,
      setState: setSelectedBrand,
    },
    {
      label: "Emission",
      options: ["All", "Stage IIIA", "Stage V", "Unregulated"],
      state: selectedEmission,
      setState: setSelectedEmission,
    },
    {
      label: "Frequency",
      options: ["All", "50Hz", "60Hz"],
      state: selectedFrequency,
      setState: setSelectedFrequency,
    },
    {
      label: "Fuel Type",
      options: ["Diesel"],
      state: selectedFuelType,
      setState: setSelectedFuelType,
    },
    {
      label: "kVA Rating",
      options: [
      "All",
      "0 - 49 kVA",
      "50 - 99 kVA",
      "100 - 499 kVA",
      "500 - 999 kVA",
      "1000+ kVA",
      ],
      state: selectedKvaRating,
      setState: setSelectedKvaRating,
    },
    {
      label: "Phase",
      options: ["All", "Single Phase", "Three Phase"],
      state: selectedPhase,
      setState: setSelectedPhase,
    },
    {
      label: "Build Type",
      options: ["All", "Silent", "Open"],
      state: selectedBuildType,
      setState: setSelectedBuildType,
    },
  ];

  return (
    <aside className={`w-full lg:w-[20%] border rounded-xl p-4 overflow-hidden border-gray-200 bg-white shadow-sm ${showFilters ? 'block' : 'hidden lg:block'}`}>
      <h2 className="text-lg mb-5 text-[var(--foreground)]">Filters</h2>
      <div className="space-y-6 text-[var(--foreground)]">
        {filterConfig.map(({ label, options, state, setState }) => (
          <div key={label}>
            <label className="block mb-4 text-[var(--foreground)]">{label}</label>
            <div className="space-y-2">
              {options.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-[10px] hover:rounded-[15px] border transition-all duration-500 ease-in-out ${
                    state === option
                      ? "bg-[var(--foreground)] text-white border-[var(--foreground)]"
                      : "border-gray-300 text-[var(--foreground)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <input
                    type="radio"
                    name={label}
                    checked={state === option}
                    onChange={() => setState(option)}
                    className="hidden"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default GeneratorsSidebar;