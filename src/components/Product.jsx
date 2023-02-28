import {  FavoriteBorderOutlined } from "@mui/icons-material"
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from "@mui/icons-material/Search";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
transition: all .5s ease;
cursor: pointer;
`
const Container = styled.div`
flex: 1;
margin: 5px;
min-width:280px;
height:350px;
display: flex;
align-items:center;
justify-content:center;
background-color: #e1fbfd;
position: relative;


&:hover ${Info}{
opacity:1;
}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color: white;
position: absolute;
opacity:.3;
`
const Image = styled.img`
height:75%

`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all .25s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}

`



const Product = ({item}) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}/>
      
      <Info>
        <Icon>
        <a href="/cart"><ShoppingCartIcon></ShoppingCartIcon> </a>
        </Icon>
        <Icon>
          <Search></Search>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined></FavoriteBorderOutlined>
        </Icon>
      </Info>

    </Container>
  )
}

export default Product