import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';

const SearchMovie = () => {
  const [searchMovie,setSearchMovie] = useState("");
  const dispatch = useDispatch()


  const submitHandler = async (e) =>{
    e.preventDefault()
    try{
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,options);
      const movies = res?.data?.results;
      console.log(movies)
      dispatch()
    }catch(error){
      console.log(error);
    }
    setSearchMovie("");
  }

  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
      <form onSubmit={submitHandler} className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
          <input type="text" value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}} className='w-full outline-none rounded-md text-lg'  placeholder='Search Movie ....' />
          <button className='bg-red-800 text-white rounded-md px-4 py-2'>Search</button>
        </div>
      
      </form>
    </div>
  )
}

export default SearchMovie