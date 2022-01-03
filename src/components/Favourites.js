import React from "react";
import Title from "components/ui/Title";
import favouritesData from "api/favourites.json";
import {AiOutlinePlus} from "react-icons/ai"

const Favourites = () => {
  const [favourites, setFavourites] = React.useState([]);

  React.useEffect(() => {
    setFavourites(favouritesData);
  }, []);

  return (
    <div className="bg-mainBg">
      <div className="mx-auto container p-2 lg:px-28 lg:py-5">
        <Title>Favoriler</Title>
        <div className="bg-white grid p-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 divide-x divide-y divide-gray-50 flex-wrap items-center mt-4">
          {
            favourites.map((favourite, index) => (
              <div key={favourite.id} className="w-44 h-52 flex flex-col flex-grow items-center justify-center p-2 cursor-pointer relative">
                <img className="w-28 h-28 object-cover" src={favourite.image} alt={favourite.alt} />
                <h6 className="text-activeColor font-semibold">{favourite.price}₺</h6>
                <h6 className="font-semibold text-sm text-center">{favourite.title}</h6>
                <h6 className="text-sm text-gray-400">{favourite.alt}</h6>
                <div className="absolute top-1 right-4 bg-white shadow-md p-2 rounded-lg"><AiOutlinePlus className="text-activeColor"  size={16}/></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Favourites;
