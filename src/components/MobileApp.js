import React from "react";
import MobileAppImage from 'images/mobileApp.png';
import AppGaleryImage from 'images/appgalery.svg';
import AppStoreImage from 'images/appstore.svg';
import GooglePlayImage from 'images/googleplay.svg';
const MobileApp = () => {
  return (
    <div className="bg-mainBg">
      <div className="mx-auto container px-28 py-5">
        <div className="bg-activeColor flex items-center justify-between rounded-lg pt-5 pl-10">
          <div>
            <h2 className="text-white text-3xl font-semibold mb-3">Getir'i indirin!</h2>
            <p className="text-white font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
            <div className="flex items-center justify-center gap-x-2 mt-5">
              <img src={AppStoreImage} alt="AppStoreImage" />
              <img src={GooglePlayImage} alt="GooglePlayImage" />
              <img src={AppGaleryImage} alt="AppGaleryImage" />
            </div>
          </div>
          <div>
            <img src={MobileAppImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
