import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../../hooks/usePopularMovies";
import HeaderView from "../views/HeaderView";
import GptSearchLayout from "./gptSearchContainer/GptSearchLayout";
import MainContainerLayout from "./mainContainer/MainContainerLayout";
import SecondaryContainerLayout from "./secondaryContainer/SecondaryContainerLayout";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../../hooks/useUpcomingMovies";

const BrowserLayout = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const gptSearch = useSelector(store => store.gpt?.gptSearchPageView);

    return (
        <div>
            <HeaderView />
            {
                gptSearch 
                ?   <GptSearchLayout /> 
                : <>
                    <MainContainerLayout />
                    <SecondaryContainerLayout />
                </>
            }
            
            
        </div>
    );
};

export default BrowserLayout;