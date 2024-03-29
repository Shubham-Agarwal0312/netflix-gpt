import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utility/constant';
import { addVideoTrailer } from '../utility/store/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getBackgroundVideo();
    }, []);

    const getBackgroundVideo = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const data = await response.json();
        const videoList = data.results;
        const trailerList = videoList.filter(ele => ele.type === 'Trailer');
        const movieTrailer = trailerList.length > 0 ? trailerList[0] : videoList[0];
        dispatch(addVideoTrailer(movieTrailer));
    }
};

export default useMovieTrailer;