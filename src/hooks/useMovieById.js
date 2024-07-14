import axios from 'axios'
import React from 'react'
import { options } from '../utils/constant'

const useMovieById = async(movieId) => {

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options)
        console.log("movie Record")
        console.log(res)

    }catch(error){
        
    }
}

export default useMovieById