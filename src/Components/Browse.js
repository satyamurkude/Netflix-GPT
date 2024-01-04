
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import useTv from '../hooks/useTv';
import GptSearch from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch=useSelector(state=>state.gpt.showGptSearch)
 useNowPlayingMovies(); 
 usePopularMovies();
 useTopRated();
 useUpcoming();
 useTv();
    
  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearch/> :  <><MainContainer/>
    <SecondaryContainer/>
    </>
     }
    
    </div>

  )
}

export default Browse;