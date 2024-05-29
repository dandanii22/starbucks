import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main/Main";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
