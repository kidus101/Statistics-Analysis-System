import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import GraphChat from "./GraphChart";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const productData = [
    {
      productName: "SAMANTA CONTENT EVALUATOR",
      productNumber: "UXLIVINGLAB001",
    },
    {
      productName: "WORLD PRICE INDICATOR",
      productNumber: "UXLIVINGLAB002",
    },
    {
      productName: "LEGALZARD",
      productNumber: "UXLIVINGLAB003",
    },
    {
      productName: "LOCATION SPECIFIC SEARCH",
      productNumber: "UXLIVINGLAB004",
    },
    {
      productName: "WEBSITE CRAWL",
      productNumber: "UXLIVINGLAB005",
    },
    {
      productName: "SEARCH IN LIVINGLAB",
      productNumber: "UXLIVINGLAB006",
    },
  ];

  const graphData = []; // Initialize graphData as an empty array

  const [data, setData] = useState(graphData); // Use data instead of graphData

  useEffect(() => {
    const fetchData = async () => {
      const payload = {
        date_type: "seven_days",
        date: "11-01-2024",
      };

      const graphDataArray = [];

      for (const product of productData) {
        try {
          const response = await axios.post(
            "https://100105.pythonanywhere.com/api/v3/experience_report_services/?type=user_experiences_count",
            { ...payload, product_number: product.productNumber }
          );

          const responseData = response.data;

          const data = {
            productName: product.productName,
            labels: [0, ...responseData.present_dates.map((data) => data.date)],
            datasets: [
              {
                label: product.productName,
                data: [
                  0,
                  ...responseData.present_dates.map((data) => data.count),
                ],
                fill: false,
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                borderColor: "rgba(0, 0, 255, 0.5)",
              },
            ],
          };

          graphDataArray.push(data);
        } catch (error) {
          console.error("Error occurred while fetching data:", error);
        }
      }
      console.log("graphDataArray", graphDataArray);

      setData(graphDataArray); // Update the state with the fetched data
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("data", data); // Log the data state when it changes
  }, [data]);

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Set this property to true to always start the y-axis from 0
        suggestedMax: 60,
        stepSize: 10,
      },
    },
  };

  return (
    <div className="bg-[#F4F4F4] h-full ">
      <div className="flex justify-center overflow-hidden h-[150px] px-28 sm:px-28 bg-[#131A26]  py-3">
        <img
          className="bg-[#131A26]  "
          src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
          alt=""
        />

        {/* <div className="flex">
        <p className=" justify-center items-center text-white text-3xl hidden sm:flex"> Service Status </p>
      </div> */}
      </div>
      <h1 className="pl-4 sm:ml-40 text-3xl font-bold my-4">Products List </h1>
      <div className="container  my-4 mx-auto overflow-hidden bg-white">
        <ul className="flex flex-wrap   flex-col sm:flex-row">
          {data.map((data, index) => (
            <li className="w-full  border shadow-xl my-2   border-slate-100   sm:w-1/2  p-[10px]" key={index}>
              <div className="rounded-lg ">
                <Card
                  productName={productData[index].productName}
                  productNumber={productData[index].productNumber}
                />
              </div>
              <div className="mt-4">
                <GraphChat data={data} options={options} />
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="border border-gray-200 h-px mt-2"></div> */}
      </div>
    </div>
  );
};

export default ProductList;
