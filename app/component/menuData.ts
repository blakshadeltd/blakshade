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
    },

};
