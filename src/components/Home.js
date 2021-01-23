import ImageChange from './ImageChange';
import Introduction from "./Introduction";
import Skills from "./Skills";
import React from "react";

export default function Home() {
    return (
        <div className='container flex-col h-full'>
            <div className='container flex'>
                <Introduction/>
                <ImageChange/>
            </div>
            <Skills/>
        </div>

    )
}
