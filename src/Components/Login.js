import Header from "./Header";
import {useState} from "react";
const Login=()=>{

    const [signInForm,setSignInForm]=useState(false);
    const toggleSignInForm=()=>{
    setSignInForm(!signInForm);
    }
    return(
        <div>
           <Header/>
<img div className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-pic" />
      <form className="absolute bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 p-12  rounded-xl w-3/12">
        <h1 className="font-bold text-white text-3xl py-5 "> {signInForm ? "Sign Up":"Sign In"}</h1>
       { signInForm &&<  input className="w-full p-4 my-4 rounded-lg bg-gray-700 text-white" type="text" placeholder="Name" />}

        <input className="w-full p-4 my-4 rounded-lg bg-gray-700 text-white" type="text" placeholder="Email or phone number" />

        <input className="w-full p-4 my-4 rounded-lg  bg-gray-700" type="password" placeholder="Password" />
        <button className="w-full p-4 my-6 bg-red-700 rounded-lg font-bold text-white" type="submit">Sign In</button>
        <span className="text-white cursor-pointer " onClick={toggleSignInForm} >{signInForm ? "New to Netflix? Sign up now.":"Already registered? Sign In Now."} </span>
          

      </form>
      
        </div>
    )
}

export default Login;