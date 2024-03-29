import React from 'react'
import MovieListView from './MovieListView';
import { useSelector } from 'react-redux';

const SecondaryContainerLayout = () => {
    const movies = useSelector(store => store.movies);
    return (
        <div className='bg-black'>
            {
                movies && 
                <div className='-mt-[220px] relative z-10'>
                    <MovieListView movieType="Now Playing Movies" movies={movies?.nowPlayingMovies} />
                    <MovieListView movieType="Popular Movies" movies={movies?.popularMovies} />
                    <MovieListView movieType="Top Rated Movies" movies={movies?.nowPlayingMovies} />
                    <MovieListView movieType="Upcoming Movies" movies={movies?.nowPlayingMovies} />
                </div>
                
            }
        </div>
    );
};

export default SecondaryContainerLayout;
