import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../utility/firebaseSetup";
import { useSelector } from "react-redux";
import { appStore } from "../../../utility/store/appStore";

const HeaderView = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOutClick = () => {
        
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    return (
        <div className="h-20 w-full fixed bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="h-20"
                alt="logo"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            />
            { user &&
                <div className="h-20 flex justify-between">
                    <img 
                        className="h-12 w-12 m-4"
                        alt="Sign-Out-logo"
                        src={user?.photoURL}
                        // src="https://p7.hiclipart.com/preview/918/229/200/computer-icons-login-logo-logout-thumbnail.jpg"
                    />
                    <button 
                        className="text-bold text-white my-auto mr-4"
                        onClick={() => {handleSignOutClick()}}
                    >
                        (Sign Out)
                    </button>
                </div>
            }
        </div>
    );
};

export default HeaderView;