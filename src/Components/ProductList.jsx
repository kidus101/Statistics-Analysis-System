import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

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

  return (
    <div >
      <div className="container mx-auto justify-center">
      <img src="https://psp-logos.uptimerobot.com/logos/2021049-1676548510.png" alt="" />

      </div>
      <h1 className="ml-28 text-3xl font-bold my-10">Product List </h1>
      <ul className="container shadow-lg mx-auto">
        {productData.map((product) => (
          <li key={product.productNumber}>
             <Card productName={product.productName}  productNumber={product.productNumber} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
