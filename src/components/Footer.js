import React from "react";
import AppGaleryImage from "images/appgalery.svg";
import AppStoreImage from "images/appstore.svg";
import GooglePlayImage from "images/googleplay.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import Menu from "components/ui/Menu";
/* function */
const Footer = () => {
  const footerItems = [
    {
      id: 1,
      title: "Getir'i keşfedin!",
      items: [
        "Hakkımızda",
        "Kariyer",
        "Teknoloji Kariyerleri",
        "İletişim",
        "COVID-19 Duyuru",
        "Sosyal Sorumluluk Projeleri",
      ],
    },
    {
      id: 2,
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        "Sıkça Sorulan Sorular",
        "Kişisel Verilerin Korunması",
        "Gizlilik Politikası",
        "Kullanım Koşulları",
        "Çerez Politikası",
      ],
    },
    {
      id: 3,
      title: "İş Ortağımız Olun",
      items: [
        "Bayimiz Olun",
        "Deponuzu Kiralayın",
        "GetirYemek Restoranı Olun",
        "GetirÇarşı İşletmesi Olun",
      ],
    },
  ];

  return (
    <div className="mx-auto container mt-10 lg:mt-0 lg:px-28 lg:py-5 px-4">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-y-10 lg:gap-y-0 items-center justify-between gap-x-7 tracking-tight">
        {/*  */}
        <div className="h-56 col-span-2">
          <h5 className="text-activeColor text-lg">Getir'i İndirin!</h5>
          <div className="flex flex-col gap-y-2 my-4 w-36">
            <img src={AppStoreImage} alt="AppStoreImage" />
            <img src={GooglePlayImage} alt="GooglePlayImage" />
            <img src={AppGaleryImage} alt="AppGaleryImage" />
          </div>
        </div>
        {/*  */}
          {
            footerItems.map((item) => (
              <Menu key={item.id} items={item.items} title={item.title} />
            ))
          }
        {/*  */}
        <div className="hidden md:flex h-56  justify-end items-start flex-grow col-span-1">
          <img
            src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
            alt="QR"
            className="w-24 bg-white rounded-lg shadow-lg p-4 cursor-pointer"
          />
        </div>
        {/*  */}
      </div>
      <hr className="my-2 lg:my-4" />
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:py-4 p-2">
        <div className="flex gap-x-3 text-xs">
          <span>© 2022 Getir</span>
          <a href="!#" className="text-activeColor">
            Bilgi Toplumu Hizmetleri
          </a>
        </div>
        <div className="flex items-center justify-end lg:justify-center gap-x-3">
          <BsFacebook
            size={38}
            className="cursor-pointer hover:bg-light p-2 text-gray-500 hover:text-activeColor transition-all rounded-lg"
          />
          <BsTwitter
            size={38}
            className="cursor-pointer hover:bg-light p-2 text-gray-500 hover:text-activeColor transition-all rounded-lg"
          />
          <BsInstagram
            size={38}
            className="cursor-pointer hover:bg-light p-2 text-gray-500 hover:text-activeColor transition-all rounded-lg"
          />
          <a
            href="#!"
            className=" group hover:bg-light transition-all flex items-center rounded-md border border-gray-300 px-2 py-1"
          >
            <BiGlobe size={18} className="text-gray-500 group-hover:text-activeColor" />
            <span className="ml-2 text-gray-500 group-hover:text-activeColor">Türkçe (TR)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
