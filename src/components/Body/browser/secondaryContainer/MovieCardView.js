import React from 'react'
import { POSTER_URL } from '../../../../utility/constant';

const MovieCardView = ({posterKey}) => {
    return (
        <div className='w-36 pr-4'>
            <img 
                src={POSTER_URL + posterKey} 
                alt='poster'
            />
        </div>
    );
};

export default MovieCardView;
