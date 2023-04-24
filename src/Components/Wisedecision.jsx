import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckIcon from "@mui/icons-material/Check";
import Startbutton from "./Startbutton";
import { blue } from "@mui/material/colors";

const Wisedecision = () => {
  const style =
    "rounded-md border-2  bg-blue-700 text-slate-50 h-[3rem] shadow-md px-4 ";
  return (
    <section>
      <div className="p-20">
        <div className=" px-16 text-center">
          <div className="text-4xl text-slate-700 font-bold flex justify-center items-center leading-tight text-center">
            <h1 className="w-[460px] ">
              Make the wise decision for your business
            </h1>
          </div>
          <p className="text-xl text-slate-400 m-4">
            Choose from our affordable 3 packages
          </p>
        </div>
        <div className="px-10 py-14">
          <div className="grid grid-cols-3 text-center">
            <div className="flex justify-center ">
              <div className="bg-blue-200 hover:bg-blue-600 hover:text-slate-100 p-6 w-[280px] h-auto rounded-md shadow-md  scale-100 hover:scale-125 ease-in duration-500">
                <div className="pb-7">
                  <p className="text-2xl text-center p-4 font-bold ">
                    6 Months
                  </p>
                  <div className="text-center p-4">
                    <span><AttachMoneyIcon fontSize="sm"/></span>
                    <span className="text-5xl  font-bold">
                      79
                    </span>
                    <span className="font-medium">
                      /<span className="text-xl ml-1 font-bold">yr.</span>
                    </span>
                  </div>
                  <div className="flex p-1 text-sm">
                    <span className="">
                      <CheckIcon />
                    </span>
                    <p className="ml-2 font-medium">unlimited acess</p>
                  </div>
                  <div className="flex p-1 text-sm">
                    <span className="s">
                      <CheckIcon />
                    </span>
                    <p className="ml-2 font-medium">24/7 support</p>
                  </div>
                </div>
                <div className=" pt-6">
                  <button className="rounded-xl hover:bg-white border-2 hover:border-slate-100 border-slate-600 font-bold text-slate-900  hover:text-blue-800 h-[3rem]  px-4 ">
                    <span className="p-2">Start Free Trial</span>
                  </button>
                </div>
              </div>
            </div>


            <div className="flex justify-center">
              <div className="bg-blue-200 hover:bg-blue-600 hover:text-slate-100 p-6 w-[280px] h-auto rounded-md shadow-md  scale-100 hover:scale-125 ease-in duration-500">
                <div className="pb-7">
                  <p className="text-2xl text-center p-4 font-bold ">
                    6 Months
                  </p>
                  <div className="text-center p-4">
                    <AttachMoneyIcon fontSize="sm"/>
                    <span className="text-5xl font-bold">
                      79
                    </span>
                    <span className="font-medium">
                      /<span className="text-xl ml-1 font-bold">yr.</span>
                    </span>
                  </div>
                  <div className="flex p-1 text-sm">
                    <span className="">
                      <CheckIcon />
                    </span>
                    <p className="ml-2 font-medium">unlimited acess</p>
                  </div>
                  <div className="flex p-1 text-sm">
                    <span className="">
                      <CheckIcon />
                    </span>
                    <p className="ml-2 font-medium">24/7 support</p>
                  </div>
                </div>
                <div className=" pt-6">
                  <button className="rounded-xl hover:bg-white border-2 border-slate-600 hover:border-slate-100 text-slate-900 hover:text-blue-800 h-[3rem] font-bold px-4 ">
                    <span className="p-2">Start Free Trial</span>
                  </button>
                </div>
              </div>
            </div>


            <div className="flex justify-center">
              <div className="bg-blue-200 hover:bg-blue-600 hover:text-slate-100 p-6 w-[280px] h-auto rounded-md shadow-md  scale-100 hover:scale-125 ease-in duration-500">
                <div className="pb-7">
                  <p className="text-2xl text-center p-4 font-bold ">
                    6 Months
                  </p>
                  <div className="text-center p-4">
                    <AttachMoneyIcon fontSize="sm"/>
                    <span className="text-5xl font-bold">
                      79
                    </span>
                    <span className="font-medium">
                      /<span className="text-xl ml-1 font-bold">yr.</span>
                    </span>
                  </div>
                  <div className="flex p-1 text-sm">
                    <span className="">
                      <CheckIcon />
                    </span>
                    <p className="ml-2 font-medium ">unlimited acess</p>
                  </div>
                  <div className="flex p-1 text-sm">
                    <span className="">
                      <CheckIcon />
                    </span>
                    <p className="ml-2 font-medium ">24/7 support</p>
                  </div>
                </div>
                <div className=" pt-6">
                  <button className="rounded-xl hover:bg-white border-2 hover:border-slate-100 border-slate-600 text-slate-900  hover:text-blue-800 font-bold h-[3rem]  px-4 ">
                    <span className="p-2">Start Free Trial</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Wisedecision;
