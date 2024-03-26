import { useRef, useState } from "react";
import {checkValidDetails} from "../../../../utility/validate";

const SignInOutView = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const email = useRef(null);
    const password = useRef(null);
    const toggleSignInOut =() => {
        setIsSignIn(isSignIn => !isSignIn);
    }

    const handleBtnClick = () => {
        const errorMsg = checkValidDetails(email.current.value, password.current.value);
        setErrorMessage(errorMsg);
        if (errorMsg !== null) 
            return;
    }

    return (
        <form 
            onSubmit={(e) => {e.preventDefault()}}
            className="absolute text-white mx-auto left-0 right-0 mt-32 p-20 z-10 flex w-1/3 flex-col bg-black bg-opacity-80"
        >
            <h1 className="font-bold text-4xl mb-6">
                {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && 
                <input 
                    className="border border-white bg-black bg-opacity-65  p-6 my-4 h-12 rounded rounded-md"
                    type="text" 
                    placeholder="Enter User Name" 
                />
            }
            <input 
                ref={email}
                className="border border-white bg-black bg-opacity-65 p-6 my-4 h-12 rounded rounded-md"
                type="text" 
                placeholder="Email" 
            />
            <input 
                ref={password}
                className="border border-white bg-black bg-opacity-65 p-6 my-4 h-12 rounded rounded-md"
                type="text" 
                placeholder="Password" 
            />
            <p className=" text-red-600">
                {errorMessage}
            </p>
            <button
                onClick={() => {handleBtnClick()}}
                className="bg-red-600 my-4 h-12 rounded rounded-md"
            >
                {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p 
                className="cursor-pointer"
                onClick={() => {toggleSignInOut()}}
            >
                {isSignIn 
                    ? "New to Netflix? Sign up now." 
                    : "Already have account? Sign In now."
                }
                
            </p>
        </form>
    );
};

export default SignInOutView;