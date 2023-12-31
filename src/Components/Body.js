import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {  RouterProvider, createBrowserRouter,Route } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUsers, removeUser } from '../utils/userSlice';
const Body = () => {
  const dispatch = useDispatch();

const appRouter=createBrowserRouter([
    {path:"/",
     element:<Login />},
    {path:"/browse",
    element:<Browse/>}],
    )
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUsers({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       
      } else {
        dispatch(removeUser());
     
      }
    });
},[])
  return (
    <div>
 <RouterProvider router={appRouter}>
      
      <Route />
    </RouterProvider>

    </div>
  )
}

export default Body