import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Circles
        bgColor={"#00BFFF"}
        color={"#00BFFF"}
        height={50}
        width={200}
        className="m-5"
      />
      <p className="text-lg text-center p-2">{message}</p>
    </div>
  );
};

export default Spinner;
