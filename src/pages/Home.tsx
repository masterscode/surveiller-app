import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

type ActuatorLinks = {
  title: string;
  href: string;
  templated: boolean;
};

type P = {};

const Home = () => {
  const [data, setData] = useState<ActuatorLinks[]>([]);

  const fetchData = () => {
    let result: ActuatorLinks[] = [];
    fetch("http://localhost:5000/actuator")
      .then((data) => data.json())
      .then((data) => {
        for (let entry of Object.entries(data._links)) {
          const [title, { href, templated }] = entry;
          //#ERROR Property 'href', 'templated' does not exist on type 'unknown'
          result.push({ title, href, templated });
        }
      })
      .catch((error) => console.log(error));

    setData((data) => result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   return (
  //     <Card >
  //     <CardContent>
  //       <Typography color="textSecondary" gutterBottom>
  //         Word of the Day
  //       </Typography>
  //       <Typography variant="h5" component="h2">
  //         {/* be{bull}nev{bull}o{bull}lent */}
  //       </Typography>
  //       <Typography color="textSecondary">
  //         adjective
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         well meaning and kindly.
  //         <br />
  //         {'"a benevolent smile"'}
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small">Learn More</Button>
  //     </CardActions>
  //   </Card>
  //   )

  return (
    <div>
        <Button color='primary'>some button</Button>
      {data.map((obj, index: number) => (
        <Button key={index} variant='outlined' color='primary'>{obj.title} </Button>
      ))}
    </div>
  );
};

export default Home;
