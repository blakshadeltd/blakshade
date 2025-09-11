export interface MenuItem {
    name: string;
    href: string;
}

export interface MenuCategory {
    [category: string]: MenuItem[];
}

export type MenuData = Record<'Generators', MenuCategory>;

export const menuData: MenuData = {
    Generators: {
        Brand: [
            { name: 'CAT Generator', href: '/generators/cat' },
            { name: 'Kohler Generator', href: '/generators/division/generator-2' },
            { name: 'Perkins Generator', href: '/generators/division/generator-3' },
            { name: 'Baudouin Generator', href: '/generators/division/generator-4' },
            { name: 'Cummins Generator', href: '/generators/cummins' },
        ],
        Types: [
            { name: 'Silent Generators', href: '/generators/silent' },
            { name: 'Open Generators', href: '/generators/open' },
            { name: '50Hz Generators', href: '/generators/zela/large-gen' },
            { name: '60Hz Generators', href: '/generators/zela/industrial-gen' },
            { name: 'Portable Gen', href: '/generators/zela/portable-gen' },
        ],
        Rating: [
            { name: '0 - 49 kVA', href: '/generators/1' },
            { name: '50 - 99 kVA', href: '/generators/2' },
            { name: '100 - 499 kVA', href: '/generators/3' },
            { name: '500 - 999 kVA', href: '/generators/4' },
            { name: '1000+ kVA', href: '/generators/5' },
        ],
    },
    
};
