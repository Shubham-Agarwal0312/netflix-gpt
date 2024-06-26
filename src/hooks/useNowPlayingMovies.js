import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utility/store/moviesSlice";
import { API_OPTIONS } from "../utility/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    useEffect(() => {
        !nowPlayingMovies && getNewMovies();
    }, []);

    const getNewMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addNowPlayingMovies(movies.results));
    }
}

export default useNowPlayingMovies;