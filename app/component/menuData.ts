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
            { name: 'Cummins Generator', href: '/generators/cummins' },
        ],
        Types: [
            { name: 'Home Generators', href: '/generators/home' },
            { name: 'Silent Generators', href: '/generators/silent' },
            { name: 'Open Generators', href: '/generators/open' },
            { name: '50Hz Generators', href: '/generators/50Hz' },
            { name: '60Hz Generators', href: '/generators/60Hz' },

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
