"use client";

/* eslint-disable @next/next/no-img-element */
import Posts from "@/client/Posts";
import { IoMail } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import LoginModal from "@/client/Modal";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  return (
    <div style={{ maxWidth: "1010px", margin: "auto" }}>
      <div className="flex items-center justify-center gap-[50px] -ml-[45px]">
        <Link href={"/"} style={{ width: "250px" }} className=" h-16">
          <img src="/shadamonlogo.png" alt="logo" className="w-40 h-full " />
        </Link>
        <div
          style={{ width: "500px" }}
          className=" w-[500px] h-16 flex justify-between items-center gap-3"
        >
          <label className="input input-bordered flex items-center gap-2 w-full h-[40px]">
            <input type="text" className="grow " placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* <Posts /> */}

          <div className=" flex items-center gap-2 left-4 relative">
            <button className=" bg-gray-200 p-2 rounded-full text-sm">
              EN
            </button>
            <Link href={"/chat"} className=" flex items-center justify-center">
            <button className=" bg-gray-200 p-2 rounded-full">
              <IoMail className=" text-xl" />
            </button>
            <sup className=" bg-red-600 relative -left-4 px-[5px] py-[8px] -top-3 rounded-full text-[8px] text-white">
              29
            </sup>
            </Link>
          </div>
        </div>
        <div className=" w-[160px]">
          <div className=" flex justify-between items-center gap-1">
            <LoginModal />
            <Link href={"/my-post"} className=" bg-gray-200 p-2 rounded-full">
              <FaCaretDown />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
