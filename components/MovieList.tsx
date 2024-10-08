import { isEmpty } from 'lodash';
import React, { FC } from 'react'
import MovieCard from './MovieCard';

interface MoviesListProps {
  data: Record<string, any>[],
  title: string;
}

const MovieList: FC<MoviesListProps> = ({data, title}) => {
  if(isEmpty(data)){
    return null
  }
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <div className=''>
        <p className='text-white text-md md:text-lg lg:text-2xl font-semibold mb-4'>{title}</p>
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {data.map((movie) => (
         <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList