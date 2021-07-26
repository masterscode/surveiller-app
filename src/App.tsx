import React, { useState } from "react";
import Routes from "./routes";

import './style/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <section className='rounded m-3 p-2 bg-gray-100 transition-all ease-in'>
      <Routes />
    </section>
  );
}

export default App;
