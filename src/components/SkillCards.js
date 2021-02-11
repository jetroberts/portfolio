import React from 'react';
import { Link } from 'react-router-dom';

export default function SkillCards(props) {
    return (
        <div className='container flex-col m-4 w-3/4 md:w-1/4 shadow-card rounded-xl transform hover:-translate-y-4 hover:shadow-raised transition-all duration-300'>

            <img className='object-scale-down h-32 mx-auto p-3' src={ props.img }
                 alt='tailwindcss'/>

            <Link to='/projects'><h1 className='text-gray-800 text-2xl pb-3 hover:text-yellow-700'>{ props.name }</h1></Link>
        </div>
    );
}
