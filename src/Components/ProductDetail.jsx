import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState(null);
    const { productNumber } = useParams();
  
  

  useEffect(() => {
    const fetchData = async () => {
      const payload = {
        date_type: "seven_days",
        date: "06-01-2024",
      };

      try {
        const response = await axios.post(
          "https://100105.pythonanywhere.com/api/v3/experience_report_services/?type=user_experiences_count",
          { ...payload, product_number: productNumber }
          );

          const responseData = response.data;

          console.log("Product Details Fetching" ,responseData)
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, [productNumber]);

  return (
    <div className="container mx-auto shadow-lg mt-20">
      {productDetails ? (
        <div className="py-10 space-y-10">
          <h2>Data: {productNumber}</h2>
          <h2>Count: {productDetails.not_present_dates[0].count}</h2>
          <h2>Date: {productDetails.not_present_dates[0].date}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={ () => fetchData() }></button>
    </div>
  );
};

export default ProductDetails;