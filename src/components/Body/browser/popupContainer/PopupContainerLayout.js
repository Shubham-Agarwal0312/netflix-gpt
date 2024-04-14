import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPopupMovies, addPopupTitle, toggleShowPopup } from '../../../../utility/store/moviesSlice';
import MovieCardView from '../secondaryContainer/MovieCardView';

const PopupContainerLayout = () => {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies?.popupMovies);
    const popupTitle = useSelector(store => store.movies?.popupTitle);
    const handleCloseBtn = () => {
        dispatch(toggleShowPopup(false));
        dispatch(addPopupTitle(''));
        dispatch(addPopupMovies(null));
    }
    return (
        <div className='w-screen absolute z-50'>
            <div className='relative flex justify-center'>
                <div className='w-screen min-h-screen absolute bg-black opacity-50' />
                <div className='w-[calc(100vw-200px)] absolute bg-black'>
                    <div className='flex justify-end mr-24 mt-12'>
                        <button 
                            className='text-white font-bold font-4xl'
                            onClick={() => {handleCloseBtn()}}
                        >
                            X
                        </button>
                    </div>
                    <div className='text-white text-4xl font-bold mx-auto my-24 flex justify-center'>
                        {popupTitle}
                    </div>
                    <div className='ml-16 pt-2'>
                        <div className='flex flex-wrap'>
                            {
                                movies && movies.map((ele, index) => {
                                    return <MovieCardView posterKey={ele.poster_path} key={ele.id} />
                                } )
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PopupContainerLayout;
