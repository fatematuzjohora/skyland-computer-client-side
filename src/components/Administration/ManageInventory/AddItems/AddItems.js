import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
  console.log(user);

  const handlePostInventory = (e) => {
    e.preventDefault();

    const name = e.target.Name.value;
    const suplier = e.target.suppliername.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const userEmail = user.email;

    const mobile = {
      name,
      suplier,
      price,
      quantity,
      description,
      image,
      userEmail,
    };
    console.log(userEmail);

    fetch("https://ns-mobile-house.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(mobile),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.reset();
    toast.success("Item Added");
  };

  return (
    <div className="w-9/12 mx-auto">
      <form
        onSubmit={handlePostInventory}
        className="flex flex-col bg-[#151515] mt-10 p-6 rounded-2xl"
      >
        <label className="text-white" htmlFor="Nme">
          Name
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          type="Name"
          name="Name"
          required
        />

        <label className="text-white" htmlFor="SupplierName">
          Supplier Name
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="suppliername"
          type="text"
          required
        />

        <label className="text-white" htmlFor="Price">
          Price
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="price"
          type="number"
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
          required
        ></textarea>

        <label className="text-white" htmlFor="Quantity">
          Quantity
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="quantity"
          type="number"
          required
        />

        <label className="text-white" htmlFor="image">
          Image Url
        </label>
        <input
          className="rounded-3xl p-2 my-4"
          name="image"
          type="text"
          required
        />

        <input
          className="bg-[#FF5400] hover:bg-[#FF4400] text-black w-2/3 mx-auto p-2 px-5 rounded-md cursor-pointer"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItems;