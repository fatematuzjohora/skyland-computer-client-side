import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Product from "./Product/Product";

const Products = () => {
  const [{ mobiles }] = useProducts();
  return (
    <div>
      <div className=" grid gap-3 md:grid-cols-3">
        {mobiles?.slice(0, 6).map((mobile) => (
          <Product key={mobile?._id} product={mobile}></Product>
        ))}
      </div>
      <div className=" flex justify-center md:mx-72 rounded-2xl my-3 p-2 bg-slate-600 items-center">
        <Link to="/inventory">See All</Link>
      </div>
    </div>
  );
};

export default Products;
