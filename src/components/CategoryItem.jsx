import styled from "styled-components";
import {mobile} from "../responsive"



const Container = styled.div`
flex: 1;
margin:3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
${mobile({height: "50vh"})}

`
const Info = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
color: black;
margin-bottom: 20px;

`
const Button = styled.a`
border: none;
padding:20px;
background-color: white;
color: black;
cursor: pointer;
font-wight: 600;
text-decoration: none;
`
const CategoryItem = ({product}) => {
  return (
    <Container>
        <Image src={product.imgLink} />
        <Info>
            <Title>{product.title}</Title>
            <Button href="/productList">SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem