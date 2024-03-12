"use client";

import SocialLogin from "@/common/SocialLogin";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const LoginModal = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_5").showModal()}
        className=" bg-[#fb6320] text-[.68rem] font-medium py-2 text-white px-10 rounded-full"
      >
        POST AD
      </button>
      <button className=" bg-gray-200 p-2 rounded-full">
            <FaCaretDown />
        </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      {/* login form */}
      <div className=" max-w-[500px] mx-auto rounded-xl bg-gray-100 pt-3 px-3 pb-10">
        {/* arow and cross */}
        <div className="flex justify-between items-center">
          <button className=" bg-gray-300 p-2 lg:p-3 rounded-full modal-backdrop">
            <FaArrowLeftLong />
          </button>
          <button className=" bg-gray-300 p-2 lg:p-3 rounded-full modal-backdrop">
            <RxCross2 />
          </button>
        </div>

        {/* Register page logo section */}
        <div className=" flex flex-col justify-center items-center">
          <Image
            src="/loginlogo.png"
            width={80}
            height={80}
            priority
            alt="Login Logo"
          />
          <h6 className=" text-base font-medium leading-3 mt-1">Register</h6>
          <p className=" text-xs mt-1 text-gray-500 font-medium leading-3">
            <i>If you are a New User</i>
          </p>
        </div>

        {/* OTP section */}
        <div className="">
          <form className=" flex flex-col gap-2 mx-auto my-4 px-10 w-full">
            <div className=" flex border-2 rounded-md py-2 bg-white">
              <select
                type="text"
                value="+880"
                className=" rounded-l-md pl-2 w-24 mr-3 outline-none font-medium "
              >
                <option>+880</option>
              </select>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className=" rounded-md rounded-l-none py-1 w-full outline-none px-2 font-medium border-l-2 "
              />
            </div>
            <button className="bg-[#f67719] text-white text-xl font-light hover:bg-[#ff5800] hover:opacity-60 active:opacity-30 py-3 rounded-md">
              Continue
            </button>
          </form>
        </div>
        <div className=" flex justify-center items-center gap-3 w-full py-4 mx-auto mb-4">
          <p className=" text-gray-400 border w-1/3"></p>
          <p className=" text-gray-600 text-sm">OR</p>
          <p className=" text-gray-400  border w-1/3"></p>
        </div>

        {/* socila login section */}
        <div className=" border">
          <SocialLogin />
        </div>
      </div>
      </dialog>
    </>
  );
};

export default LoginModal;