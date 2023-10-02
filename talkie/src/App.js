import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponent from "./component/NavbarComponent";
import HomeComponent from "./component/HomeComponent";
import RegisterComponent from "./component/registerlogin/RegisterComponent";
import LoginComponent from "./component/registerlogin/LoginComponent";
import ProfileComponenet from "./component/registerlogin/ProfileComponent";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/profile" element={<ProfileComponenet/>}/>
        <Route path="/profile/view" element={<ProfileComponenet/>}/>
      </Routes>
    </Router>
  );
}

export default App;
