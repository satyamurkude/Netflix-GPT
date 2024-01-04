import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies);
  const { nowPlayingMovies, popularMovies,topRatedMovies,upcoming,Tv } = movies || {}; // Destructure the properties from 'movies' or set to empty object if 'movies' is undefined

  return (
    <div className='bg-black'>
      <div className='-mt-40 pl-12 relative z-20'>
        {nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        )}
        {popularMovies && (
          <MovieList title={"Popular Movies"} movies={popularMovies} />
        )}
        {topRatedMovies && (
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
        )},
        {upcoming && (
          <MovieList title={"Upcoming"} movies={upcoming} />
        )},
         { Tv && (
          <MovieList title={"TV"} movies={Tv} />
        )}
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
