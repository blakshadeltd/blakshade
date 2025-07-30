export interface MenuItem {
    name: string;
    href: string;
}

export interface MenuCategory {
    [category: string]: MenuItem[];
}

export type MenuData = Record<'Generators' | 'Components', MenuCategory>;

export const menuData: MenuData = {
    Generators: {
        Brand: [
            { name: 'CAT Generator', href: '/generators/division/generator-1' },
            { name: 'Kohler Generator', href: '/generators/division/generator-2' },
            { name: 'Perkins Generator', href: '/generators/division/generator-3' },
            { name: 'Baudouin Generator', href: '/generators/division/generator-4' },
            { name: 'Cummins Generator', href: '/generators/division/generator-5' },
        ],
        Types: [
            { name: 'Silent Generators', href: '/generators/zela/small-gen' },
            { name: 'Open Generators', href: '/generators/zela/medium-gen' },
            { name: '50Hz Generators', href: '/generators/zela/large-gen' },
            { name: '60Hz Generators', href: '/generators/zela/industrial-gen' },
            { name: 'Portable Gen', href: '/generators/zela/portable-gen' },
        ],
        Rating: [
            { name: '0 - 49 kVA', href: '/generators/upozela/solar-gen' },
            { name: '50 - 99 kVA', href: '/generators/upozela/wind-gen' },
            { name: '100 - 499 kVA', href: '/generators/upozela/diesel-gen' },
            { name: '500 - 999 kVA', href: '/generators/upozela/petrol-gen' },
            { name: '1000+ kVA', href: '/generators/upozela/hybrid-gen' },
        ],
    },
    Components: {
        Engines: [
            { name: 'Diesel Engine', href: '/components/engines/diesel' },
            { name: 'Gasoline Engine', href: '/components/engines/gasoline' },
            { name: 'Hybrid Engine', href: '/components/engines/hybrid' },
            { name: 'Industrial Engine', href: '/components/engines/industrial' },
            { name: 'Compact Engine', href: '/components/engines/compact' },
        ],
        Alternators: [
            { name: 'Single Phase', href: '/components/alternators/single-phase' },
            { name: 'Three Phase', href: '/components/alternators/three-phase' },
            { name: 'Brushless', href: '/components/alternators/brushless' },
            { name: 'Permanent Magnet', href: '/components/alternators/permanent-magnet' },
            { name: 'High Frequency', href: '/components/alternators/high-frequency' },
        ],
        'Fuel Tanks': [
            { name: 'Steel Tank', href: '/components/fuel-tanks/steel' },
            { name: 'Plastic Tank', href: '/components/fuel-tanks/plastic' },
            { name: 'Sub-base Tank', href: '/components/fuel-tanks/sub-base' },
            { name: 'Underground Tank', href: '/components/fuel-tanks/underground' },
            { name: 'Portable Tank', href: '/components/fuel-tanks/portable' },
        ],
        'Control Panel': [
            { name: 'Manual Start', href: '/components/control-panel/manual' },
            { name: 'Auto Start', href: '/components/control-panel/auto' },
            { name: 'Digital Display', href: '/components/control-panel/digital' },
            { name: 'IoT Enabled', href: '/components/control-panel/iot' },
            { name: 'Weatherproof', href: '/components/control-panel/weatherproof' },
        ],
    },
};
