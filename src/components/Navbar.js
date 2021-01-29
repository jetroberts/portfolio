import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='container flex justify-between mx-auto pt-10 pb-5 w-10/12'>
                <h1 className='text-6xl font-mono font-bold text-gray-800'>
                    <Link to="/">JR</Link>
                </h1>
                <div className='flex items-center divide-x divide-gray-400 text-gray-700'>
                    <span className="md:text-lg px-3 md:px-6 hover:text-yellow-700">
                        <Link to='/'>Home</Link>
                    </span>
                    <span className="md:text-lg px-3 md:px-6 hover:text-yellow-700">
                        <Link to='/about'>About</Link>
                    </span>
                    <span className="text-sm md:text-lg px-3 md:px-6 hover:text-yellow-700">
                        <Link to="/projects">Projects</Link>
                    </span>
                </div>
        </div>
    );
}


