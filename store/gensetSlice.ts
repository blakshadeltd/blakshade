import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Component = {
    id: string;
    name: string;
};

type GensetState = {
    components: {
        [category: string]: Component | null;
    };
};

const initialState: GensetState = {
    components: {
        engine: null,
        alternator: null,
        'fuel-tank': null,
        'control-panel': null,
    },
};

const gensetSlice = createSlice({
    name: 'genset',
    initialState,
    reducers: {
        setComponent: (
            state,
            action: PayloadAction<{ category: string; product: Component }>
        ) => {
            const { category, product } = action.payload;
            state.components[category] = product;
        },
        removeComponent: (state, action: PayloadAction<string>) => {
            state.components[action.payload] = null;
        },
    },
});

export const { setComponent, removeComponent } = gensetSlice.actions;
export default gensetSlice.reducer;
