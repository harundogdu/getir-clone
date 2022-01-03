import React from "react";
import Box from "components/ui/Box";
import boxData from "api/box.json";
const Cards = () => {
  const [box, setBox] = React.useState([]);
  React.useEffect(() => {
    setBox(boxData);
  }, []);
  return (
    <div className="bg-mainBg lg:pb-20 w-full p-2">
      <div className="mx-auto lg:container lg:px-28 lg:py-5 px-11">
        <div className="grid gap-x-4 gap-y-4 xl:gap-y-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
