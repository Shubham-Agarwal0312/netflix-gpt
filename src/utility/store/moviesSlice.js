import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        videoTrailer: null,
        isPopup: false,
        popupTitle: '',
        popupMovies: null,
        isTrailerPopup: false,
        popupVideoTrailer: null,
        popupTrailerId: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addVideoTrailer: (state, action) => {
            state.videoTrailer = action.payload;
        },
        toggleShowPopup: (state, action) => {
            state.isPopup = action.payload;
        },
        addPopupTitle: (state, action) => {
            state.popupTitle = action.payload;
        },
        addPopupMovies: (state, action) => {
            state.popupMovies = action.payload;
        },
        toggleTrailerPopup: (state, action) => {
            state.isTrailerPopup = action.payload;
        },
        addPopupVideoTrailer: (state, action) => {
            state.popupVideoTrailer = action.payload;
        },
        addPopupTrailerId: (state, action) => {
            state.popupTrailerId = action.payload;
        }
    },
});

export const { 
    addNowPlayingMovies, 
    addPopularMovies, 
    addTopRatedMovies, 
    addUpcomingMovies, 
    addVideoTrailer,
    toggleShowPopup,
    addPopupTitle,
    addPopupMovies,
    toggleTrailerPopup,
    addPopupVideoTrailer,
    addPopupTrailerId } = moviesSlice.actions;
export default moviesSlice.reducer;