import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import ProductContext from "./context/ProductContext";
import AllPerfumes from "./pages/AllPerfumes/AllPerfumes";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ViewCartDetails from "./pages/ViewCartDetails/ViewCartDetails";
import WomenPerfume from "./pages/WomenPerfume/WomenPerfume";

function App() {
  return (
    <>
      <ProductContext>
        <ToastProvider
          placement="bottom-right"
          autoDismiss
          autoDismissTimeout={3000}
          transitionDuration="400"
        >
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/shop" element={<AllPerfumes></AllPerfumes>}></Route>
            <Route path="/exclusive" element={<Home></Home>}></Route>
            <Route
              path="/women"
              element={<WomenPerfume></WomenPerfume>}
            ></Route>
            <Route path="/product-category/men" element={<Home></Home>}></Route>
            <Route
              path="/product_:id"
              element={<ProductDetails></ProductDetails>}
            ></Route>
            <Route path="/cart" element={<ViewCartDetails />}></Route>
          </Routes>
        </ToastProvider>
      </ProductContext>
    </>
  );
}

export default App;
