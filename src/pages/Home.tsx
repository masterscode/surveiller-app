import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { AppInfo } from "../components/AppInfo";
import { ActuatorEndpoint } from "../components/ActuatorEndpoint";
import { ActuatorLink } from '../@types/types';
import { fetchBaseActuatorLinks } from "../services/home";


const Home = () => {
  const [data, setData] = useState<ActuatorLink[]>([]);
  const excludeEndpoints:string[] = ['caches-cache','health','heapdump','self','health-path', 'shutdown','loggers-name', 'metrics-requiredMetricName','env-toMatch'];

  const getActuatorLinks = async ()=>{
    const resolvedLinks:ActuatorLink[] = await fetchBaseActuatorLinks();
    setData(resolvedLinks);
  }

  useEffect(() => {
    getActuatorLinks();
  }, []);

  return (
    <section className="md:flex justify-evenly h-screen">
      <div className="bg-white  shadow w-full rounded  overflow-y-scroll">
         <AppInfo />
        
        <section className='p-1 border-t border-b'>
          {data.filter(d => !excludeEndpoints.includes(d.title))
          .map((link, index:number)=>( <ActuatorEndpoint key={index} {...link}/>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Home;
