import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utility/store/moviesSlice";
import { API_OPTIONS } from "../utility/constant";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    useEffect(() => {
        !topRatedMovies && getNewMovies();
    }, []);

    const getNewMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addTopRatedMovies(movies.results));
    }
}

export default useTopRatedMovies;