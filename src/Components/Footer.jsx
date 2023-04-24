import React from "react";
import Startbutton from "./Startbutton";

const Footer = () => {
  return (
    <section className="bg-slate-900">
      <div className="p-20">
        <div className="bg-blue-800 p-8 rounded-xl h-[150px]">
          <div className=" flex justify-between items-center pt-2 px-8">
            <div className="">
              <p className="text-3xl font-bold text-slate-50">
                Grow your business with us,
              </p>
              <p className="text-3xl font-bold text-slate-50 pt-2">
                Get the best marketing Support.
              </p>
            </div>
            <div>
              <button className="rounded-md  bg-slate-900 text-slate-50 h-[4rem] shadow-md px-4 w-[12rem] ">
                <span className="p-2 text-xl font-medium">Get started</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <div className="grid grid-cols-4">
            <div className="flex justify-center">
              <div className=" ">
                <h1 className="font-bold text-lg text-slate-300 pb-5">
                  Company
                </h1>
                <ul className="leading-10">
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                      About
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                      Feature
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                      Works
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className=" ">
                <h1 className="font-bold text-lg text-slate-300 pb-5">
                Help
                </h1>
                <ul className="leading-10">
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                      Customer Support
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                     Terms & Conditions
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                     Privacy Policy
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className=" ">
                <h1 className="font-bold text-lg text-slate-300 pb-5">
                  Resources
                </h1>
                <ul className="leading-10">
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                     Free e-books
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                   Our Story
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                   Blog
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className=" ">
                <h1 className="font-bold text-lg text-slate-300 pb-5">
                  Links
                </h1>
                <ul className="leading-10">
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                    Pricing
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                  Testimonial
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                    Features
                    </a>
                  </li>
                  <li className="text-slate-400 ">
                    <a href="#" target="_blank">
                     Why us?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
