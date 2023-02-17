
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from '../components/Footer'
import { Add,  Remove } from "@mui/icons-material"
import { mobile } from "../responsive"
// import { Button } from "@mui/material"


const Container =styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({padding: "10px", flexDirection:"column"})}
`
const ImageContainer = styled.div`
flex:1;
`
const Image =styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height: "40vh"})}
`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding: "10px"})}
`
const Title =styled.h2`
font-weight:200;
`
const Desc =styled.p`
margin:20px 0px;
`
const Price =styled.span`
font-size:40px;
`
const FilterContainer = styled.div`
width:50%;
margin: 20px 0px;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})}

`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width:20px;
height: 20px;
border-radius:50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer =styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%"})}
`
const AmountContainer =styled.div`
display: flex;
align-items: center;
font-weight:700;
`
const Amount =styled.span`
width:40px;
height:40px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;


`
const Button =styled.button`
padding: 15px;
border:2px solid teal;
background-color: white;
cursor: pointer;
&:hover{
    background-color: #f2f4f4;
}
`
// const FilterContainer = styled.div``

const SingleProduct = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1YdpzlzApKDH-l6ynGxFJU5zSRkD8vHWFQ&usqp=CAU"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa officiis numquam corrupti molestiae omnis recusandae nam! Delectus ut aperiam corrupti. At reprehenderit optio laudantium.</Desc>
                <Price>$ 25</Price>
                <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>Xl</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>12</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD CART</Button>
            </AddContainer>
        
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default SingleProduct