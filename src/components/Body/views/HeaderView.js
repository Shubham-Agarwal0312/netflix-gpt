import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../utility/firebaseSetup";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../../utility/store/userSlice";
import { useEffect } from "react";
import { LANG_OPTIONS, LOGO } from "../../../utility/constant";
import { toggleGptSearchView } from "../../../utility/store/gptSlice";
import { setLanguage } from "../../../utility/store/configSlice";
import lang from "../../../utility/languageConstant";

const HeaderView = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const gptSearch = useSelector(store => store.gpt?.gptSearchPageView);

    const handleSignOutClick = () => {
        
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({
                    uid: uid, 
                    email: email, 
                    displayName: displayName, 
                    photoURL: photoURL
                }));
                navigate("/browser");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        
        return () => unsubscribe();
    },[]);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLangChangeClick = (e) => {
        const lang = e.target.value;
        dispatch(setLanguage(lang));
    }

    return (
        <div className="h-20 w-full fixed bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="h-16 pl-8"
                alt="logo"
                src={LOGO}
            />
            { user &&
                <>
                    
                    <div className="h-20 flex">
                        {gptSearch && 
                            <select 
                                className="h-12 mr-4 mt-4 px-8 text-white bg-black rounded-lg" 
                                onChange={(e) => {handleLangChangeClick(e)}}
                            >
                                {LANG_OPTIONS.map((ele) => <option key={ele.id} value={ele.id}>{ele.name}</option>)}
                            </select>
                        }
                        
                        <button
                            onClick={() => {handleGptSearchClick()}}
                            className="h-12 mt-4 px-8 text-white bg-purple-600 rounded-lg"
                        >
                            {gptSearch ? "Home Page" : "GPT Search"}
                        </button>
                        <img 
                            className="h-12 w-12 m-4"
                            alt="Sign-Out-logo"
                            src={user?.photoURL}
                        />
                        <button 
                            className="text-bold text-white my-auto mr-4"
                            onClick={() => {handleSignOutClick()}}
                        >
                            (Sign Out)
                        </button>
                    </div>
                </>
                
            }
        </div>
    );
};

export default HeaderView;