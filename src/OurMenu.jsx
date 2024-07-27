import React from "react";
import food1 from "./assets/product1-img.png";

const OurMenu = () => {
  return (
    <div className="h-screen bg-[#FFE7D1] py-4 px-14">
      <div className="mx-auto">
        <h1 className="text-center font-bold text-4xl mb-5">Our Menu</h1>
        <div className="w-full grid grid-cols-3 gap-4">
          <div className="border flex bg-white px-5 py-3 rounded-lg items-center justify-between">
            <div className="">
              <h1 className="font-bold text-2xl mb-2">Ayam Bakar Madu</h1>
              <p className="mb-2">Ayam bakar yang diolah dengan bumbu spesial dan madu</p>
              <h1 className="font-bold text-orange-600 text-xl">Rp. 45.000</h1>
            </div>
            <div className="">
              <img src={food1} alt="" />
            </div>
          </div>
          <div className="border flex bg-white px-5 py-3 rounded-lg items-center justify-between">
            <div className="">
              <h1 className="font-bold text-2xl mb-2">Ayam Bakar Madu</h1>
              <p className="mb-2">Ayam bakar yang diolah dengan bumbu spesial dan madu</p>
              <h1 className="font-bold text-orange-600 text-xl">Rp. 45.000</h1>
            </div>
            <div className="">
              <img src={food1} alt="" />
            </div>
          </div>
          <div className="border flex bg-white px-5 py-3 rounded-lg items-center justify-between">
            <div className="">
              <h1 className="font-bold text-2xl mb-2">Ayam Bakar Madu</h1>
              <p className="mb-2">Ayam bakar yang diolah dengan bumbu spesial dan madu</p>
              <h1 className="font-bold text-orange-600 text-xl">Rp. 45.000</h1>
            </div>
            <div className="">
              <img src={food1} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5 gap-4">
          <div className="border flex bg-white px-5 py-3 rounded-lg items-center justify-between">
            <div className="">
              <h1 className="font-bold text-2xl mb-2">Ayam Bakar Madu</h1>
              <p className="mb-2">Ayam bakar yang diolah dengan bumbu spesial dan madu</p>
              <h1 className="font-bold text-orange-600 text-xl">Rp. 45.000</h1>
            </div>
            <div className="">
              <img src={food1} alt="" />
            </div>
          </div>
          <div className="border flex bg-white px-5 py-3 rounded-lg items-center justify-between">
            <div className="">
              <h1 className="font-bold text-2xl mb-2">Ayam Bakar Madu</h1>
              <p className="mb-2">Ayam bakar yang diolah dengan bumbu spesial dan madu</p>
              <h1 className="font-bold text-orange-600 text-xl">Rp. 45.000</h1>
            </div>
            <div className="">
              <img src={food1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
