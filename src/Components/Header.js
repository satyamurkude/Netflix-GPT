import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

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
  return (
    <div className='w-full absolute z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
  { user &&( <div>
    <img src={user.photoURL} alt="profile" className='w-10 h-10 '/>
    <button onClick={handleSignOut} className='bg-red-700 text-white px-4 py-2 rounded-lg font-bold my-4'>Sign Out</button>
   </div>)}

    </div>
 
  )
}

export default Header