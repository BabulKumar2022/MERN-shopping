
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
import { useEffect, useState } from "react";
import Amazon from "./components/Amazon";
import Cart1 from "./components/Cart1";




function App() {


  const [show, setShow] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick =(product)=>{
    if(cart.indexOf(product) !== -1) return;
    const newCart= ([...cart, product]);
    setCart(newCart);
    // cart.push(product)
    console.log(product); 
  };

  const handleChange = (product, d) =>{
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  // useEffect(() =>{
  //   console("cart change")
  // }, [cart]);


  return (
    <div className="">
      <Navbar setShow={setShow} size={cart.length}></Navbar>
      {
        show ?(<Amazon handleClick={handleClick}/>):(
           <Cart1 cart={cart} setCart={setCart} handleChange={handleChange}/>)
      }
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/updateProduct" element={<UpdateProduct/>}></Route>
          <Route path="/productList" element={<ProductList/>}></Route>
          <Route path="/edit/:id" element={<EditProduct/>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/singleProduct" element={<SingleProduct/>}></Route>

        </Routes>



    </div>
  );
}

export default App;
