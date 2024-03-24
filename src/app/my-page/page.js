/* eslint-disable @next/next/no-img-element */
import React from "react";

const MyPage = () => {
  return (
    <div className="w-[500px]  mx-auto pt-5 ">
      <div className="rounded-t-xl border border-gray-200 bg-[#f8f8f8]">
        <div className="p-3 flex gap-3 rounded-t-xl bg-white ">
          <button className="border  px-2 py-1 rounded-md bg-[#fb6320] text-white">
            My Page
          </button>
          <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300">
            My Post
          </button>
          <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300">
            My Profile
          </button>
          <button className="border border-gray-400 px-2 py-1 rounded-md hover:bg-[#fb6320] hover:text-white duration-300">
            Settings
          </button>
        </div>
        <hr />
        <div className=" bg-white pt-3">
          <img
            className="px-3 w-full h-[100px] rounded-xl"
            src="/cover.jpeg"
            alt=""
          />

          <div className=" px-3 flex my-2 gap-4 items-center">
            <img
              className="w-[40px] rounded-full h-[40px]"
              src="/cover.jpeg"
              alt=""
            />
            <div className="">
              <h4 className="font-bold text-xl">Rubel Store</h4>
              <p className="text-sm -mt-2">5,521 time visited</p>
              <p className="text-sm -mt-2">Electronics & Mobile Phone</p>
            </div>
          </div>

          <hr />
          <div className=" px-3 p-3 flex gap-3 rounded-t-xl bg-white">
            <button className="border px-3 py-1 rounded-3xl bg-gray-300 ">
              About
            </button>
            <button className="border px-3 py-1 rounded-3xl bg-gray-300 ">
              Call
            </button>
            <button className="border px-3 py-1 rounded-3xl bg-gray-300 ">
              Message
            </button>
            <button className="border px-3 py-1 rounded-3xl bg-gray-300 ">
              Rounded
            </button>
          </div>
          <hr />

          <div className="my-2 ">
            <h4 className="mb-2 px-3">
              <span className="italic">
                Create a Page. Start Selling. First{" "}
              </span>
              <span className="font-semibold font-">Create a Post. </span>
            </h4>

            {/*  */}

            <div className="bg-[#f8f8f8] px-3">
              <div className="flex gap-4">
                <button className="border-t-2 py-1 border-gray-600 font-semibold">
                  All Product(112)
                </button>
                <button className=" py-1">Popular Product(50)</button>
              </div>

              {/*  */}

              <div className="flex gap-3 mb-5 mt-3 justify-between">
                <div className="bg-white rounded-lg">
                  <img
                    className=" w-full h-[100px] rounded-lg"
                    src="/cover.jpeg"
                    alt=""
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm">35.4</h3>
                    <h3 className="font-semibold text-sm -mt-1 mb-1">
                      2 BHK Apartment Flora
                    </h3>
                    <button className="w-full bg-gray-300 rounded-sm">
                      Post Promote
                    </button>
                  </div>
                </div>

                {/*  */}

                <div className="bg-white rounded-lg">
                  <img
                    className=" w-full h-[100px] rounded-lg"
                    src="/cover.jpeg"
                    alt=""
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm">35.4</h3>
                    <h3 className="font-semibold text-sm -mt-1 mb-1">
                      2 BHK Apartment Flora
                    </h3>
                    <button className="w-full bg-gray-300 rounded-sm">
                      Post Promote
                    </button>
                  </div>
                </div>
              </div>

              {/*  */}

              <img
                className=" w-full h-[200px] rounded-lg "
                src="/cover.jpeg"
                alt=""
              />

              <div className="p-2  bg-white z-10">
                <h3 className="font-semibold text-sm">35.4</h3>
                <h3 className="font-semibold text-sm -mt-1 mb-1">
                  2 BHK Apartment Flora
                </h3>
                <button className="w-full bg-gray-300 rounded-sm">
                  Post Promote
                </button>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
