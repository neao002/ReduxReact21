import React from "react";
import { useSelector } from "react-redux";
import Productcomponent from "./productcomponent";

function Productlist() {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div className=" producttlist ui grid container">
      <Productcomponent />
    </div>
  );
}

export default Productlist;
