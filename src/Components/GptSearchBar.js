import React from 'react';
import { MAIN_BG } from '../utils/constants';
import { useSelector } from 'react-redux';
import  lang from '../utils/languageConstants';
const GptSearchBar = () => {
  const langKey=useSelector(state=>state.config.language)
  return (
    <div className="flex justify-center items-center ">
   <div className='absolute top-0 left-0 z-[-20] flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-80'>
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src={MAIN_BG}
    alt="bg-pic"
  />
</div>

      <form className="flex items-center bg-black bg-opacity-80 border border-white rounded-full mt-28 px-6 py-3">
        <input
          type="text"
          id="searchInput"
          placeholder={lang[langKey].placeholder}
          className="bg-gray-100 rounded-full w-96 px-4 py-2 text-lg focus:outline-none focus:shadow-outline"
        />
        <button className="ml-4 bg-red-600 text-white font-semibold rounded-full px-6 py-2 text-lg border border-white hover:bg-red-800">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
