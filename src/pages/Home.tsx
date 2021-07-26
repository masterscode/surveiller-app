import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { SideBar } from "../components/SideBar";

type ActuatorLink = {
  title: string;
  href: string;
  templated: boolean;
};

type ActuatorLinks = [title: string, o: { href: string; templated: boolean }];

const Home = () => {
  const [data, setData] = useState<ActuatorLink[]>([]);

  const fetchData = async () => {
    let result: ActuatorLink[] = [];
    try {
      const response = await axios.get("http://localhost:5000/actuator");
      const responseData = (await Object.entries(
        response.data._links
      )) as unknown as ActuatorLinks[];

      for (let link of responseData) {
        const [title, { href, templated }] = link;
        result.push({ title, href, templated });
      }

      setData((o) => result);
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <section className="md:flex justify-evenly h-screen overflow-y-hidden">
      <SideBar />

      <div className="bg-white shadow w-full rounded p-3 grid md:grid-cols-5 md:grid-rows-5 overflow-y-scroll">
        <div className="col-span-full rounded md:border ">
          <div className="search-box border p-3 rounded active:border-8 text-lg m-1 flex ">
            <input
              type="search"
              // value=""
              className="outline-none w-full"
              placeholder="Search Here"
            />
            <i className="bi-search text-gray-700"></i>
          </div>
        </div>
        <div className="bg-gray-100 rounded w-auto p-3">card</div>
      </div>
    </section>
  );
};

export default Home;
