import React from "react";

const Menu = ({ title, items }) => {
  return (
    <div className="h-56 flex-shrink-0 col-span-2">
      <h5 className="text-activeColor text-lg">{title}</h5>
      <ul className="space-y-2 my-2">
        {items.map((item, index) => (
          <li key={index}>
            <a href="#!">
              <span className="text-sm">{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
