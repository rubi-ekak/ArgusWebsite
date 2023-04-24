import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const CustomerService = () => {
  return (
    <section className="bg-backcolor2">
      <div className="grid grid-cols-2 p-20">
        <div className=" w-4/5 m-8 flex flex-col p-4 leading-tight">
          <div className="p-4">
            <h1 className="font-bold text-4xl leading-20">
              24/7 Customer Support & Service
            </h1>
          </div>
          <div className="py-4 pl-4">
            <p className=" text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              eum excepturi molestias? Natus voluptatibus, iusto, ut
            </p>
          </div>
          <div className="py-4 pl-4">
            <div className="flex justify-start items-center my-3 ">
              <span>
                <CheckCircleIcon fontSize="small" />
              </span>
              <p className=" text-slate-500 pl-3">All time support</p>
            </div>
            <div className="flex justify-start items-center my-3">
              <span>
                <CheckCircleIcon fontSize="small" />
              </span>
              <p className=" text-slate-500 pl-3">
                Will give you marketing guidelines
              </p>
            </div>
          </div>

          <div className="p-4">
            <a href="#">
              <p className="text-blue-600 font-bold mt-4">
                Get started for free
                <EastOutlinedIcon className="pl-2" />
              </p>
            </a>
          </div>
        </div>

        <div className=" pt-5 flex justify-center items-center">
          <div className="bg-white w-[340px] h-[390px] p-6 rounded-md shadow-2xl">
            <div>
              <div className="flex justify-center items-center">
                <img src="images.png" className="h-14 w-14 rounded-full"></img>
                <p className="input-text px-6 pt-2 pb-2 ml-3 w-60 h-auto bg-slate-100 rounded-xl">
                  Hello My Name is Alex, how can I help you??
                </p>
              </div>

              <div className="flex justify-center items-center mt-6">
                <p className="input-text px-6  pt-2 pb-2 mr-3 w-60 h-auto bg-blue-600 text-white rounded-xl">
                  Hii Julie here,I have a few question I would love to ask
                  you,if that is ok.
                </p>
                <img
                  src="customericon.png"
                  className="h-14 w-14 rounded-full"
                ></img>
              </div>

              <div className="flex justify-center items-center mt-6">
                <img src="images.png" className="h-14 w-14 rounded-full"></img>
                <p className="input-text px-6 pt-2 pb-2 ml-3 w-60 h-auto bg-slate-100 rounded-xl">
                  Nice to meet you,Julia!
                </p>
              </div>
              <div className="mt-6 relative">
                <input className="w-[18rem] h-10 border-2 border-slate-400 rounded-sm pl-2 outline-none " placeholder="Write your reply..."></input>
                <button className="w-11 h-10 bg-slate-400 border-r-2 absolute top-[1px] right-[4px] rounded-r-sm bg-cover"><ChevronRightIcon className="text-white"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
