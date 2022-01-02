/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Box = ({ image, title, text }) => {
  return (
    <div className="bg-white rounded-md w-[425px] h-[350px] flex flex-col items-center justify-center gap-y-4 py-10 px-6 text-center shadow">
      <img src={image} alt="Box Image" />
      <div>
        <h6 className="text-lg text-activeColor font-semibold mb-2">{title}</h6>
        <p className="text-md text-gray-400 tracking-tight px-4">{text}</p>
      </div>
    </div>
  );
};

export default Box;
