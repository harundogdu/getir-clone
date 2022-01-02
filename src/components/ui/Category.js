import React from "react";

const Category = ({ category: { id, title, image } }) => {
  return (
    <div className="flex flex-col whitespace-nowrap items-center justify-between w-28 h-28  hover:bg-light p-2 cursor-pointer gap-y-2 transition-all group">
      <div>
        <img src={image} alt="" className="w-12 h-12 object-cover"/>
      </div>
      <div className="font-semibold text-gray-600 text-sm group-hover:text-activeColor">{title}</div>
    </div>
  );
};

export default Category;
