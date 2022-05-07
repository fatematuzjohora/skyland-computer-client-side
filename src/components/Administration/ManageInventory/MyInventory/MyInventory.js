import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init';
import Computer from '../../Inventory/Computer/Computer';

const MyInventory = () => {
    const [mobiles, setMobile] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://ns-mobile-house.herokuapp.com/myinventory?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMobile(data);
        }
        if (data.message === "Forbidden access") {
          signOut(auth);
          navigate("/login");
          toast.error("Forbidden access (403)");
        }
        if (data.message === "Unouthorize access") {
          signOut(auth);
          navigate("/login");
          toast.error("Unouthorize access (401)");
        }
      });
  }, [navigate, user]);

  return (
    <div className="grid md:grid-cols-2 items-center justify-center">
      {mobiles?.length ? (
        mobiles?.map((mobile) => <Computer key={mobile?._id} mobile={mobile} />)
      ) : (
        <p className="text-red-600 text-4xl text-center my-10 w-full">
          You have to add an Inventory!
        </p>
      )}
    </div>
  );
};

export default MyInventory;