import React from "react";
import Chart from "react-apexcharts";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const DataChart = () => {
  return (
    <section className=" ">
      <div className="w-96 border-solid border-2 border-gray-200 rounded-md shadow-2xl ">
        <div className="bg-black flex justify-between items-center h-12 rounded-t-md">
          <div className="px-2">
            <h1 className="text-white text-xl font-bold">Data Analaysis</h1>
          </div>
          <div className="flex  items-center w-20">
            <span className="h-2 w-2 bg-red-700 p-1 m-1 rounded-full"></span>
            <span className="h-2 w-2 bg-yellow-700 p-1 m-1 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-700 p-1 m-1 rounded-full"></span>
          </div>
        </div>
        <h1 className="font-bold p-4">Monthly Sales</h1>
        <div className=" mt-2 flex  flex-col">
          <Chart
            type="bar"
            width={330}
            height={210}
            series={[
              {
                name: "company1",
                data: [100, 200, 232, 132, 422, 132],
              },
              {
                name: "company2",
                data: [100, 200, 232, 130, 420, 14],
              },
            ]}
            options={{
              colors: ["#0320fc", "#99c2bb"],
            }}
          ></Chart>

          <div className="border-solid  border-gray-200 flex items-center text-slate-500">
            <p className="p-2 text-slate-500">This months</p>
            <span><KeyboardArrowUpOutlinedIcon/></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataChart;
