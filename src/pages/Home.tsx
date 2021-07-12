import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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
    fetchData();
  }, []);

  return (
    <div>
      {data.map(({ title, href, templated }, index: number) => (
        <ButtonGroup key={index}>
          <Button variant="outlined" color="primary" size="small">
            {title}
          </Button>
          <Button>{templated ? "true" : "false"}</Button>
        </ButtonGroup>
      ))}
    </div>
  );
};

export default Home;
