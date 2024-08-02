import React from "react";
import burgerMenu from "./assets/burgerMenu.png";

const DetailMenu = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <img src={burgerMenu} alt="" />

      <div className="w-[700px]">
        <h3 className="text-slate-700 font-bold text-lg">Menu</h3>
        <h1 className="font-bold text-3xl">Burger Ayam BBQ</h1>
        <p className="text-justify mt-2 text-lg">
          Nikmati kelezatan Burger Ayam BBQ dari Ayam69! Dibuat dengan potongan ayam yang diolah
          sempurna dengan saus BBQ khas Ayam69, memberikan rasa manis dan gurih yang lezat. Setiap
          gigitan menawarkan kombinasi sempurna dari ayam yang juicy, keju leleh, dan bawang
          karamel. Ditambah dengan selada segar untuk memberikan rasa yang seimbang, semuanya
          disajikan dalam roti bun yang lembut dan hangat.
        </p>
        <p className="font-semibold mt-2 text-lg">Harga</p>
        <p className="font-semibold text-lg">Rp. 40.000</p>
        <a
          href="#"
          className="w-full bg-orange-600 inline-block text-center font-semibold text-lg mt-3 text-white py-2 rounded-xl hover:bg-orange-700 transition-all "
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
};

export default DetailMenu;
