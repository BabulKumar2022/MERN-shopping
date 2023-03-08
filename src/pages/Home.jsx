import React, { useState } from 'react'
import Amazon from '../components/Amazon'

import Announcement from '../components/Announcement'
import Cart1 from '../components/Cart1'
import Categories from '../components/Categories'
import Extra from '../components/Extra'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


import Slider from '../components/Slider'

const Home = () => {
  const [show, setShow] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick =(product)=>{
  
    const newCart= ([...cart, product]);
    setCart(newCart);
    // cart.push(product)
    console.log(product); 
  }


  return (
    <div className='container'>
        <Announcement/>
        <Slider></Slider>
        <Categories></Categories>
        {
        show ?<Amazon handleClick={handleClick}/>: <Cart1 cart={cart}/>
      }
        {/* <Products></Products> */}
        <Newsletter></Newsletter>
        <Extra></Extra>
        <Footer></Footer>

    </div>
  )
}

export default Home