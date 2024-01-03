import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCards = ({posterPath} ) => {
  return (
    <div className="w-48 mr-4 overflow-hidden border border-gray-300 rounded-md shadow-md transition duration-300 transform hover:shadow-lg">
    <img
      className="w-full h-auto transition duration-700 transform cursor-pointer hover:scale-125"
      src={IMG_CDN + posterPath}
      alt="movie poster"
    />
  </div>
  
  
  );
};

export default MovieCards;
