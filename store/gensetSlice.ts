import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Component = {
    id: string;
    name: string;
};

type Config = {
    duty: string;
    phase: string;
    frequency: string;
    weather: string;
};

type GensetState = {
    components: {
        [category: string]: Component | null;
    };
    config: Config;
};

const initialState: GensetState = {
    components: {
        engine: null,
        alternator: null,
        'fuel-tank': null,
        'control-panel': null,
    },
    config: {
        duty: 'Standby',
        phase: 'Single Phase',
        frequency: '50Hz',
        weather: 'Normal'
    }
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
        setInitialConfig: (state, action: PayloadAction<Partial<Config>>) => {
            state.config = {
                ...state.config,
                ...action.payload
            };
        },
        updateConfig: (state, action: PayloadAction<Partial<Config>>) => {
            state.config = {
                ...state.config,
                ...action.payload
            };
        },
    },
});

export const { setComponent, removeComponent, setInitialConfig, updateConfig } = gensetSlice.actions;
export default gensetSlice.reducer;