import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../../hooks/usePopularMovies";
import HeaderView from "../views/HeaderView";
import MainContainerLayout from "./mainContainer/MainContainerLayout";
import SecondaryContainerLayout from "./secondaryContainer/SecondaryContainerLayout";

const BrowserLayout = () => {

    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div>
            <HeaderView />
            <MainContainerLayout />
            <SecondaryContainerLayout />
        </div>
    );
};

export default BrowserLayout;