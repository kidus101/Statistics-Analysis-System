import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ productName, productNumber }) => {
  return (
    < >
      <div className="flex  justify-between w-[50%] sm:w-[80%] py-12">
        <p className="md:text-xl text-lg flex  ">
          {" "}
          <Link to={`/product/${encodeURIComponent(productNumber)}`}>
            <button className=" mx-4 md:mx-6 ">{productName}</button>
          </Link>{" "}
          <span className="  text-[#68779E] mt-[7px]">
            <FaArrowRight />
          </span>{" "}
          <span className="text-[#68779E] ml-2"> | </span>
          <span className=" text-lg md:text-xl  ml-2 "> {productNumber} </span>
        </p>
        {/* <div className="mr-8 text-2xl text-[#df484a]">{direction}</div> */}
      </div>

      {/* <div className="border border-gray-200 h-px mt-2"></div> */}
    </>
  );
};

export default Card;
