import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import MovieContainer from './MovieContainer'
import MainCon from './MainCon'
import axios from 'axios'
import { Now_Playing_Movie, options } from '../utils/constant'
import { getNowPlayingMovies } from '../redux/movieSlice'
import usenowPlayingMovies from '../hooks/useNowPlayingMovies'



const Browse = () => {
  const user = useSelector(store=>store.app.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  usenowPlayingMovies()
  
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // nowPlayingMovies()
  },[]);
  
 
  return (
    <div>
        <Header/>
        <div>
          <MainCon/>
          <MovieContainer/>
        </div>
    </div>
  )
}

export default Browse