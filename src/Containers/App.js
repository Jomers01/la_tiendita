import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Products/Product";
import Slider from "../Components/Slider/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Product />
    </div>
  );
};

export default App;
