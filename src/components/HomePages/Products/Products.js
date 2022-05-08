import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Product from "./Product/Product";

const Products = () => {
  const [{ computers }] = useProducts();
  return (
    <div className=" items-center mx-6">
      <div className=" grid gap-3 md:grid-cols-3">
        {computers?.slice(0, 6).map((computer) => (
          <Product key={computer?._id} product={computer}></Product>
        ))}
      </div>
      <div className=" flex justify-center md:mx-72 rounded-2xl my-3 p-2 bg-slate-600 items-center">
        <Link to="/inventory">See All</Link>
      </div>
    </div>
  );
};

export default Products;
