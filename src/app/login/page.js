import SocialLogin from "@/common/SocialLogin.js";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  return (
    <div className=" bg-white pt-3 ">
      {/* logo */}
      <div className=" flex justify-center mt-5 mb-2">
        <Image
          src="/shadamonlogo.png"
          width={200}
          height={80}
          priority
          alt="Login Logo"
        />
      </div>
      {/* login form */}
      <div className="w-full md:max-w-[500px] mx-auto border rounded-t-xl bg-gray-100 border-gray-600 pt-3 px-3 mb-20 md:mb-5 pb-3">
        {/* arow and cross */}
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <button className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full">
              <FaArrowLeftLong />
            </button>
          </Link>
          <Link href={"/"}>
            <button className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full">
              <RxCross2 />
            </button>
          </Link>
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
            <button className="bg-[#f67719] text-white text-lg font-light hover:bg-[#ff5900] hover:bg-opacity-70 active:opacity-30 py-[6px] rounded-md duration-300">
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
        <div className=" ">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
