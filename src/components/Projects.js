import React from 'react';
import ProjectLeft from './ProjectLeft';

export default function Projects() {
    return (

        <div className='container flex flex-col justify-center lg:w-3/4  mx-auto'>
            <h1 className='text-4xl text-gray-800 pb-4 border-b-2'>Projects</h1>

            <ProjectLeft projectName='Bug Tracker'
                         projectDescription='A new project that I am still developing using the ASP.NET framework and Bootstrap CSS. The aim is to create a website that can track bugs within a project and timeline their priority. Each project has assigned developers that are able to view the bugs within each project.'
                         projectImg='./csharp.jpg'/>
            <ProjectLeft projectName='Portfolio Website'
                          projectDescription='Using Tailwind CSS and React I was able to create a professional portfolio website. If you are interested in your own custom portfolio website then please get in touch!'
                          projectImg='./tailwind-css-logo.svg'/>
            <ProjectLeft projectName='Event Storage'
                         projectDescription='Currently in development, a web application that can store user events. The website is written in PHP using the Laravel framework. Each user is able to login and view their events, the aim is to allow tracking of important events such as moving house or exchanging contracts.'
                         projectImg='./Laravel.png'/>
            <ProjectLeft projectName='Boid Simulation'
                          projectDescription='A flock simulation written in JavaScript, each boid follows 3 rules, separation, alignment, and cohesion. When multiple boids are rendered they collectively resemble a flock of birds.'
                          projectImg='./JavascriptLogo.png'/>
            <ProjectLeft projectName='Adhesive Joint Strength'
                         projectDescription='My dissertation focussed on how to predict the strength of adhesive joints without having to run time consuming FEA simulations. Written in Python, the software was able to predict the Factor of Safety of the joint under a given load. The program featured a GUI and multi-threading.'
                         projectImg='./pythonLogo.png'/>
            <ProjectLeft projectName='Minecraft Plugin'
                         projectDescription='Using Java I created a server plugin that allowed players to "ping" something they were looking at, this enabled communication amongst players who could not directly talk to one another.'
                         projectImg='./Java_logo_icon.png'/>
        </div>
    );
}
