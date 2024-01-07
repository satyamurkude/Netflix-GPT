import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUsers,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchBtn } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {
  const Navigate=useNavigate();
  const dispatch= useDispatch();
  const user = useSelector((state) => state.user);
  const showGptSearch=useSelector(state=>state.gpt.showGptSearch)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      Navigate("/")
dispatch(removeUser())
}).catch((error) => {
    Navigate("/error")
  // An error happened.
});



  }

  
useEffect(() => {

  const unsubscribe=onAuthStateChanged(auth, (user) => {
    // onAuthStateChanged() method returns an unsubscribe() function that can be used to unsubscribe the listener when it is no longer needed.
  if (user) {
    
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUsers({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
   Navigate("/browse")
  } else {
    dispatch(removeUser());
 Navigate("/")
  }
});
return()=>{
  // unsubscribe will be called when the compount unmounts or get removed from the dom 
  
  unsubscribe();

}
},[])

const handleGptSearchClick=()=>{
  dispatch(toggleGptSearchBtn())
}

const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

return (
  <div className='w-full absolute z-10 px-3 flex flex-col bg-gradient-to-b from-gray-900 md:flex-row justify-between items-center md:bg-gradient-to-b from-gray-900 '>
  {/* Logo and GPT Search Button */}
  <div className="flex items-center">
    {/* GPT Search Button */}
   

    {/* Logo */}
    <img className='w-48 mx-auto md:mx-0' src={LOGO} alt="logo"/>
  </div>

  { user && (
    <div className="flex items-center">
      {showGptSearch && <select className="bg-red-600 p-1 text-white border border-white cursor-pointer mr-3 rounded-3xl hover:bg-red-700" onChange={handleLanguageChange} >
{SUPPORTED_LANGUAGES.map(lang => (<option className='cursor-pointer border border-white' key={lang.identifier} value={lang.identifier}> {lang.name}</option>))}
</select>}
      { !showGptSearch? <button onClick={handleGptSearchClick} className='bg-blue-600 text-white px-3 py-1 rounded-3xl font-bold flex items-center mr-3 border border-white hover:bg-blue-700'>
          
    <svg className='h-10 w-10 pr-2 ' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64">
      <path d="M24,16.14l14.72-8.5c0.01,0,0.01-0.01,0.02-0.01c-0.58-1.16-1.34-2.21-2.25-3.12C34.32,2.34,31.32,1,28,1
        c-6.62,0-11.99,5.36-12,11.98c0,0.01,0,0.01,0,0.02v17l7.97,4.62L24,16.14z"></path>
      <path d="M7.546,36.356l14.722,8.5l7.986-4.592l-15.989-9.266L14.264,14c0.005-0.009-0.004-0.014,0.001-0.022
        c-1.295-0.078-2.584,0.055-3.827,0.389c-2.964,0.794-5.625,2.722-7.285,5.598c-3.31,5.733-1.353,13.064,4.375,16.382
        C7.537,36.351,7.537,36.351,7.546,36.356z"></path>
      <path d="M38.284,37.644l-16.019,9.214L7.544,38.36c-0.005-0.009-0.014-0.004-0.019-0.012c-0.715,1.082-1.244,2.266-1.577,3.509
        c-0.794,2.964-0.455,6.232,1.205,9.108c3.31,5.733,10.637,7.704,16.375,4.402c0.009-0.005,0.009-0.005,0.017-0.01l14.722-8.5
        L38.284,37.644z"></path>
      <path d="M40,47.86l-14.72,8.5c-0.01,0-0.01,0.01-0.02,0.01c0.58,1.16,1.34,2.21,2.25,3.12C29.68,61.66,32.68,63,36,63
        c6.62,0,11.99-5.36,12-11.98c0-0.01,0-0.01,0-0.02V34l-7.97-4.62L40,47.86z"></path>
      <path d="M56.472,27.654c-0.009-0.005-0.009-0.005-0.017-0.01l-14.722-8.5l-7.986,4.592l15.989,9.266L49.736,50
        c-0.005,0.009,0.004,0.014-0.001,0.022c1.295,0.078,2.584-0.055,3.827-0.389c2.964-0.794,5.625-2.722,7.285-5.598
        C64.157,38.303,62.2,30.972,56.472,27.654z"></path>
      <path d="M56.456,25.64c0.005,0.009,0.014,0.004,0.019,0.012c0.715-1.082,1.244-2.265,1.577-3.509
        c0.794-2.964,0.455-6.232-1.205-9.108c-3.31-5.733-10.637-7.704-16.375-4.402c-0.009,0.005-0.009,0.005-0.017,0.01l-14.722,8.5
        l-0.016,9.212l16.019-9.214L56.456,25.64z"></path>
    </svg>
    GPT Search
    
  </button>
  :
  <button onClick={handleGptSearchClick} className='bg-red-600 text-white px-3 py-1 rounded-3xl font-bold flex items-center mr-3 border border-white hover:bg-red-700'>
Home
</button>


  }
      <img src={user.photoURL} alt="profile" className='w-12 h-19 mr-4 rounded-3xl border border-green-600'/>
      <button onClick={handleSignOut} className='bg-red-700 text-white px-4 py-2 rounded-lg font-bold border border-white hover:bg-red-800'>Sign Out</button>
    </div>
  )}
</div>

  
 
  )
}

export default Header