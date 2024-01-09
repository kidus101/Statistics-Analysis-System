import React, { useState } from "react";
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

  const handleClick = async (productNumber) => {
    const payload = {
      date_type: "seven_days",
      date: "06-01-2024",
    };

    console.log("productNumber", productNumber);

    try {
      const response = await axios.post(
        "https://100105.pythonanywhere.com/api/v3/experience_report_services/?type=user_experiences_count",
        { ...payload, product_number: productNumber }
      );

      const responseData = response.data;

      console.log("responseData", responseData);

      // No navigation needed since we're using Link component
    } catch (error) {
      console.error("Error occurred while making the API call:", error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://100105.pythonanywhere.com/api/v3/experience_report_services/?type=user_experiences_count",
  //       {
  //         date_type: "seven_days",
  //         date: "06-01-2024",
  //         product_number: "UXLIVINGLAB001",
  //       }
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // fetchData();

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sinusoidal",
        data: [0, 150, 120, 250, 280, 120, 210, 180, 120, 200, 150, 200],
        fill: false,
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        borderColor: "rgba(0, 0, 255, 0.5)",
      },
    ],
  };

  return (
    <div className="bg-[#F4F4F4] shadow-3xl ">
      <div className="flex justify-between px-28 bg-[#131A26]  py-10">
        <img
          className="bg-[#131A26] "
          src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png"
          alt=""
        />

        <div className="text-xl align-center text-white">Service status</div>
      </div>
      <h1 className="ml-28 text-3xl font-bold my-10">Products List </h1>
      <div className=" container mx-auto bg-white">
        <ul className="container mx-auto">
          {productData.map((product) => (
            <li key={product.productNumber}>
              <Card
                productName={product.productName}
                productNumber={product.productNumber}
              />
              <GraphChat data={data} />
            </li>
          ))}
        </ul>
        <div className="border border-gray-200 h-px mt-2"></div>
      </div>
    </div>
  );
};

export default ProductList;
