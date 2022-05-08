import React from "react";
import useProducts from "../../../hooks/useProducts";
import Product from "./Product/Product";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className=" grid gap-3 md:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
