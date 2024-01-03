import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const filteredTrailerKey = useSelector((state) => state.movies?.trailerVideo?.key);
 useMovieTrailer(movieId);


  return (
    <div className='w-screen  aspect-video hidden md:block'>
    <iframe
      width='100%'
      height='100%'
      src={"https://www.youtube.com/embed/" + filteredTrailerKey+"?autoplay=1&mute=1"}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullscreen></iframe>
  </div>
  

  
  );
};

export default VideoBackground;
