import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ManageComputer = () => {
  const [computer, setComputer] = useState([]);
  const { inventoryId } = useParams();
  // const [quantity, setQuantity] = useState(0);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch(`https://ns-computer-house.herokuapp.com/computers/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setComputer(data));
  }, [inventoryId, refresh]);

  const handleAdd = (e) => {
    e.preventDefault();
    const q = e.target.quantity.value;

    const name = computer.name;
    const supplier = computer.supplier;
    const price = computer.price;
    const quantity = computer.quantity + Number(q);
    console.log(quantity);
    const description = computer.description;
    const image = computer.image;

    const updatedComputer = {
      name,
      supplier,
      price,
      quantity,
      description,
      image,
    };

    fetch(`https://ns-computer-house.herokuapp.com/computers/${computer._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedComputer),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setRefresh(refresh + 1);
    e.target.reset();
    toast.success("Added success");
  };

  const handleDelivered = (id) => {
    const procced = window.confirm("Are you sure?");

    if (procced) {
      const name = computer.name;
      const supplier = computer.supplier;
      const price = computer.price;
      const quantity = computer.quantity - 1;
      const description = computer.description;
      const image = computer.image;

      const updatedComputer = {
        name,
        supplier,
        price,
        quantity,
        description,
        image,
      };

      fetch(`https://ns-computer-house.herokuapp.com/computers/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedComputer),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      setRefresh(refresh + 1);
      toast.success("Delivery success");
    }
  };
  return (
    <div className="grid md:grid-cols-2 w-[50%] mx-auto bg-gray-100 my-10 border-2 shadow-md">
      <Helmet>
        <title>Stock - In Showroom</title>
      </Helmet>
      <div>
        <img className="w-full h-full" src={computer.image} alt="" />
      </div>
      <div className="p-4">
        <h1 className="border-l-2 my-4 border-[#FF5400] pl-2 font-bold">
          {computer.name}
        </h1>
        <h1 className="font-bold">supplier: {computer.supplier}</h1>
        <p className="my-2">{computer.description}</p>
        <div className="flex justify-between my-3">
          <p className="font-bold mt-1">
            Price: <span className="text-[#FF5400]">${computer.price}</span>
          </p>
          <p className="font-bold">Quantity: {computer.quantity}</p>
        </div>
        <form onSubmit={handleAdd} className="flex">
          <input className="w-11/12 p-2" type="number" name="quantity" id="" />
          <input
            type="submit"
            className="bg-sky-600 mr-1 hover:bg-sky-800 text-white w-[100%]  rounded-md py-2"
            value="Add"
          />
        </form>
        <button
          onClick={() => handleDelivered(computer._id)}
          className="bg-red-600 hover:bg-red-700 text-white w-[100%]  rounded-md my-3 py-2"
        >
          Delivered
        </button>
      </div>
    </div>
  );
};

export default ManageComputer;
