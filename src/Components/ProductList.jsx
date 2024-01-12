import React, { useState ,useEffect } from "react";
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
                  data: [0, ...responseData.present_dates.map((data) => data.count)],
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
    console.log("graphDataArray" , graphDataArray)

  
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
        suggestedMax: 60, // Set the maximum value of the y-axis
        stepSize: 10, // Set the interval between labels on the y-axis
      },
    },
  };
 

  return (
    <div className="bg-[#F4F4F4] shadow-3xl ">
      <div className="flex justify-between px-28 bg-[#131A26]  py-10">
        <img
          className="bg-[#131A26] "
          src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
          alt=""
        />

        <div className="flex">
          <p className="flex justify-center items-center text-white text-3xl "> Service Status </p>
        </div>

      </div>
      <h1 className="ml-28 text-3xl font-bold my-10">Products List </h1>
      <div className=" container mx-auto bg-white">
        <ul className="container mx-auto">
        {data.map((data, index) => (
         
            <li key={index}>
              <Card
                productName={productData[index].productName}
                productNumber={productData[index].productNumber}
              />
              <GraphChat data={data} options={options} />
            </li>
          ))}
        </ul>
        <div className="border border-gray-200 h-px mt-2"></div>
      </div>
    </div>
  );
};

export default ProductList;
