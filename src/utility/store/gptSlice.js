import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        gptSearchPageView: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.gptSearchPageView = !state.gptSearchPageView;
        },
    },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;