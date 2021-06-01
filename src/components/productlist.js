import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Productcomponent from "./productcomponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

function Productlist() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchingProducts = async (e) => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    console.log(response);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchingProducts();
  }, []);
  console.log(products);
  return (
    <div className=" producttlist ui grid container">
      <Productcomponent />
    </div>
  );
}

export default Productlist;
