import React from "react";
import Title from "components/ui/Title";
import Slider from "react-slick";
import bannersData from "api/banners.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
const Campaigns = () => {
  const [banners, setBanners] = React.useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  React.useEffect(() => {
    setBanners(bannersData);
  }, []);

  function NextArrow({ className, style, onClick }) {
    return (
      <BiRightArrowAlt
        style={{ ...style }}
        onClick={onClick}
        className={`${className} fill-current !text-activeColor w-7 h-7`}
      />
    );
  }

  function PrevArrow({ className, style, onClick }) {
    return (
      <BiLeftArrowAlt
        style={{ ...style }}
        onClick={onClick}
        className={`${className} fill-current !text-activeColor w-7 h-7`}
      />
    );
  }

  return (
    <div className="bg-mainBg">
      <div className="mx-auto container px-28 py-5">
        <Title>Kampanyalar</Title>
        <Slider {...settings} className="mt-5">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="px-2 outline-none cursor-pointer shadow"
            >
              <img
                className="rounded-lg"
                src={banner.image}
                alt={banner.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Campaigns;
