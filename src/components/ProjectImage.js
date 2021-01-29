import React from 'react';

export default function ProjectImage(props) {
    return (
        <div className='flex justify-center content-center w-1/3 md:w-1/6 md:h-28 m-4 p-1'>
            <img className='rounded-2xl object-scale-down bg-white' src={ props.projectImg } alt=''/>
        </div>

    );
}
