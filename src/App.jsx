import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import Services from "./Component/Services/Services";
import Award from "./Component/Award/Award";
import Delivery from "./Component/Delivery/Delivery";
import Clients from "./Component/Clients/Clients";
import Message from "./Component/Message/Message";
import Contact from "./Component/Contact/Contact";
import Subscribe from "./Component/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Award />
      <Delivery />
      <Clients />
      <Message />
      <Contact />
      <Subscribe />
    </>
  );
}

export default App;
