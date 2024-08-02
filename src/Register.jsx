import React from "react";
import registerImg from "./assets/register.png";

const Register = () => {
  return (
    <div className="w-full px-[10%] flex justify-center items-center h-screen">
      <div className="border flex w-full bg-white rounded-xl shadow-xl">
        <div className="w-1/2 m-20">
          <img src={registerImg} alt="" />
        </div>
        <div className="w-1/2 px-4 m-auto">
          <div>
            <h1 className="text-center font-bold text-3xl mb-7">Login</h1>
            <form className="">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="border-b-2 w-full mt-5 text-xl py-1 px-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 w-full mt-10 text-xl py-1 px-2"
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Password"
                className="border-b-2 w-full mt-10 text-xl py-1 px-2"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border-b-2 w-full mt-10 text-xl py-1 px-2"
              />
              <button className="w-full py-2 px-3 bg-orange-600 font-semibold text-white rounded-xl mt-10  hover:bg-orange-700">
                Register
              </button>
            </form>
            <p className="text-center mt-3">
              Sudah memiliki akun? <span className="font-semibold text-orange-600">Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
