import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./components/Layout";
import FoodForm from "./pages/menu/food/FoodForm";
import FoodDetail from "./pages/menu/food/FoodDetail";
import ProductForm from "./pages/menu/product/ProductForm";
import ProductDetail from "./pages/menu/product/ProductDetail";

import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import Join from "./pages/login/Join";
import JoinClear from "./pages/login/JoinClear";
import DrinkMenu from "./pages/drinkMenu/DrinkMenu";
import DrinkMenuDetail from "./components/DrinkMenu/DrinkMenuDetail";

import Notice from './pages/notice/Notice';
import LayoutSub from './components/LayoutSub';
import MyStabucks from './pages/myStabucks/MyStabucks';
import BeforeLogin from './pages/login/BeforeLogin';
import NoticeDetail from './components/notice/NoticeDetail';

import ScrollToTop from './components/ScrollToTop';
import MyCart from "./pages/mycart/MyCart";

function App() {
  return (
    <>
      <Router>
             <ScrollToTop />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/join" element={<Join />} />
            <Route path="/joinclear" element={<JoinClear />} />

            <Route path="/login" element={<Login />} />
            <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path="/notice/:noticeID" element={<NoticeDetail />} />
                        </Route>
            <Route path="/logout" element={<Logout />} />

<Route element={<LayoutSub />}></Route>

                        <Route path="/MyStabucks" element={<MyStabucks />} />
                        <Route path="/before" element={<BeforeLogin />} />
            
            <Route path="/drinkMenu">
              <Route index element={<DrinkMenu />} />
              <Route path=":category/:drinkID" element={<DrinkMenuDetail />} />
            </Route>
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
               <Route>
              <Route path="/myCart" element={<MyCart />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
