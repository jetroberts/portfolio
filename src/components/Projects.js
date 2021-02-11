import React from 'react';
import ProjectLeft from './ProjectLeft';
import {projectData} from '../projectData';

export default function Projects() {
    return (
        <div className='container flex flex-col justify-center lg:w-3/4 mx-auto pb-12 md:pb-7'>
            <h1 className='text-4xl text-gray-800 pb-4 border-b-2'>Projects</h1>
            {projectData.map((data, key) => {
                return (
                    <ProjectLeft projectName={data.projectName} projectDescription={data.projectDescription}
                                 projectImg={data.projectImg}/>
                );
            })}
                </div>
                );
            };
