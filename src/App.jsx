import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import Services from "./Component/Services/Services";
import Award from "./Component/Award/Award";
import Delivery from "./Component/Delivery/Delivery";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Award />
      <Delivery />
    </>
  );
}

export default App;
