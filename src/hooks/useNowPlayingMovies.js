import {API_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import  { useEffect } from 'react'


const useNowPlayingMovies = () => {

const dispatch =useDispatch()
const getNowPlayingMovies = async()=>{
   const response = await fetch( `https://api.themoviedb.org/3/movie/now_playing?api_key=9d0f0a0e7e9f7a1f1f6c5f9d8d9b9a4e&page=1`, API_OPTIONS)
  const data = await response.json()
  
dispatch (addNowPlayingMovies(data.results))
}
useEffect(() => {getNowPlayingMovies()},[])

}

export default useNowPlayingMovies;