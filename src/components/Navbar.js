import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='container flex justify-between mx-auto pt-10 pb-20 w-10/12'>
                <h1 className='text-6xl font-mono font-bold text-gray-800'>
                    <Link to="/">JR</Link>
                </h1>
                <div className='flex items-center divide-x divide-gray-400 text-gray-700'>
                    <span className="text-lg px-6">
                        <Link to='/about'>About</Link>
                    </span>
                    <span className="text-lg px-6">
                        <Link to="/projects">Projects</Link>
                    </span>
                    <span className="text-lg pl-6">
                        <Link to="/contact">Contact</Link>
                    </span>
                </div>
        </div>
    );
}


