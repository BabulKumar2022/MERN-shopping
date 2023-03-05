import styled from "styled-components"
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive"
import React, { useEffect, useState } from 'react'

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding: "10px", flexDirection: "column"})};

`

const Categories = () => {
  const [products, setProducts] = useState([]);

useEffect(() =>{
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
  
  return (
    <Container>
        {
        products.slice(0, 3).map(product =>(
        <CategoryItem product={product} key={product._id}></CategoryItem>
       ))
      }
    </Container>
  )
}

export default Categories;