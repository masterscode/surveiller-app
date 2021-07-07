import React, { useState } from "react";
import Routes from "./routes";

function App() {
  const [data, setData] = React.useState({});
  const fetchData = async ()=>{
    const response = await fetch("http://localhost:5000/actuator/beans");
    const responseData = await response.json();
    const {bean} = responseData.context.application;
    return bean;
  }
  React.useEffect(()=> {
    
    setData(data => fetchData());
  });

  return (
    <section>
      { }
      <Routes />
    </section>
  );
}

export default App;
