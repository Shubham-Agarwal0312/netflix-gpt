import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en',
    },
    reducers: {
        setLanguage: (state, actions) => {
            state.lang = actions.payload;
        },
    },
});

export const { setLanguage } = configSlice.actions;
export default configSlice.reducer;