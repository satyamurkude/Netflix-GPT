import {API_OPTIONS} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addUpcoming } from '../utils/movieSlice';
import  { useEffect } from 'react'


const useUpcoming = () => {

const dispatch =useDispatch()
const getUpcoming = async()=>{
   const response = await fetch( `https://api.themoviedb.org/3/movie/upcoming?api_key=9d0f0a0e7e9f7a1f1f6c5f9d8d9b9a4e&page=1`, API_OPTIONS)
  const data = await response.json()
  
dispatch (addUpcoming(data.results))
}
useEffect(() => {getUpcoming()},[])

}

export default useUpcoming;