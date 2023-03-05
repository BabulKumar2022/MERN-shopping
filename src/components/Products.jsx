import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Product from "./Product"



const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`


const Products = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])
  
  return (
    <Container>
          {
        products.map(product =>(
          <Product product={product} key={product._id}></Product>
        ))
        }

    </Container>
  );
};

export default Products