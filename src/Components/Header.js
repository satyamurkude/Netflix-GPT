import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUsers,removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';


const Header = () => {
  const Navigate=useNavigate();
  const dispatch= useDispatch();
  const user = useSelector((state) => state.user);
  
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

  return (
    <div className='w-full absolute z-10 px-8 py-2 bg-gradient-to-b from-gray-800 flex justify-between items-center'>
    <img className='w-48' src={LOGO} alt="logo"/>
    { user && (
      <div className="flex items-center">
        <img src={user.photoURL} alt="profile" className='w-10 h-19 mr-4 rounded-3xl border border-white'/>
        <button onClick={handleSignOut} className='bg-red-700 text-white px-4 py-2 rounded-lg font-bold'>Sign Out</button>
      </div>
    )}
  </div>
  
 
  )
}

export default Header