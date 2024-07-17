import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

const VBg = ({movieId}) => {
  console.log("movie ides")
  console.log(movieId)

  const trailerMovie = useSelector(store=> store.movie.trailerMovie)
  console.log(trailerMovie)

  useMovieById(movieId)
  
  return (
    <div className='w-screen'>
        <iframe 
          className='w-screen aspect-video' 
          src={`https://www.youtube.com/${trailerMovie?.key}embed/?si=tmBvBjj9CVcpqfTa&autoplay=1&mute=1`}
          title="YouTube video player" 
          frameborder="0" 
          allowFullScreen>
        </iframe>
    </div>
  )
}

export default VBg