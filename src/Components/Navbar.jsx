import React from "react";
import "./Navbar.css";
import Startbutton from "./Startbutton";
const Navbar = () => {
  return (
    <section className="bg-sky-400 navbar">
      <nav className="mx-auto mobile:pt-4 mobile:px-6 desktop:pt-8 desktop:px-8">

      <div className="flex laptop:flex-row   laptop:justify-between mobile:items-start laptop:items-center mobile:flex-col mobile:px-2   laptop:px-12 px-16 mx-auto desktop:px-16">
        <div>
          <a>
            <span className="text-2xl laptop:text-2xl  mobile:text-3xl font-bold">Eka<span className="text-sky-600">k</span></span>
          </a>
        </div>
        <div>
          <ul className="flex justify-between laptop:flex laptop:justify-between mobile:gap-2 mobile:flex-none mobile:flex-col laptop:flex-row  laptop:gap-7  desktop:gap-8 gap-8 mt-4 mb-4 text-sm">
            <li className="p-1  cursor-pointer font-bold">
              <a>Home</a>
            </li>
            <li className="p-1 cursor-pointer font-bold">
              <a>About us</a>
            </li>
            <li className="p-1 cursor-pointer font-bold">
              <a>Contact</a>
            </li>
            <li className="p-1 cursor-pointer font-bold">
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="" >
          <Startbutton/>
        </div>
      </div>
      </nav>
      

      
    </section>
  );
};

export default Navbar;
