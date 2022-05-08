import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  let errorMessage;

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    console.log("user", user);
  }
  if (error) {
    errorMessage = <p className="text-danger">{error?.message} </p>;
  }

  const handleFormRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div className=" py-5 bg-slate-400 h-screen">
      <div className=" border-2 items-center flex flex-col py-6 md:mx-96 rounded-xl  bg-slate-200">
        <h5 className=" border-cyan-300 font-serif m-3 border-2 rounded-xl  text-xl mb-8 font-medium text-gray-900 dark:text-white">
          SignUp to our platform
        </h5>
        <form onSubmit={handleFormRegister}>
          <div>
            <label
              htmlFor=""
              className=" mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>{" "}
            <br />
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your name"
              required
            />{" "}
            <br />
          </div>
          <div>
            <label
              htmlFor=""
              className=" mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />{" "}
            <br />
          </div>
          <div>
            <label
              htmlFor=""
              className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="************"
              required
            />{" "}
            <br />
          </div>
          <div className="my-4">
            <Link
              to={"/login"}
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              <button>already have an account?</button>
            </Link>
          </div>
          {errorMessage}
          <button
            type="submit"
            className=" w-60 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SingUp for account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
