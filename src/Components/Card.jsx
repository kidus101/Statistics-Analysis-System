import React from "react";
import { FaArrowRight } from "react-icons/fa6";


const Card = ({ title, percentage, direction }) => {
  return (
      <div className="   mx-20  ">
        <div className="flex justify-between ml-8 py-12">
          <p className="text-2xl flex  ">
            {" "}
            <a href="#">{title}</a>{" "}
            <span className="mx-2 text-[#68779E] mt-2">
              <FaArrowRight />
            </span>{" "}
            <span className="text-[#68779E] ml-2"> | </span>
            <span className="text-[#3bd671] text-2xl ml-2 "> {percentage} %</span>
          </p>
          <div className="mr-8 text-2xl text-[#df484a]">{direction}</div>
        </div>
        
 
        <div className="border border-gray-200 h-px mt-2"></div>
      </div>
   );
};

export default Card;
