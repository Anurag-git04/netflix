import React from 'react'
import VBg from './VBg'
import Vtile from './Vtile'
import { useSelector } from 'react-redux'

const MainCon = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovie)
  if(!movie) return; //erarly return

  console.log("new onew")
  console.log(movie)

  const {overview, id, title}  = movie[4];

  return (
    <div>
        <Vtile title={title} overview={overview} />
        <VBg movieId={id}/>
    </div>
  )
}

export default MainCon