import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import MovieContainer from './MovieContainer'
import MainCon from './MainCon'



const Browse = () => {
  const user = useSelector(store=>store.app.user)
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
        navigate("/");
    }
  }, []);
  
 
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