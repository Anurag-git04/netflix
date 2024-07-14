import React from 'react'
import { Banner_Url } from '../utils/constant'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-48 pr-2'>
        <img src={`${Banner_Url}/${posterPath}`} alt="movie Banner" />
    </div>
  )
}

export default MovieCart