import React from 'react'
import styled from "styled-components";



const Container = styled.div`
flex: 1;
width: 80%;
margin: auto;
margin-top:5%;
display: flex;
align-items:center;
justify-content:center;

`

const Image = styled.img`
height:80%;

`
const Details  = styled.div`
  
`
const Cards = styled.div`
width: 250px;
`
const ImageBox = styled.div`
width:300px;
height:300px;
`
const Button = styled.button`
background-color: blue;

`

const Card = ({product, handleClick}) => {
  
  return (
    <Container>
        <Cards>
            <ImageBox>
                <Image src={product.imgLink} />
            </ImageBox>
            <Details>
                <p>Price: {product.price}</p>
                <p>{product.title}</p>
               
                <Button onClick={() => handleClick(product)}>Add to cart</Button>
            </Details>
        </Cards>
    </Container>
    
  )
}

export default Card