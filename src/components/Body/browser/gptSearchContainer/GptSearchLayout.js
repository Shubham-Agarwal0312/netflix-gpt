import React from 'react'
import GptSearchBarView from './GptSearchBarView';
import GptSearchPageView from './GptSearchPageView';
import { BACKGROUND_IMAGE } from '../../../../utility/constant';

const GptSearchLayout = () => {
    return (
        <div>
            <img
                className="absolute h-full w-full -z-10"
                src={BACKGROUND_IMAGE}
                alt="background-image"
            />
            <GptSearchBarView />
            <GptSearchPageView />
        </div>
    );
};

export default GptSearchLayout;
