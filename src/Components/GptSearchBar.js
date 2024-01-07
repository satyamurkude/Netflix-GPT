import React, { useRef } from 'react';
import openai from '../utils/openai';
import { MAIN_BG } from '../utils/constants';
import { useSelector } from 'react-redux';
import  lang from '../utils/languageConstants';
const GptSearchBar = () => {
  const langKey=useSelector(state=>state.config.language)
  const searchText=useRef(null)
  const handleGptSearchClick=async()=>{
   console.log(searchText.current.value)
  //  Make an Api call to gpt api and get the movie result and then dispatch it to the store
  const gptQuery = `
  Task: Movie Recommendation Engine
  
  Hello there! I'm seeking your expertise as a Movie Recommendation Engine.
  I have a plot summary or theme, and I'm looking for movie suggestions that match it.
  
  Plot Summary: "${searchText.current.value}"
  
  Could you kindly offer suggestions for 10 movies that relate to or match the provided plot summary or theme?
  It would be fantastic if you could include diverse genres and eras in your recommendations.
  
  Please ensure the movie titles are separated by commas for easy readability.
  
  Suggestions: 
  - Focus on popular, critically acclaimed, or widely loved movies.
  - Mix different genres like comedy, drama, action, or classics for variety.
  - If possible, include a blend of recent releases and timeless classics.
  - Aim for a balance between well-known titles and hidden gems.
  - Prioritize relevance to the provided plot summary or theme.
`;

  const gptResutls=await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery}],
    model: 'gpt-3.5-turbo', 

  });
  console.log(gptResutls.choices)
};
  return (
    <div className="flex justify-center items-center ">
   <div className='absolute top-0 left-0 z-[-20] flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-80'>
  <img
    className="   md:absolute inset-0 w-full h-full object-cover    "
    src={MAIN_BG}
    alt="bg-pic"
  />
</div>

      <form onSubmit={(e)=>{e.preventDefault()}} className=" flex items-center bg-black bg-opacity-80 border border-white rounded-full mt-28 px-6 py-3  " >
        <input
        ref={searchText}
          type="text"
          id="searchInput"
          placeholder={lang[langKey].placeholder}
          className="bg-gray-100 rounded-full w-full  px-4 py-2 text-lg focus:outline-none focus:shadow-outline md:w-96 "
        />
        <button className="ml-4 bg-red-600 text-white font-semibold rounded-full px-6 py-2 text-lg border border-white hover:bg-red-800"onClick={handleGptSearchClick} >{lang[langKey].search}</button>
      </form>
    </div>
  );
};


export default GptSearchBar;
