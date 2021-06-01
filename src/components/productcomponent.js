import React from "react";
import { useSelector } from "react-redux";

function Productcomponent() {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title } = products[0];
  console.log(products);
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <div className="content">
              <div className="header">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcomponent;
