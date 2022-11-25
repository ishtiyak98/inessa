import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

export const NavStateContext = createContext("navState");

function App() {
  const [cartState, setCartState] = useState(false);
  console.log(cartState);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <NavStateContext.Provider value={{ cartState: cartState, setCartState }}>
              <Home></Home>
            </NavStateContext.Provider>
          }
        ></Route>
        <Route path="/shop" element={<Home></Home>}></Route>
        <Route path="/exclusive" element={<Home></Home>}></Route>
        <Route path="/product-category/women" element={<Home></Home>}></Route>
        <Route path="/product-category/men" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
