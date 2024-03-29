import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitleView from './VideoTitleView';
import VideoBackgroundView from './VideoBackgroundView';

const MainContainerLayout = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie;
  console.log('mainMovie = ', mainMovie);

  return (
    <div className=''>
      <VideoTitleView title={original_title} overview={overview} />
      <VideoBackgroundView movieId={id} />
    </div>
  );
};

export default MainContainerLayout;
