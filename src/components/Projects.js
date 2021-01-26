import React from 'react';
import ProjectRight from './ProjectRight';
import ProjectLeft from './ProjectLeft';

export default function Projects() {
    return (
        <div>
            <ProjectRight projectName='Portfolio Website'
                          projectDescription='Using Tailwind CSS and React I was able to create a professional portfolio website.'/>
            <ProjectLeft projectName='Event Storage'
                         projectDescription='Currently in development, a web application that tracks events. The website is written in PHP using the Laravel framework. Each user is able to login and view their events, the aim is to allow tracking of important events such as moving house or exchanging contracts.'/>
            <ProjectRight/>
            <ProjectLeft/>
            <ProjectRight/>
        </div>
    );
}
