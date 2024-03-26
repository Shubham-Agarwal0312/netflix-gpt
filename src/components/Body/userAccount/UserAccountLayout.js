import HeaderView from "../views/HeaderView";
import SignInOutView from "./views/SignInOutView";

const UserAccountLayout = () => {
    return (
        <div>
            <HeaderView />
            <img
                className="absolute h-full w-full"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                alt="background-image"
                />
            <SignInOutView />
        </div>
    );
};

export default UserAccountLayout;