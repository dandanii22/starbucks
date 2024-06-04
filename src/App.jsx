import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./components/Layout";
import FoodForm from "./pages/menu/food/FoodForm";
import FoodDetail from "./pages/menu/food/FoodDetail";

import ProductForm from "./pages/menu/product/ProductForm";
import ProductDetail from "./pages/menu/product/ProductDetail";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route>
              <Route path="/food" element={<FoodForm />} />
              <Route path="/food/:category/:foodID" element={<FoodDetail />} />
            </Route>
            <Route>
              <Route path="/product" element={<ProductForm />} />
              <Route
                path="/product/:category/:productID"
                element={<ProductDetail />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
