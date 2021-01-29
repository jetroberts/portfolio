import React from 'react';

export default function FrontPageImage() {
    return (
        <div className='invisible w-0 md:visible container flex md:w-1/2 max-h-3/4'>
            <img className='object-scale-down rounded-3xl p-2' src='./JoshPortrait500.png' alt='Coding'/>
        </div>
    );
}
