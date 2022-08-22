import React from 'react'
import MovieSearch from './MovieSearch'

const Movie = ({movie,edit}) => {
  return (
    <div className='cards'>
    {movie.map(el=><MovieSearch el={el}key={el.id} edit={edit} />)}
    </div>
  )
}

export default Movie