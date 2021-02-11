import ProjectLeft from "./components/ProjectLeft";
import React from "react";

export const projectData = [
    {
        projectName: 'Bug Tracker',
        projectDescription:
            'A new project that I am still developing using the ASP.NET framework and Bootstrap CSS. The ' +
            'aim is to create a website that can track bugs within a project and timeline their priority. ' +
            'Each project has assigned developers that are able to view the bugs within each project. I have recently ' +
            'defined the Bug; controller; model; and view thereby enabling a user to report a bug, edit exisiting bugs, ' +
            'and delete bugs. Next steps are to define the project model and restrict access to project approved users.',
        projectImg: './csharp.jpg'
    },
    {
        projectName: 'Portfolio Website',
        projectDescription: 'Using Tailwind CSS and React I was able to create a professional portfolio website.' +
            ' The website is an on-going project that I will continue to edit. ' +
            'Since I currently don\'t have access to a server then the website is static hosted on AWS, in the future ' +
            'I hope to add server-side logic such as a blog and \'Contact\' form. If you are interested in your own ' +
            'custom portfolio website then please get in touch!',
        projectImg: './tailwind-css-logo.svg'
    },
    {
        projectName: 'Event Storage',
        projectDescription: 'Currently in development, a web application that can store user events. The website is' +
            ' written in PHP using the Laravel framework. Each user is able to login and view their events, the aim is' +
            ' to allow tracking of important events such as moving house or exchanging contracts. Recently I have' +
            ' changed the \'Event\' model to include a UUID as not to expose the internal database auto-incrementing ID.',
        projectImg: './Laravel.png'
    },
    {
        projectName: 'Boid Simulation',
        projectDescription: 'A flock simulation written in JavaScript, each boid follows 3 rules, separation, alignment, ' +
            'and cohesion. When multiple boids are rendered they collectively resemble a flock of birds.',
        projectImg: './JavascriptLogo.png'
    },
    {
        projectName: 'Adhesive Joint Strength',
        projectDescription: 'My dissertation focussed on how to predict the strength of adhesive joints without having' +
            ' to run time consuming FEA simulations. Written in Python, the software was able to predict the Factor' +
            ' of Safety of the joint under a given load. The program featured a GUI and multi-threading. I would like ' +
            'to go back to this project at some point and refactor a large portion of the code base, upon reflection the ' +
            'code is not as readable as it could be',
        projectImg: './pythonLogo.png'
    },
    {
        projectName: 'Minecraft Plugin',
        projectDescription: 'Using Java I created a server plugin that allowed players to "ping" something they were' +
            ' looking at, this enabled communication amongst players who could not directly talk to one another.' +
            ' This was good practice in OOP and utilising an existing code base.',
        projectImg: './Java_logo_icon.png'
    }
]
