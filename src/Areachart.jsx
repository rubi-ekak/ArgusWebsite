import React from 'react'
import Chart from "react-apexcharts";


const Areachart = () => {
  return (
    <section className=" ">
      <div className="w-96 border-solid border-2 border-gray-200 rounded-md shadow-2xl ">
        <div className="bg-black flex justify-between items-center h-12 rounded-t-md">
          <div className="px-2">
            <h1 className="text-white text-xl font-bold">Sales</h1>
          </div>
          <div className="flex  items-center w-20">
            <span className="h-2 w-2 bg-red-700 p-1 m-1 rounded-full"></span>
            <span className="h-2 w-2 bg-yellow-700 p-1 m-1 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-700 p-1 m-1 rounded-full"></span>
          </div>
        </div>
        <h1 className="font-bold p-4">Net Sales</h1>
        <div className=" mt-2 flex  flex-col">
          <Chart
            type="area"
            width={350}
            height={230}
            series={[
              {
                name: "company1",
                data: [0, 90, 40, 30,80,90],
              },
              
            ]}
            options={{
              colors: ["#f59f58"],
            }}
          ></Chart>

         
        </div>
      </div>
    </section>
  )
}

export default Areachart
