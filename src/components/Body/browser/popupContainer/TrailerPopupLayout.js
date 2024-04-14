import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTrailerPopup } from '../../../../utility/store/moviesSlice';
import usePopupMovieTrailer from '../../../../hooks/usePopupMovieTrailer';

const TrailerPopupLayout = () => {

    const dispatch = useDispatch();
    const trailerId = useSelector(store => store.movies?.popupTrailerId);
    usePopupMovieTrailer(trailerId);
    const trailer = useSelector(store => store.movies?.popupVideoTrailer);

    const handleTrailerCloseBtn = () => {
        dispatch(toggleTrailerPopup(false));
    }

    return (
        <div className='w-screen absolute z-50'>
            <div className='relative flex justify-center'>
                <div className='w-screen min-h-screen absolute bg-black opacity-50' />
                <div className='w-[calc(100vw-200px)] absolute bg-black'>
                    <div className='flex justify-end mr-24 mt-12'>
                        <button 
                            className='text-white font-bold font-4xl'
                            onClick={() => {handleTrailerCloseBtn()}}
                        >
                            X
                        </button>
                    </div>
                    {/* <div className='text-white text-4xl font-bold mx-auto my-24 flex justify-center'>
                        popupTitle
                    </div> */}
                    <div className='w-[calc(100vw-200px)] h-screen'>
                        <iframe 
                            className='w-[calc(100vw-200px)] h-screen'
                            src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerPopupLayout;
