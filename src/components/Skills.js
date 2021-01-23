import React from 'react';
import SkillCards from "./SkillCards";

export default function Skills() {
    return (
        <div className='container flex-grow my-36'>

            <div className='container text-gray-800 text-center'>
                <h1 className='text-3xl pb-3'>Skills</h1>
                <div className='container flex mt-10'>

                    <SkillCards name='Tailwind CSS' img='/tailwind-css-logo.svg' />
                    <SkillCards name='React' img='/React-icon.png' />
                    <SkillCards name='Laravel' img='/Laravel.png' />

                </div>
            </div>
        </div>
    );
}


