import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SiginUp.jsx"; // Fixed the spelling of "SignUp"
import Dashboard from "./components/Dashboard.js";
import AddProduct from "./components/AddProduct.js";
import Home from "./components/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/products" element={<AddProduct />} />
        <Route path="/listofProducts" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
