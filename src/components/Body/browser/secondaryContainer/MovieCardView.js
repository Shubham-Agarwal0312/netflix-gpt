import React from 'react'
import { POSTER_URL } from '../../../../utility/constant';
import { useDispatch } from 'react-redux';
import { addPopupTrailerId, toggleTrailerPopup } from '../../../../utility/store/moviesSlice';

const MovieCardView = ({posterKey, movieId}) => {

    const dispatch = useDispatch();

    const showMovieTrailer = () => {
        dispatch(toggleTrailerPopup(true));
        dispatch(addPopupTrailerId(movieId));
    }
    
    return (
        <div className='w-48 pr-4 mb-4 transition-transform duration-300 hover:scale-110'>
            <img 
                src={POSTER_URL + posterKey} 
                alt='poster'
                onClick={() => {showMovieTrailer()}}
            />
        </div>
    );
};

export default MovieCardView;
