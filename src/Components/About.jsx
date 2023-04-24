import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Startbutton from "./Startbutton";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const About = () => {
  return (
    <section>
      <Navbar />
      <div className="about-container about-bg-color  w-full flex-col mobile:flex-row flex justify-center laptop:flex-row laptop:px-6 px-6 relative mobile:px-2">
        <div className="w-6/12 h-3/6 flex flex-col  justify-center py-20  px-16 laptop:py-20 laptop:px-16 mobile:py-16 mobile:px-2">
          <div className="mt-8">
            <h1 className="text-6xl font-bold leading-tight mobile:text-2xl laptop:text-6xl laptop:leading-tight">
              Next-gen saas tool to increase your net sales
            </h1>
            <p className="py-8 text-neutral-400 pr-2 mobile:py-3 mobile:pr-0 mobile:text-[0.6rem] laptop:text-[1rem] laptop:py-8 laptop:pr-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae illum exercitationem amet minus totam fugit!
            </p>
          </div>
          <div className="drop-shadow-xl input-container flex items-center relative pt-6 mobile:pt-4 laptop:pt-6">
            <input
              className=" border-none w-5/6 h-16 rounded-md pl-8   mobile:h-8 mobile:text-[1rem] laptop:h-16 focus:outline-none" 
              placeholder="Enter your email"
            ></input>
            <div className="absolute right-24">
        
              <Startbutton />
            </div>
          </div>
          <h2 className="py-4 text-neutral-400 pr-2 ">
            Already have an account?
            <a href="">
              <span className="font-bold underline text-gray-600">
                Log In Now
              </span>
            </a>
          </h2>
        </div>
        <div className="w-6/12  flex justify-center items-center shadow-sm">
          <img
            src="pexels-photo.jpeg"
            className="h-4/5 w-9/12 rounded-sm
            mobile:h-3/5 laptop:h-4/5
            "
          ></img>
          <div className="w-[9rem] h-[8rem] bg-slate-50 shadow-md rounded-lg absolute top-32 right-11">
            <div className="p-4">
            <div className="flex justify-around">
                <PeopleAltOutlinedIcon className="bg-gray-400 rounded-md text-blue-800 p-1 " />

                <p className="text-green-800">+ 3.5%</p>
                <NorthOutlinedIcon className="bg-gray-400 rounded-full p-1 text-green-800" />
              </div>
              <h1 className="text-2xl font-bold py-3">67888899</h1>
              <p className="text-gray-500 px-1 text-sm">Total Customers</p>
            </div>
          </div>
          <div className="w-[12rem] h-[8rem] bg-slate-50 shadow-md rounded-lg absolute top-[32rem] right-[35rem]">
            <div className="p-3">
              <div className="flex justify-around">
                <MonetizationOnOutlinedIcon className="bg-red-50 rounded-md text-blue-800 p-1"/>

                <p className="text-green-800">+ 3.5%</p>
                <NorthOutlinedIcon className="bg-green-50 rounded-full p-1 text-green-800" />
              </div>
              <h1 className="text-2xl font-bold py-3 px-2">$888899</h1>
              <p className="text-gray-500 px-1 text-sm">Total Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
