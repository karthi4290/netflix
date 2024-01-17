import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showSearchGpt: false,
        movieNames: null,
        movieResults: null,

    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showSearchGpt = !state.showSearchGpt
        },
        addGptMovies: (state, action) => {
            const { movie, tmdb } = action.payload
            state.movieNames = movie
            state.movieResults = tmdb
        },
        clearSuggestionBox: (state, action) => {
            state.movieNames = null;
            state.movieResults = null;
        }

    }
});


export const { toggleGptSearchView, addGptMovies, clearSuggestionBox } = gptSlice.actions;
export default gptSlice.reducer;