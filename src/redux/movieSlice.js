import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovie:null,
        PopularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
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
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;
        }
    }
})

export const {getNowPlayingMovies,getPopularMovies,gettopRatedMovies, getupcomingMovies,setToggle} = movieSlice.actions;
export default movieSlice.reducer;