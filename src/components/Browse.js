import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import MovieContainer from './MovieContainer'



const Browse = () => {
  const user = useSelector(store=>store.app.user)
  const navigate = useNavigate();
  
  useEffect(() => {
    return () => {
      if(!user){
        navigate('/')
      }
    }
  },[])  
  
 
  return (
    <div>
        <Header/>
        {/* <MainContainer/> */}
        <MovieContainer/>
        {/* <VedioBackground/> */}
    </div>
  )
}

export default Browse