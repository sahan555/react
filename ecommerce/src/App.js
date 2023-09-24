import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import MotherComponent from "./component/MotherComponent";
import FatherComponent from "./component/FatherComponent";
import Counter from "./counter";
import CounterClass from "./counterClass";
import NavbarComponent from "./component/frontend/NavbarComponent";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/mother" element={<MotherComponent />} />
        <Route path="/father" element={<FatherComponent />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterclass" element={<CounterClass />} />
      </Routes>
      {/* <footer/> */}
    </Router>
  );
}

export default App;
