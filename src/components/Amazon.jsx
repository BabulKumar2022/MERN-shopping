import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Cart from '../pages/Cart';
import Card from './Card';


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`


const Amazon = ({handleClick}) => {


    const [products, setProducts] = useState([]);
 

    useEffect(() =>{
        fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    //----------------------------------//
   

  
   
    
  return (
    <div>
        <h1 style={{textAlign: "center"}}>AMAZON  :</h1>
      
        <Container>
        {
        products.map(product =>(
          <Card product={product} key={product._id} handleClick={handleClick}></Card>
        ))
        }
        </Container>
    </div>
    
  )
}

export default Amazon