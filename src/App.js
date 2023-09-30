import "./App.css";
import Layout from "./components/layout/Layout.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/login_page/LoginPage.js";
import RegisterPage from "./pages/register_page/RegisterPage";
import About from "./pages/about/About.js";
import Blog from "./pages/tintuc/Blog.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product/Product";
import LienHe from "./pages/contact/LienHe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Component={HomePage} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<Layout Component={Product} />} />
        <Route path="/blog" element={<Layout Component={Blog} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<Layout Component={About} />} />
        <Route path="/contact" element={<Layout Component={LienHe} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
