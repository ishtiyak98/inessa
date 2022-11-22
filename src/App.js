import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Home></Home>}></Route>
        <Route path="/exclusive" element={<Home></Home>}></Route>
        <Route path="/product-category/women" element={<Home></Home>}></Route>
        <Route path="/product-category/men" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
