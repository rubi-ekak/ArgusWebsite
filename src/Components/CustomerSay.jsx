import React from "react";
import EastIcon from "@mui/icons-material/East";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const CustomerSay = () => {
  return (
    <section className="bg-backcolor1">
      <div className="py-8">
        <div className="p-20">
          <div>
            <h1 className="text-4xl font-bold">What our happy customer say</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold pt-4">about us</h1>
            <span className="text-2xl font-medium ">
              <a href="#">
                View all testimonial
                <EastIcon className="pl-2" />
              </a>
            </span>
          </div>
          <p className="text-[1.2rem] text-slate-400 pt-6
          ">
            Testimonial from some of our beloved users
          </p>
        </div>

        <div className="px-20 pb-20">
          <div className=" grid grid-cols-3 gap-12">
            <div className="bg-white py-6 px-6 shadow-md rounded-2xl ">
              <div className="text-blue-700 ml-6">
                <FormatQuoteIcon sx={{ fontSize: 85 }} />
              </div>
              <div className="text-[1rem] text-left text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus incidunt dolores eius totam reiciendis,
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="images.png"
                  alt="customer-images"
                  className="rounded-full h-[70px] w-[70px]"
                ></img>
                <div className="flex flex-col ml-2 ">
               
                  <p className="font-medium text-slate-600">Courtney Henry</p>
                  <span className="text-slate-500">Head of finance</span>
                </div>
              </div>
            </div>

            <div className="bg-white py-6 px-6 shadow-md rounded-2xl ">
              <div className="text-blue-700 ml-6">
                <FormatQuoteIcon sx={{ fontSize: 85 }} />
              </div>
              <div className="text-[1rem] text-left text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus incidunt dolores eius totam reiciendis,
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="images.png"
                  alt="customer-images"
                  className="rounded-full h-[70px] w-[70px]"
                ></img>
                <div className="flex flex-col ml-2 ">
                 
                  <p className="font-medium text-slate-600">Courtney Henry</p>
                  <span className="text-slate-500">Head of finance</span>
                </div>
              </div>
            </div>
            <div className="bg-white py-6 px-6 shadow-md rounded-2xl ">
              <div className="text-blue-700 ml-6">
                <FormatQuoteIcon sx={{ fontSize: 85 }} />
              </div>
              <div className="text-[1rem] text-left text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus incidunt dolores eius totam reiciendis,
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="images.png"
                  alt="customer-images"
                  className="rounded-full h-[70px] w-[70px]"
                ></img>
                <div className="flex flex-col ml-2 ">
                
                  <p className="font-medium text-slate-600">Courtney Henry</p>
                  <span className="text-slate-500">Head of finance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
