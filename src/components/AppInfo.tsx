import React from 'react';
import { useLocation } from 'react-router';


export const AppInfo = () => {
    const location:string = useLocation().pathname.replace('/','')
    const appName = location.length <= 0 ? 'surveillerApp':location;

    return (
        <section className='capitalize bg-gray-50'>
            <header className='flex items-center justify-between bg-gray-900 text-white text-lg font-medium p-3'>
                <div>
                    <img src="#" alt="logo here" />
                </div>
                <div>
                    select variant : <span className='text-grey-400 lowercase text-gray-500'> null</span>
                </div>
            </header>
            {/* basic app infos here */}
            <div className='py-7 px-3'>
                <div className='text-4xl capitalize text-gray-800 font-semibold'>{appName}</div>
                <small className='font-mono text-gray-700 text-xs'>[ Base Url: http://  ]</small>
            </div>
            {/* basic app infos end */}

            {/* basic end point infos here */}
            <div className='rounded border  m-1 p-3 flex items-center justify-center'>
                placeholder content
            </div>
            {/* basic app infos here */}
        </section>
    )
}
