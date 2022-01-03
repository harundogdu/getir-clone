import React from "react";
import Box from "components/ui/Box";
import boxData from "api/box.json";
const Cards = () => {
  const [box, setBox] = React.useState([]);
  React.useEffect(() => {
    setBox(boxData);
  }, []);
  return (
    <div className="bg-mainBg pb-20">
      <div className="mx-auto container px-28 py-5">
        <div className="w-fit mx-auto flex items-center justify-center flex-grow gap-x-4 grid-cols-3">
          {box.map((item, index) => (
            <Box
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
