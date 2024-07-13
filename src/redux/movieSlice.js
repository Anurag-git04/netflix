import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovie:null,
        PopularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie = action.payload;
        },
        getPopularMovies:(state,action)=>{
            state.PopularMovies = action.payload;
        },
        gettopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        getupcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        }
    }
})

export const {getNowPlayingMovies,getPopularMovies,gettopRatedMovies, getupcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;