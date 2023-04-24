import React from "react";
import "./Dataanalysis.css";
import DataChart from "./DataChart";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
const Dataanalysis = () => {
  return (
    <section>
      <div className="dataanalysis-container  p-24 mobile:py-20 mobile:px-10 laptop:p-24">
        <div className=" grid grid-cols-2 gap-28 mobile:grid-cols-1 laptop:grid-cols-2 mobile:gap-10">
          <div className="flex justify-center ">
            <DataChart />
          </div>
          <div className=" w-4/5 m-8 p-6 laptop:m-8 laptop:p-6 mobile:p-0 mobile:m-3">
            <div className="">
              <div className="p-4 mobile:p-3 laptop:p-4">
                <h1 className="font-bold text-4xl leading-20">
                  Best Data analysing Feature
                </h1>
              </div>
              <div className="py-4 pl-4">
                <p className=" text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt eum excepturi molestias? Natus voluptatibus, iusto,
                  ut
                </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dataanalysis;
