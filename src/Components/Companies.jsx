import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section>
      <div className="company-bg-color text-slate-800 p-4">
        <div className="flex justify-center items-center p-8 mobile:p-6 laptop:p-8">
          <h2 className="text-2xl font-bold mobile:text-xl laptop:text-3xl">Trusted by Greatest Companies</h2>
        </div>
        <div className="grid grid-cols-4 mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 laptop:px-40 mobile:px-10 px-40 my-6">
          <div className=" flex justify-center ">
            <div className="w-40 h-12 text-slate-800 text-center">company1</div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-12 text-slate-800 text-center">company1</div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-12 text-slate-800 text-center">company1</div>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-12 text-slate-800 text-center">company1</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
