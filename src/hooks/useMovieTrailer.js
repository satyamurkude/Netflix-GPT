
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
          const data = await response.json();
    
          const trailer = data.results.find((video) => video.type === 'Trailer');
    
          const newFilteredTrailer = trailer && trailer.key !== data.results[0].key ? trailer : data.results[0];
    
          dispatch(addTrailer(newFilteredTrailer));
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        if (movieId) {
          getMovieVideos();
        }
      }, [movieId]);
    
}

export default useMovieTrailer