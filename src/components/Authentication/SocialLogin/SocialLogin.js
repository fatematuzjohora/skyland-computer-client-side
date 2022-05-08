import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Google from "../../Images/google.png";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorMessage;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorMessage = <p className=" text-red-500">{error?.message} </p>;
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className=" px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorMessage}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className=" bg-sky-500 w-9/12 mx-auto inline-flex items-center justify-center p-2 rounded-xl my-2"
        >
          <img
            className=" mr-3"
            style={{ width: "25px" }}
            src={Google}
            alt=""
          />
          <span className=" text-white font-thin">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
