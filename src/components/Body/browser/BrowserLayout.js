import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../../hooks/usePopularMovies";
import HeaderView from "../views/HeaderView";
import GptSearchLayout from "./gptSearchContainer/GptSearchLayout";
import MainContainerLayout from "./mainContainer/MainContainerLayout";
import SecondaryContainerLayout from "./secondaryContainer/SecondaryContainerLayout";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../../hooks/useUpcomingMovies";
import PopupContainerLayout from "./popupContainer/PopupContainerLayout";
import TrailerPopupLayout from "./popupContainer/TrailerPopupLayout";

const BrowserLayout = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const gptSearch = useSelector(store => store.gpt?.gptSearchPageView);
    const isPopupOpen = useSelector(store => store.movies?.isPopup);
    const isTrailerPopup = useSelector(store => store.movies?.isTrailerPopup);

    return (
        <div>
            <HeaderView />
            {
                isPopupOpen && <PopupContainerLayout />
            }
            {
                (!isPopupOpen && isTrailerPopup) && <TrailerPopupLayout /> 
            }
            <div className={`${(isPopupOpen || isTrailerPopup) && "fixed"}`}>
            {
                gptSearch 
                ?   <GptSearchLayout /> 
                : <>
                    <MainContainerLayout />
                    <SecondaryContainerLayout />
                </>
            }
            </div>
            
        </div>
    );
};

export default BrowserLayout;