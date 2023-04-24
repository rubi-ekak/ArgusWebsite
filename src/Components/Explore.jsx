import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";

const Explore = () => {
  return (
    <section>
      <div className="">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold pt-12 mobile:text-3xl laptop:text-4xl mobile:pt-10">
            Explore our amazing features
          </h1>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 mobile:grid-cols-1 laptop:grid-cols-4 p-12 m-20 mobile:m-4 laptop:p-12 mobile:p-4">
          <div className="flex justify-center items-center">
            <div className="mt-2 border-solid border-2 border-gray-200 rounded-lg  hover:shadow-2xl hover:border-none ease-in w-60  mobile:w-80 laptop:w-60">
              <div className="m-6">
                <div className="rounded-xl bg-sky-300 h-12 w-12 p-1 my-5 flex justify-center items-center">
                  <SettingsOutlinedIcon />
                </div>
                <div className="text-xl font-bold w-9 my-4">Analysing Data</div>
                <div>
                  <p className="text-gray-400 cursor-pointer">See details</p>
                </div>
              </div>
            </div>
          </div>
       <div className="flex justify-center items-center">
       <div className="mt-2 border-solid border-2 border-gray-200 rounded-lg  hover:shadow-2xl hover:border-none ease-in w-60  mobile:w-80 laptop:w-60">
            <div className="m-6">
              <div className="rounded-xl bg-orange-300 h-12 w-12 p-1 my-5 flex justify-center items-center">
                <PeopleAltOutlinedIcon />
              </div>
              <div className="text-xl font-bold w-9 my-4">
                Virtual Assistant
              </div>
              <div>
                <p className="text-gray-400 cursor-pointer">See details</p>
              </div>
            </div>
          </div>
       </div>
          <div className="flex justify-center items-center">
          <div className="mt-2 border-solid border-2 border-gray-200 rounded-lg  hover:shadow-2xl hover:border-none ease-in w-60  mobile:w-80 laptop:w-60">
            <div className="m-6">
              <div className="rounded-xl bg-orange-600 h-12 w-12 p-1 my-5 flex justify-center items-center">
                <LayersOutlinedIcon />
              </div>
              <div className="text-xl font-bold w-9 my-4">
                Marketing Support
              </div>
              <div>
                <p className="text-gray-400 cursor-pointer">See details</p>
              </div>
            </div>
          </div>
          </div>
           <div className="flex justify-center items-center">
           <div className="mt-2 border-solid border-2 border-gray-200 rounded-lg  hover:shadow-2xl hover:border-none ease-in w-60  mobile:w-80 laptop:w-60">
            <div className="m-6">
              <div className="rounded-xl bg-fuchsia-400 h-12 w-12 p-1 my-5 flex justify-center items-center">
                <ViewInArOutlinedIcon />
              </div>
              <div className="text-xl font-bold w-9 my-4">24/7 Support</div>
              <div>
                <p className="text-gray-400 cursor-pointer">See details</p>
              </div>
            </div>
          </div>
           </div>
          
        </div>
      </div>
    </section>
  );
};

export default Explore;
