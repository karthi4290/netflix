import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        getTrailer: null,
        getPopular: null,
        getUpcoming: null,
        getTopRated: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.getTrailer = action.payload;
        },
        addPopular: (state, action) => {
            state.getPopular = action.payload
        },
        addUpcoming: (state, action) => {
            state.getUpcoming = action.payload
        },
        addTopRated: (state, action) => {
            state.getTopRated = action.payload
        }
    }
});

export default movieSlice.reducer;
export const { addNowPlaying, addTrailer, addPopular,addUpcoming,addTopRated } = movieSlice.actions;