import { useEffect } from "react";
import BrowserLayout from "./browser/BrowserLayout";
import UserAccountLayout from "./userAccount/UserAccountLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "../../utility/firebaseSetup";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from './../../utility/store/userSlice';

const BodyLayout = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
              // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                
            }
          });
    },[]);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserAccountLayout />} />
                    <Route path="/browser" element={<BrowserLayout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default BodyLayout;