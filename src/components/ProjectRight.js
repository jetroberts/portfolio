import React from 'react';
import ProjectInformation from "./ProjectInformation";
import ProjectImage from './ProjectImage';

export default function ProjectRight(props) {
    return (
        <div className='flex h-48 my-16 justify-between rounded-3xl'>
            <ProjectInformation projectName={ props.projectName } projectDescription={ props.projectDescription }/>
            <ProjectImage projectImg={ props.projectImg }/>
        </div>
    );
}
