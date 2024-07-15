import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovie:null,
        PopularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie:null,
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
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload;
        }
    }
})

export const {getNowPlayingMovies,getPopularMovies,gettopRatedMovies, getupcomingMovies,setToggle,getTrailerMovie} = movieSlice.actions;
export default movieSlice.reducer;