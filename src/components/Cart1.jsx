import React, { useEffect, useState } from 'react'
import styled from 'styled-components';




const Container = styled.div`

`
const CartBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const CartImage = styled.div`

`
const Image= styled.img`
display: flex;
width: 200px;
`
const P = styled.p`

`
const CartButton = styled.div`

`
const Button = styled.button`

`
const RemoveButton = styled.div`

`
const Span = styled.span`

`
const Total = styled.div`
display: flex;
justify-content: space-between;

`






const Cart1 = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id)=>{
    const arr = cart.filter((product)=> product._id !== id);
    setCart(arr);
    handlePrice()
  };

  const handlePrice = () =>{
    let ans = 0;
    cart.map((product) => (ans += product.amount * product.price));
    setPrice(ans)
 
  }
  useEffect(()=>{
    handlePrice()
  })



  return (
    <div>Cart1 : {cart.length}
    <Container>
      {
        cart.map((product)=>(
          <CartBox key={product._id}>
            <CartImage>
              <Image  src={product.imgLink} alt=""></Image>
              <P>{product.title}</P>
              <p>Price: {product.price}</p>
            </CartImage>
            <CartButton>
              <Button onClick={() => handleChange(product, 1)}>+</Button>
              <Button>{product.amount}</Button>
              <Button onClick={() => handleChange(product, -1)}>-</Button>
            </CartButton>
            <RemoveButton>
              <Span>{product.price}</Span>
              <Button onClick={() => handleRemove(product._id)}>REMOVE</Button>
            </RemoveButton>
          </CartBox>
          
        ))
      }
      <Total>
        <Span> Total price of your cart</Span>
        <Span> TotalTaka: {price}</Span>
      </Total>
    </Container>
    
    </div>
  )
}

export default Cart1