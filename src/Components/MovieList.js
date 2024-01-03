import React from 'react';
import MovieCards from './MovieCards';


const MovieList = ({ title, movies }) => {
    
  return (
<div className='px-6 py-1 '>
<h1 className='text-2xl py-4 font-serif text-white -z-20'>{title}</h1>
    <div className='flex overflow-x-scroll'>

        <div className='flex '> 
           { movies?.map((movie)=><MovieCards key={movie.id} posterPath={movie.poster_path} />)}
            
        </div>
       
    </div>
    </div>
  );
};

export default MovieList;
