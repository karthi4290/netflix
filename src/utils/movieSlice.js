import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        getTrailer: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.getTrailer = action.payload;
        }
    }
});

export default movieSlice.reducer;
export const { addNowPlaying, addTrailer } = movieSlice.actions;