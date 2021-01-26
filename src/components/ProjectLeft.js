import React from 'react';
import ProjectInformation from "./ProjectInformation";
import ProjectImage from './ProjectImage';

export default function ProjectLeft(props) {
    return (
        <div className='flex h-48 my-5 justify-between shadow-card rounded-3xl'>
            <ProjectImage/>
            <ProjectInformation projectName={props.projectName} projectDescription={props.projectDescription}/>
        </div>

    );
}
