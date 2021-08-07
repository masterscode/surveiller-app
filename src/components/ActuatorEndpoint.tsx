import React from 'react';
import {Link} from 'react-router-dom'
interface EndpointProps{
    title:string;
    href:string;
    templated:boolean
}
export const ActuatorEndpoint = ({title, href, templated}:EndpointProps) => {
    const split:string[] = href.split('/');
    const link = split[split.length - 1];
    const borderCSS:string = templated ? 'border border-green-300' :'border border-yellow-300';
    return (
        <Link to={link} className={`bg-gray-100 hover:bg-gray-50 flex items-center justify-start my-2 w-auto p-3 ${borderCSS}`}>
          <div className='text-3xl font-semibold capitalize'>{title.replaceAll('-', ' ')}</div>
          <small className='mx-4'>templated: <span className='rounded-full px-4 p-2 bg-gray-300 '>{ templated ? 'true':'false'}</span></small>
        </Link>
    )
}
