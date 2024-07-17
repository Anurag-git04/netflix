import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        movieName:null,
        searchedMovie:null
    },
    reducers:{
        //actions
        setSearchedMoviesDetails:(state,action)=>{
            const {searchMovie,movies} = action.payload
        },
        setMovieName:(state,action)=>{
            state.movieName = action.payload
        },
        setSearchedMovies:(state,action)=>{
            state.searchedMovie = action.payload
        }
    }
})

export const {setMovieName, setSearchedMovies} = searchSlice.actions
export default searchSlice.reducer