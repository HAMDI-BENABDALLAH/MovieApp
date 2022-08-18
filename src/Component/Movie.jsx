import React from 'react'
import MovieSearch from './MovieSearch'

const Movie = ({movie}) => {
  return (
    <div className='cards'>
    {movie.map(e=><MovieSearch e={e}key={e.id}/>)}
    </div>
  )
}

export default Movie