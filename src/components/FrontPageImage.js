import React from 'react';

export default function FrontPageImage() {
    return (
        <div className='container flex w-1/2'>
            <img className='object-cover rounded-3xl p-2' src={process.env.PUBLIC_URL + '/coding.png'} alt='Coding'/>
        </div>
    );
}
