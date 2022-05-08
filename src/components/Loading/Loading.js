import { Spinner } from "flowbite-react";
import React from "react";
const Loading = () => {
  return (
    <div
      style={{ height: "300px" }}
      className="w-full flex justify-center items-center"
    >
      <Spinner color="yellow" size="sm" />
    </div>
  );
};

export default Loading;