import { Card } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { name, image, price, quantity, description, Suplier } = product;
  return (
    <div>
      <Card className="max-w-sm">
        <img className=" h-80 p-3 rounded-2xl" src={image} alt="" />
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <span className="text-2xl font-bold">Name:</span> {name}
        </h5>
        <div className="flex justify-between">
          <h5>
            <span className=" text-xl font-semibold">Price:</span>
            {price}
          </h5>
          <h5>
            <span className=" text-xl font-semibold">Quantity:</span>
            {quantity}
          </h5>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span>Description:</span>
          <br />
          {description}
        </p>
        <h3>
          {" "}
          <span className=" text-lg font-medium">Suplier:</span>
          {Suplier}
        </h3>
        <button
          onClick={() => navigate(`/inventory/${product._id}`)}
          className="bg-[#FF5400] hover:bg-[#FF4400] text-white w-[100%]  rounded-md py-2"
        >
          MANAGE
        </button>
      </Card>
    </div>
  );
};

export default Product;
