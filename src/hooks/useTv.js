import {API_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTv } from '../utils/movieSlice';
import  { useEffect } from 'react'


const useTv = () => {

const dispatch =useDispatch()
const getTv = async()=>{
   const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS)
  const data = await response.json()
  
dispatch (addTv(data.results))
}
useEffect(() => {getTv()},[])

}

export default useTv;