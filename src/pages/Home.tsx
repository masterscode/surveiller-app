import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

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
    <div>
      hello world
    </div>
  );
};

export default Home;
