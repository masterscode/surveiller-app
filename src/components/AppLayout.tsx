import React, { ReactChildren } from 'react';
import { AppInfo } from './AppInfo';

export const AppLayout = (props:ReactChildren) => {
    return (
        <section className="md:flex justify-evenly h-screen">
          <div className="bg-white  shadow w-full rounded  overflow-y-scroll">
             <AppInfo />
            
            {props}
            
          </div>
        </section>
      );
}
