import React from 'react';

export default function SkillCards(props) {
    return (
        <div className='container flex-col mx-7 w-1/3 shadow-card rounded-xl transform hover:-translate-y-4 hover:shadow-raised transition-all duration-300'>

            <img className='h-32 mx-auto p-3' src={ props.img }
                 alt='tailwindcss'/>

            <h1 className='text-gray-800 text-2xl pb-3'>{ props.name }</h1>
        </div>
    );
}
