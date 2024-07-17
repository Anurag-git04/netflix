import React from 'react'
import VBg from './VBg'
import Vtile from './Vtile'
import { useSelector } from 'react-redux'

const MainCon = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovie);
  if(!movie) return; // early return in react
 
  const {overview, id, title} = movie[4];
  
  console.log(id)
  

  return (
    <div>
        <Vtile title={title} overview={overview} />
        <VBg movieId={id}/>
    </div>
  )
}

export default MainCon