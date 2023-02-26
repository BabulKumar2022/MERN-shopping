
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";
import UpdateProduct from "./pages/UpdateProduct";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import EditProduct from "./pages/EditProduct";



function App() {
  return (
    <div className="">
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/updateProduct" element={<UpdateProduct/>}></Route>
          <Route path="/productList" element={<ProductList/>}></Route>
          <Route path="/edit/:id" element={<EditProduct/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>

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
