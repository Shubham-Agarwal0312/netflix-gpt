import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utility/store/moviesSlice";
import { API_OPTIONS } from "../utility/constant";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    useEffect(() => {
        !upcomingMovies && getNewMovies();
    }, []);

    const getNewMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addUpcomingMovies(movies.results));
    }
}

export default useUpcomingMovies;