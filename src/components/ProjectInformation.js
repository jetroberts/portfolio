import React from 'react';

export default function ProjectInformation(props) {
    return (
        <div className='flex-grow m-3 w-5/6 text-gray-800'>
            <h1 className='mb-1 text-3xl text-gray-800'>{ props.projectName }</h1>
            <p className='p-2 text-gray-800 text-lg'>{ props.projectDescription }</p>
        </div>
    );
}
