import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utility/store/moviesSlice";
import { API_OPTIONS } from "../utility/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getNewMovies();
    }, []);

    const getNewMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addPopularMovies(movies.results));
    }
}

export default usePopularMovies;