import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidations, isEmailValid, isPasswordValid, isNameValid } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate=useNavigate();
  const [signInForm, setSignInForm] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleSignInButton = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : null; // To handle optional name field

    const emailValidation = isEmailValid(email);
    const passwordValidation = isPasswordValid(password);
    const nameValidation = name ? isNameValid(name) : true; // Validate only if name field exists

    setEmailError(emailValidation ? null : "Please enter a valid email address or phone number.");
    setPasswordError(passwordValidation ? null : "Your password must contain between 4 and 60 characters.");
    setNameError(nameValidation ? null : "Please enter a valid name.");

    if (emailValidation && passwordValidation && nameValidation) {
      const validationResult = checkValidations(email, password, name);
if (validationResult=== "false") return { errorMessage:"Please enter a valid name."};
      
        if(signInForm){
          // sign up logic 
          createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name, photoURL:"https://media.licdn.com/dms/image/D5603AQFxwumMToFGYA/profile-displayphoto-shrink_400_400/0/1698640734427?e=1709164800&v=beta&t=42VrLeux-w-nQS08zZVVwV0kHphaFWaxXFgoMcoRvvc"
    }).then(() => {
      Navigate("/browse")
      // ...
    }).catch((error) => {
      setEmailError(error.message)
      setPasswordError(error.message)

      // ...
    });
    console.log(user)
    Navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setEmailError(errorMessage+"-"+errorCode)
    setPasswordError(errorMessage+"-"+errorCode)
    

  });

      } else {
        // sign in logic 
        
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    Navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setEmailError(errorMessage+"-"+errorCode) 
    setPasswordError(errorMessage+"-"+errorCode)
  });

      }
     
    };
  }
  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header/>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-pic"
      />
      <form className="absolute bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 p-12 rounded-xl w-3/12">
        <h1 className="font-bold text-white text-3xl py-5">
          {signInForm ? "Sign Up" : "Sign In"}
        </h1>

        {signInForm && (
          <>
            <input
              ref={nameRef}
              className="w-full p-4 my-4 rounded-lg bg-gray-700 text-white"
              type="text"
              placeholder="Name"
            />
            <p className="font-bold text-red-700 underline">{nameError}</p>
          </>
        )}

        <input
          className="w-full p-4 my-4 rounded-lg bg-gray-700 text-white"
          type="text"
          ref={emailRef}
          placeholder="Email or phone number"
        />
        {emailError && (
          <p className="font-bold text-red-700 underline">{emailError}</p>
        )}

        <input
          className="w-full p-4 my-4 rounded-lg bg-gray-700 text-white"
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />
        {passwordError && (
          <p className="font-bold text-red-700 underline">{passwordError}</p>
        )}

        <button
          className="w-full p-4 my-6 bg-red-700 rounded-lg font-bold text-white border"
          type="submit"
          onClick={handleSignInButton}
        >
         {signInForm ? "Sign Up" : "Sign In"}
        </button>

        <span className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {signInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </span>
      </form>
    </div>
  );
};

export default Login;
