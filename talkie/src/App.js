import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponent from "./component/NavbarComponent";
import HomeComponent from "./component/HomeComponent";
import RegisterComponent from "./component/registerlogin/RegisterComponent";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<RegisterComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
