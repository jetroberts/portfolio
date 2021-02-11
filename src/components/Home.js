import Introduction from "./Introduction";
import Skills from "./Skills";
import React from "react";
import FrontPageImage from "./FrontPageImage";

export default function Home() {
    return (
        <div className='container flex-col pb-7'>
            <div className='container flex'>
                <Introduction/>
                <FrontPageImage />
            </div>
            <Skills/>
        </div>

    )
}
