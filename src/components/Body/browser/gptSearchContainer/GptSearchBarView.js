import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../../../../utility/languageConstant';

const GptSearchBarView = () => {
    const langKey = useSelector(store => store.config?.lang);

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='bg-black h-20 w-1/2 grid grid-cols-12'>
                <input
                    className='h-12 pl-2 m-4 col-span-9'
                    type='search' 
                    placeholder={lang[langKey].searchPlaceholder}
                />
                <button className='h-12 m-4 bg-red-800 rounded-lg col-span-3 text-white text-lg text-bold'>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBarView;
