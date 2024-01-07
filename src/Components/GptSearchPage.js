import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div className='pt-[20%] md:pt-[0%]'> <GptSearchBar/>
           <GptMovieSuggestion/></div>
  )
}

export default GptSearch