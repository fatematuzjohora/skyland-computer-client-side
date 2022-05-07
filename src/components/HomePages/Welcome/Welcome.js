import React from "react";

const Welcome = () => {
  return (
    <div className = "mx-10">
      <div className="flex items-center p-5  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div>
          <img
            className="h-96 rounded-2xl p-2"
            src="https://flowbite.com/docs/images/blog/image-4.jpg"
            alt=""
          />
        </div>
        <div className="ml-10 p-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to our most famous computer shop SkyLand.
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2022 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
 