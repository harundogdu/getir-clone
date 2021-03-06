import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import heroOne from "images/hero-1.jpg";
import heroTwo from "images/hero-2.jpg";
import heroThree from "images/hero-3.jpg";
import heroFour from "images/hero-4.jpg";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from "@react-hook/window-size";
/* function */
const HeroSection = () => {
  const windowWidthSize = useWindowWidth();
  const [selected, setSelected] = useState("TR");
  const countries = {
    TR: "+90",
    US: "+1",
    GB: "+44",
    FR: "+33",
    DE: "+49",
    IT: "+39",
    ES: "+34",
    NL: "+31",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="h-52 md:h-[500px] w-full relative md:before:bg-gradient-to-r md:before:from-activeColor md:before:to-transparent before:absolute md:before:inset-0 md:before:z-10">
      {windowWidthSize >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full !h-[500px] object-cover"
              src={heroOne}
              alt="hero-1"
            />
          </div>
          <div>
            <img
              className="w-full !h-[500px] object-cover"
              src={heroTwo}
              alt="hero-1"
            />
          </div>
          <div>
            <img
              className="w-full !h-[500px] object-cover"
              src={heroThree}
              alt="hero-1"
            />
          </div>
          <div>
            <img
              className="w-full !h-[500px] object-cover"
              src={heroFour}
              alt="hero-1"
            />
          </div>
        </Slider>
      )}

      <div
        className="container flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 
       md:px-5 lg:px-24 2xl:px-48"
      >
        <div className="hidden md:block space-y-8">
          <img
            data-testid="main-image"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="Logo"
            shape="NORMAL"
            className="style__Image-sc-__sc-1h9bp23-0 iceviX"
          />
          <h5 className="text-4xl text-white font-semibold">
            Dakikalar i??inde <br />
            kap??n??zda.
          </h5>
        </div>
        <div className="bg-mainBg w-full md:w-1/2 xl:w-1/3 px-8 py-6 rounded-lg space-y-4">
          <h6 className="text-activeColor font-semibold text-lg text-center">
            Giri?? yap veya kay??t ol
          </h6>
          <div className="flex items-center justify-center space-x-3">
            <ReactFlagsSelect
              countries={Object.keys(countries)}
              defaultCountry="tr"
              customLabels={countries}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className="border border-gray-300 h-12 bg-white hover:border-activeColor transition-all"
              id="flags"
            />
            <label className="flex-1 relative bg-white group">
              <input
                type="text"
                className="border rounded border-gray-300 w-full h-12 px-4 outline-none group-hover:border-activeColor focus-within:border-activeColor transition-all peer text-sm pt-2 block"
                required
              />
              <span className="absolute top-3 left-4 text-gray-400 text-md group-hover:border-activeColor transition-all  peer-focus:top-1 peer-focus:text-xs peer-focus:text-activeColor peer-valid:top-1 peer-valid:text-xs">
                Telefon Numaras??
              </span>
            </label>
          </div>
          <hr className="w-10/12 mx-auto" />
          <div className="bg-brandYellow px-6 py-3 rounded-lg shadow-md text-activeColor font-semibold hover:text-brandYellow hover:bg-activeColor transition-colors text-center cursor-pointer">
            Telefon numaras?? ile devam et.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
