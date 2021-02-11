import React from 'react';
import { Link } from 'react-router-dom';
import SkillCards from "./SkillCards";

export default function Skills() {
    return (
        <div className='container flex-grow my-3 md:my-24'>

            <div className='container text-gray-800 text-center'>
                <h1 className='text-3xl'>Quick Skills</h1>
                <div className='container flex flex-col items-center justify-center md:flex-row mt-10'>

                    <SkillCards name='Tailwind CSS' img='/tailwind-css-logo.svg' />
                    <SkillCards name='React' img='/React-icon.png' />
                    <SkillCards name='Laravel' img='/Laravel.png' />

                </div>
            </div>
        </div>
    );
}


