import React from 'react';

export default function About() {
    return (
        <div className='container flex-col justify-center content-center'>
            <h1 className='text-4xl text-gray-800 pb-5 border-b-2'>About</h1>
            <div className='flex my-2 md:my-4 justify-center'>
                <img className='object-contain p-2 md:w-1/3 rounded-3xl' src='./JoshPortrait500.png'
                     alt='test'/>
            </div>

            <div
                className='container flex flex-col md:flex-row p-7 justify-center items-center md:divide-x md:divide-gray-500'>
                <h1 className='p-2 md:w-1/3 text-4xl text-gray-800'>Who Am I?</h1>
                <p className='md:w-2/3 px-5 py-3 text-lg text-gray-800 text-center md:text-right'>I am a recent
                    mechanical engineering graduate but over the past 5 years have fallen in love with software
                    development. Since then I have spent as much time learning about programming as I can. I have a
                    solid understanding of programming concepts such as OOP and
                    MVC, and can confidently code in Python, Java, and JavaScript. More recently I have been teaching
                    myself to create websites, this portfolio is a simple React and TailwindCSS website, however, I have
                    also been developing a dynamic event management system using the Laravel framework.</p>
            </div>

            <div
                className='container flex flex-col md:flex-row p-7 justify-center items-center md:divide-x md:divide-gray-500'>
                <h1 className='p-2 md:w-1/3 text-4xl text-gray-800'>What am I reading?</h1>
                <p className='md:w-2/3 px-5 py-3 text-lg text-gray-800 text-center md:text-right'>
                    I enjoy literature about software development and have recently been enjoying "Clean Code" by Robert
                    C. Martin. Robert presents great insight in the best way to formulate your software and I would
                    recommend this to anyone looking to improve the readability of their code. I have also been
                    listening to "12 Rules for Life" by Jordan Peterson, it is a great book with some interesting ideas
                    wrapped in plenty of personal anecdotes, it's worth the listen.


                </p>
            </div>

            <div
                className='container flex flex-col md:flex-row p-7 justify-center items-center md:divide-x md:divide-gray-500'>
                <h1 className='p-2 md:w-1/3 text-4xl text-gray-800'>Interests and Hobbies</h1>
                <p className='md:w-2/3 px-5 py-3 text-lg text-gray-800 text-center md:text-right'>When I am not coding I
                    enjoying tinkering with
                    my computer, I am currently running a water cooled 8700K @ 5GHz on an Asrock Z370 Extreme4, 1070ti,
                    and 32GB of RAM @ 3000Mhz which helps when I am using Fusion 360, SolidWorks, or playing Apex. When
                    I'm not sat at my
                    desk I enjoy cycling and climbing.</p>
            </div>
        </div>
    );
}
