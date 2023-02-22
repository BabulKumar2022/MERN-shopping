
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";



function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      {/* <Home></Home> */}
      {/* <ProductList></ProductList> */}
      {/* <SingleProduct></SingleProduct> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Cart></Cart> */}


    </div>
  );
}

export default App;
