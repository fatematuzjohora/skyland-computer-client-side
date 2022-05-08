import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateComputer = () => {
    const { id } = useParams();
  const [computer, setComputer] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://skyland-computer.herokuapp.com/computers/${id}`)
      .then((res) => res.json())
      .then((data) => setComputer(data));
  }, [id]);

  const handleUpdateComputer = (e) => {
    e.preventDefault();

    const name = e.target.Name.value;
    const suplier = e.target.suppliername.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const image = e.target.image.value;

    const updatedComputer = {
      name,
      suplier,
      price,
      quantity,
      description,
      image,
    };

    fetch(`https://skyland-computer.herokuapp.com/computers/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedComputer),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    e.target.reset();
    toast.success("Updated");
    navigate(-1);
  };

  return (
    <div className="w-3/5 mx-auto my-6">
      <h1 className="text-2xl text-center">Edit Item</h1>
      <form
        onSubmit={handleUpdateComputer}
        className="flex flex-col bg-[#151515] mt-10 p-6 rounded-2xl"
      >
        <label className="text-white" htmlFor="Nme">
          Name
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          type="Name"
          name="Name"
          readOnly
          value={computer?.name}
          required
        />

        <label className="text-white" htmlFor="SupplierName">
          Supplier Name
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="suppliername"
          type="text"
          readOnly
          value={computer?.Suplier}
          required
        />

        <label className="text-white" htmlFor="Price">
          Price
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="price"
          type="number"
          placeholder={computer?.price}
          required
        />

        <label className="text-white mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="rounded-3xl p-3 my-4"
          name="description"
          id=""
          cols="30"
          rows="2"
          readOnly
          value={computer?.description}
          required
        ></textarea>

        <label className="text-white" htmlFor="Quantity">
          Quantity
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="quantity"
          type="number"
          placeholder={computer?.quantity}
          required
        />

        <label className="text-white" htmlFor="image">
          Image Url
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="image"
          type="text"
          readOnly
          value={computer?.image}
          required
        />

        <input
          className="bg-[#FF5400] hover:bg-[#FF4400] text-black w-2/3 mx-auto p-2 px-5 rounded-md cursor-pointer"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateComputer;