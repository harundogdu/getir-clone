import React from "react";
import MobileAppImage from 'images/mobileApp.png';
import AppGaleryImage from 'images/appgalery.svg';
import AppStoreImage from 'images/appstore.svg';
import GooglePlayImage from 'images/googleplay.svg';
const MobileApp = () => {
  return (
    <div className="bg-mainBg">
      <div className="mx-auto container p-2 lg:px-28 lg:py-5">
        <div className="bg-activeColor flex flex-col lg:flex-row items-center justify-between rounded-lg p-6 pr-0 pb-0 lg:pt-5 lg:pl-10">
          <div>
            <h2 className="text-white text-3xl font-semibold mb-3">Getir'i indirin!</h2>
            <p className="text-white font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
            <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-y-2 gap-x-2 mt-5">
              <img src={AppStoreImage} alt="AppStoreImage" />
              <img src={GooglePlayImage} alt="GooglePlayImage" />
              <img src={AppGaleryImage} alt="AppGaleryImage" />
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <img src={MobileAppImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
