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
    <div className="mx-auto container px-28 py-5">
      <div className="flex grid-cols-5 items-center justify-between">
        {/*  */}
        <div className="h-56">
          <h5 className="text-activeColor text-lg">Getir'i İndirin!</h5>
          <div className="flex flex-col gap-y-2 my-4">
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
        <div className="h-56">
          <img
            src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
            alt="QR"
            className="w-24 bg-white rounded-lg shadow-lg p-4 cursor-pointer"
          />
        </div>
        {/*  */}
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between py-4">
        <div className="flex gap-x-3 text-xs">
          <span>© 2022 Getir</span>
          <a href="!#" className="text-activeColor">
            Bilgi Toplumu Hizmetleri
          </a>
        </div>
        <div className="flex items-center justify-center gap-x-3">
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
