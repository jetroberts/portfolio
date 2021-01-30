import React from 'react';

export default function Footer() {
    return (
        <div className='container my-5 static bottom-0'>
            <div className='flex justify-center pb-4 divide-x divide-gray-400'>

                <a href='https://www.linkedin.com/in/joshuaetroberts' className='text-xl px-5 hover:text-yellow-700'>LinkedIn</a>
                <a href='https://www.facebook.com/JoshuaEdwinTudorRoberts' className='text-xl px-5 hover:text-yellow-700'>Facebook</a>
                <a href='https://www.instagram.com/jet1998/' className='text-xl px-5 hover:text-yellow-700'>Instagram</a>
            </div>
        </div>
    );
}
