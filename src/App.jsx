import ProductDetails from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productNumber" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React from "react";
// import Card from "./Components/Card";

// const App = () => {
//   const cardData = [
//     {
//       title: "Amazon Store",
//       percentage: "22.268",
//       direction: "Down",
//     },
//     {
//       title: "DoWell AU",
//       percentage: "0.000",
//       direction: "Down",
//     },
//     {
//       title: "DoWell Co UK",
//       percentage: "0.000",
//       direction: "Down",
//     },
//     {
//       title: "DoWell Kenya",
//       percentage: "0.000",
//       direction: "Down",
//     },
//     {
//       title: "Samanta Australia",
//       percentage: "0.000",
//       direction: "Down",
//     },
//     {
//       title: "Samanta SG",
//       percentage: "0.000",
//       direction: "Down",
//     },
//     {
//       title: "Samanta Tech",
//       percentage: "0.000",
//       direction: "Down",
//     },
//     {
//       title: "AI Writer",
//       percentage: "100.00",
//       direction: "Operational",
//     },
//     {
//       title: "Apple Store",
//       percentage: "100.00",
//       direction: "Operational",
//     },
//     {
//       title: "Chrome store",
//       percentage: "100.00",
//       direction: "Operational",
//     },
//     {
//       title: "DoWell Chat",
//       percentage: "99.650",
//       direction: "Operational",
//     },
//     {
//       title: "DoWell COM",
//       percentage: "100.00",
//       direction: "Operational",
//     },
//     {
//       title: "DoWell DE",
//       percentage: "100.00",
//       direction: "Operational",
//     },
//     {
//       title: "DoWell India",
//       percentage: "100.00",
//       direction: "Operational",
//     },
//     {
//       title: "Dowell Net",
//       percentage: "100.00",
//       direction: "Operational",
//     },
//   ];
//   return (
//     <div className="  bg-[#FBFBFB] ">
//       {/* Services */}
//       <div className="text-4xl p-4 pt-10 font-bold ml-40">Services</div>

//       {/* Reusable component */}
//       <div className="  mx-auto w-[80%] shadow-md   bg-white">
//         {cardData.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             percentage={card.percentage}
//             direction={card.direction}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
