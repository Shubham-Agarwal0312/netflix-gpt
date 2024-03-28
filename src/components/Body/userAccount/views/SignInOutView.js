import { useRef, useState } from "react";
import {checkValidDetails} from "../../../../utility/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../utility/firebaseSetup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../utility/store/userSlice";

const SignInOutView = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
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
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, 
                photoURL: "https://avatars.githubusercontent.com/u/65101716?v=4"
              }).then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({
                    uid: uid, 
                    email: email, 
                    displayName: displayName, 
                    photoURL: photoURL
                }));
                navigate("/browser");
              }).catch((error) => {
                // An error occurred
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ' - ' + errorMessage);
              });
              
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + ' - ' + errorMessage);
              // ..
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log("user = ", user);
              navigate("/browser");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + ' - ' + errorMessage);
            });
        }
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
                    ref={name}
                    className="border border-white bg-black bg-opacity-65  p-6 my-4 h-12 rounded"
                    type="text" 
                    placeholder="Enter User Name" 
                />
            }
            <input 
                ref={email}
                className="border border-white bg-black bg-opacity-65 p-6 my-4 h-12 rounded"
                type="text" 
                placeholder="Email" 
            />
            <input 
                ref={password}
                className="border border-white bg-black bg-opacity-65 p-6 my-4 h-12 rounded"
                type="text" 
                placeholder="Password" 
            />
            <p className=" text-red-600">
                {errorMessage}
            </p>
            <button
                onClick={() => {handleBtnClick()}}
                className="bg-red-600 my-4 h-12 rounded"
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