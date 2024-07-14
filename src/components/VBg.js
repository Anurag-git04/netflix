import React from 'react'
import useMovieById from '../hooks/useMovieById'

const VBg = ({movieId}) => {

  useMovieById(movieId)
  
  return (
    <div className='w-screen'>
        <iframe 
          className='w-screen aspect-video' 
          src="https://www.youtube.com/embed/pjhHfn-d63I?si=tmBvBjj9CVcpqfTa&autoplay=1&mute=1" 
          title="YouTube video player" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
    </div>
  )
}

export default VBg