import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import MotherComponent from "./component/MotherComponent";
import FatherComponent from "./component/FatherComponent";
import Counter from "./counter";
import CounterClass from "./counterClass";
import NavbarComponent from "./component/frontend/NavbarComponent";
import HomeComponent from "./component/frontend/HomeComponent";
import AboutComponent from "./component/frontend/AboutComponent";

import LoginComponent from "./component/frontend/LoginComponent";
import RegisterComponent from "./component/frontend/RegisterComponent";

import ProductComponent from "./component/frontend/ProductComponent";
import AddProductComponent from "./component/frontend/product/AddProductComponent";
import ProductViewComponent from "./component/frontend/product/ViewProductComponent";
import EditProductComponent from "./component/frontend/product/EditProductComponent";
import SearchResultsPage from "./component/frontend/SearchResultComponent";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/mother" element={<MotherComponent />} />
        <Route path="/father" element={<FatherComponent />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterclass" element={<CounterClass />} />
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={<ProductComponent />} />
        <Route path="/products/create" element={<AddProductComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/product/view" element={<ProductViewComponent />} />
        <Route path="/product/edit/:id" element={<EditProductComponent />} />
        <Route path="/product/search/:search" element={<SearchResultsPage />} />

      </Routes>
      {/* <footer/> */}
    </Router>
  );
}

export default App;
