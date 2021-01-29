import React from 'react';
import ProjectInformation from "./ProjectInformation";
import ProjectImage from './ProjectImage';

export default function ProjectLeft(props) {
    return (
        <div className='flex flex-col items-center md:flex-row md:pb-6 mt-3'>
            <ProjectImage projectImg={ props.projectImg }/>
            <ProjectInformation projectName={props.projectName} projectDescription={props.projectDescription} />
        </div>
    );
}
