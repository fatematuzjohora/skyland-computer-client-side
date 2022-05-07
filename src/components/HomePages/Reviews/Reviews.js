import React from "react";

const Reviews = () => {
  return (
    <div className="md:mx-10 my-5">
      <hr />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Join over 1,000,000 teams worldwide that are using to get more done.
      </p>
      <div className="md:flex p-2 mb-3 ">
        <div className="md:flex p-3 mx-1 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/50d8061c0434175f65976c3afbb8209c/tag.svg"
              alt=""
            />
          </div>
          <div className=" flex flex-col ">
            <h3 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Best Pricing
            </h3>
            <p>
            We Offer the most premium and feature-rich computers at an affordable price as well as 24-hours customer service.Our prior all clint was quit pleased with our work.
            </p>
          </div>
        </div>

        <div className="md:flex p-3 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/check-out/50d8061c0434175f65976c3afbb8209c/tag.svg"
              alt=""
            />
          </div>
          <div className=" flex flex-col">
            <h3 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              Best selling
            </h3>
            <p>
            We Offer the most premium and feature-rich computers at an affordable price as well as 24-hours customer service.Our prior all clint was quit pleased with our work.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Reviews;
