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


