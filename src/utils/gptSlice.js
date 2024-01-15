import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showSearchGpt: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showSearchGpt = !state.showSearchGpt
        }
    }
});


export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;