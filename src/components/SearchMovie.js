import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedMoviesDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
  const [searchMovie,setSearchMovie] = useState("");
  const dispatch = useDispatch()
  const isLoading = useSelector(store=> store.app.isLoading)
  const {movieName,searchedMovie} = useSelector(store=> store.searchMovie)

  const submitHandler = async (e) =>{
    e.preventDefault()
    dispatch(setLoading(true))
    try{
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,options);
      const movies = res?.data?.results;
      console.log(movies)
      dispatch(setSearchedMoviesDetails({searchMovie, movies}))
    }catch(error){
      console.log(error);
    }finally{
      dispatch(setLoading(false))
    }
    setSearchMovie("");
  }

  return (
    <>
      <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} className='w-[50%]'>
          <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
            <input type="text" value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}} className='w-full outline-none rounded-md text-lg'  placeholder='Search Movie ....' />
            <button className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading ? "loading..." : "Search"}</button>
          </div>
        
          </form>
      </div>

      <MovieList title={movieName} movies={searchedMovie}/>
      
    </>
   
  )
}

export default SearchMovie