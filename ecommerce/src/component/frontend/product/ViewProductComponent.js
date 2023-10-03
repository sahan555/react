import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCardComponent from "./ProductCardComponent";

function ProductViewComponent() {
  // use useEffect to get the data from the backend

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/get")
      .then((response) => {
        console.log(response);
        // console.log(response.data);
        // console.log(response.data.products);
        setProduct(response.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      {products?.map((product) => (
        <ProductCardComponent
          id={product._id}
          name={product.name}
          price={product.price}
          description={product.description}
          quantity={product.quantity}
          category={product.category ? product.category.name : ''}
          image={product.productImg}
        />
      ))}
    </>
  );
}
export default ProductViewComponent;