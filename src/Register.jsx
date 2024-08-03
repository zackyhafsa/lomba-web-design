import React from "react";
import registerImg from "./assets/register.png";

const Register = () => {
  return (
    <div className="w-full px-4 max-sm:px-[1%] lg:px-[10%] flex justify-center items-center h-screen">
      <div className="border flex flex-col lg:flex-row w-full bg-white rounded-xl shadow-xl py-4">
        <div className="hidden w-full lg:block lg:w-1/2 m-10 lg:m-20">
          <img src={registerImg} alt="" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 px-4 m-auto">
          <div>
            <h1 className="text-center font-bold text-3xl mb-7">Register</h1>
            <form>
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
              <button className="w-full py-2 px-3 bg-orange-600 font-semibold text-white rounded-xl mt-10 hover:bg-orange-700">
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
