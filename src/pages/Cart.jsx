import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'


const Container = styled.div`
`
const Title = styled.h2`
font-weight:300;
text-align: center;
`
const Wrapper = styled.div`
padding:20px;
${mobile({padding: "10px"})}
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:20px;
`
const TopButton =styled.button`
padding: 10px;
font-weight: 600;
cursor:pointer;
border: ${props=>props.type === "filed" && "none"};
background-color: ${props=>props.type === "filed" ? "black" : "transparent"};
color: ${props=>props.type === "filed" && "white"};
`
const TopTexts =styled.div`
${mobile({display: "none"})}
`
const TopText =styled.span`
text-decoration: underline;
cursor:pointer;
margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const Info =styled.div`
flex:3;
`
const Summary=styled.div`
flex:1;
background-color: red;
border: .5px solid lightgray;
border-radius:10px;
padding: 20px;
height:50vh;
`
const SummeryTitle =styled.h2`
font-weight:300;
`
const SummeryItem =styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=> props.type === "total" && "500"};
font-size: ${props=> props.type === "total" && "24px"};
`
const SummeryItemText =styled.span`

`
const SummeryItemPrice =styled.span`

`
const Button =styled.button`
width:100%;
padding:10px;
background-color: black;
color: white;
font-weight:600;
cursor: pointer;
`

const Product =styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection: "column"})}
`
const ProductDetail =styled.div`
flex:2;
display:flex;

`
const Image =styled.img`
width:200px;
`
const Detail =styled.div`
padding:20px;
display: flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName =styled.span``
const ProductId =styled.span``
const ProductColor =styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
`
const ProductSize =styled.span``
const PriceDetail =styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items: center;
margin-bottom:20px;

`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
${mobile({marginBottom: "20px"})}
`
const Hr = styled.hr`
background-color: #eee;
height:1px;
`
const Cart = () => {
  return (
    <Container>
        {/* <Navbar/>
        <Announcement/> */}
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>Continue shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filed">Checkout now</TopButton>
            </Top>
            <Bottom>
                <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://m.media-amazon.com/images/I/61eNP-tmM9L._AC_UX522_.jpg"/>
                        <Detail>
                            <ProductName><b>Product: </b> JESSE THUNDER SHOES</ProductName>
                            <ProductId><b>ID: </b> 25654DE0179</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> XL</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>21</ProductAmount>
                        <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$: 20</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr></Hr>
                <Product>
                    <ProductDetail>
                        <Image src="https://m.media-amazon.com/images/I/71t8EczQIuL._AC_UX385_.jpg"/>
                        <Detail>
                            <ProductName><b>Product: </b> JESSE THUNDER SHOES</ProductName>
                            <ProductId><b>ID: </b> 25654DE0179</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b> XL</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add/>
                        <ProductAmount>21</ProductAmount>
                        <Remove/>
                      </ProductAmountContainer>
                      <ProductPrice>$: 20</ProductPrice>
                    </PriceDetail>
                </Product>
                </Info>
                <Summary>
                    <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                    <SummeryItem>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummeryItemPrice>$ 50</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Shipping Discount</SummeryItemText>
                        <SummeryItemPrice>$ -20</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem type="total">
                        <SummeryItemText >Total</SummeryItemText>
                        <SummeryItemPrice>$ 180</SummeryItemPrice>
                    </SummeryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart