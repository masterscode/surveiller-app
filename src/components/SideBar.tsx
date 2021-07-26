import React from 'react'
import { NavItem } from './NavItem'

export const SideBar = () => {
    const items = [
        {icon:'house', link:'dashboard'},
        {icon:'currency-dollar', link:'donate'},
        {icon:'key', link:'authentication'},
    ]
    return (
        <section className='rounded bg-gray-100 p-3'>
            {/* logo start */}
            
            <div className='rounded bg-white mb-3 p-5 w-56 font-extrabold capitalize text-gray-700'>
                logo here
            </div>
            {/* logo end */}

            {/* user card start */}
            <div className='rounded flex flex-col p-5 justify-center items-center  bg-white'>
                <div className=' grid place-items-center'>
                    <i className="bi-person-circle  text-6xl"></i>
                </div>
                <p className='font-light text-lg text-gray-500 capitalize my-3' >app name</p>
            </div>
            {/* user card end */}

            <div className='_links p-2 my-3'>
                {items.map(({icon, link}, index)=> <NavItem key={index} link={link} icon={icon} />)}
            </div>

            <div className='mt-auto'>
                <NavItem icon='upload' link='logout' />
            </div>

        </section>
    )
}
