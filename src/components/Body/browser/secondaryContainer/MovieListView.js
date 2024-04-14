import React from 'react';
import MovieCardView from './MovieCardView';
import './MovieListView.css';
import { useDispatch } from 'react-redux';
import { addPopupMovies, addPopupTitle, toggleShowPopup } from '../../../../utility/store/moviesSlice';

const MovieListView = ({movieType, movies}) => {
    const dispatch = useDispatch();

    const handleShowPopup = () => {
        dispatch(toggleShowPopup(true));
        dispatch(addPopupTitle(movieType));
        dispatch(addPopupMovies(movies));
    }
    return (
        <div className='pl-12 pt-8'>
            <h1
                id="movieListView_movieType"
                className='text-xl text-white text-bold cursor-pointer inline-block'
                onClick={() => {handleShowPopup()}}
            >
                {movieType}
            </h1>
            <h1 
                id="movieListView_exploreAll" 
                className='text-green-600 font-bold cursor-pointer'
            >
                &gt; Explore All
            </h1>
            
            <div id="hide-scroll" className='flex overflow-x-auto pt-2'>
                <div className='flex'>
                    {
                        movies && movies.map((ele, index) => {
                            return <MovieCardView posterKey={ele.poster_path} movieId={ele.id} key={ele.id} />
                        } )
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieListView;
