import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Extra from '../components/Extra'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className='container'>
        <Announcement/>

        <Slider></Slider>
        <Categories></Categories>
        <Products></Products>
        <Newsletter></Newsletter>
        <Extra></Extra>
        <Footer></Footer>

    </div>
  )
}

export default Home