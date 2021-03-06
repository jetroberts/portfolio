import React from 'react';

export default function Footer() {
    return (
        <footer className='footer fixed bottom-0 bg-white w-full left-0 py-1'>
            <div className='flex justify-center py-4 divide-x divide-gray-400'>

                <a href='https://www.linkedin.com/in/joshuaetroberts' className='text-xl px-5 hover:text-yellow-700'>LinkedIn</a>
                <a href='https://www.facebook.com/JoshuaEdwinTudorRoberts' className='text-xl px-5 hover:text-yellow-700'>Facebook</a>
                <a href='https://www.instagram.com/jet1998/' className='text-xl px-5 hover:text-yellow-700'>Instagram</a>
            </div>
        </footer>
    );
}
