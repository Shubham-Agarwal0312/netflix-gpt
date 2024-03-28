import { BACKGROUND_IMAGE } from "../../../utility/constant";
import HeaderView from "../views/HeaderView";
import SignInOutView from "./views/SignInOutView";

const UserAccountLayout = () => {
    return (
        <div>
            <HeaderView />
            <img
                className="absolute h-full w-full"
                src={BACKGROUND_IMAGE}
                alt="background-image"
                />
            <SignInOutView />
        </div>
    );
};

export default UserAccountLayout;