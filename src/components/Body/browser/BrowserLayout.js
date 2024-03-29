import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import HeaderView from "../views/HeaderView";
import MainContainerLayout from "./mainContainer/MainContainerLayout";

const BrowserLayout = () => {

    useNowPlayingMovies();

    return (
        <div>
            <HeaderView />
            <MainContainerLayout />
        </div>
    );
};

export default BrowserLayout;