import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./components/Layout";
import FoodForm from "./pages/menu/food/FoodForm";
import FoodDetail from "./pages/menu/food/FoodDetail";
import ProductForm from "./pages/menu/product/ProductForm";
import ProductDetail from "./pages/menu/product/ProductDetail";

import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Logout from './pages/login/Logout';
import Join from './pages/login/Join';
import JoinClear from './pages/login/JoinClear';
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
               <Route index element={<Main />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/joinclear" element={<JoinClear />} />
                       

                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
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
