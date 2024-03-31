import React from 'react';
import MovieCardView from './MovieCardView';
import './MovieListView.css';

const MovieListView = ({movieType, movies}) => {
    return (
        <div className='pl-12 pt-8'>
            <h1 className='text-xl text-white text-bold'>{movieType}</h1>
            <div id="hide-scroll" className='flex overflow-x-auto pt-2'>
                <div className='flex'>
                    {
                        movies && movies.map((ele, index) => {
                            return <MovieCardView posterKey={ele.poster_path} key={ele.id} />
                        } )
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieListView;
