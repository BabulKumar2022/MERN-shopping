import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../responsive"


const Container = styled.div`
   height: 80px;
   background-color: blue; 
   ${mobile({backgroundColor: "red"})}
`


const Wrapper = styled.div`
padding: 0px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding: "10px 0px"})}
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left:25px;
padding: 5px;
cursor: pointer;
`
const Input = styled.input`
border: none;
padding:5px;
${mobile({width: "50px"})}

`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize: "20px"})}

`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.a`
font-size: 18px;
cursor: pointer;
text-decoration:none;
${mobile({display: "none"})}
`

const Center = styled.div`
flex: 1;
text-align: center;
`
const Right= styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent: "center"})}
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:15px;
color: white;
${mobile({fontSize: "10px", marginLeft:"10px"})}
`
const MenuItemLink = styled.a`
font-size:14px;
color: white;
margin-right:10px;
padding: 2px;
text-decoration:none;

`
const Cart = styled.div`


`
const Span1 = styled.span`
font-size: 2rem;
color: white;

`
const Span2 = styled.span`
padding: 0 3px;
background-color: red;
color: white;
font-weight: bold;
border-radius: 5px;
position: relative;
top: -15px;

`

const Navbar = ({setShow, size}) => {



  return (
    <Container>
        <Wrapper>
            <Left>
            <Language href="/" onClick={()=> setShow(true)}>HOME</Language>
            <SearchContainer>
            <Input placeholder='search'></Input>
             <Search style={{color:"gray", fontSize:"24px"}}></Search>
            </SearchContainer>
            </Left>
            <Center><Logo>BABUL</Logo></Center>
            <Right>
               <MenuItemLink href="/updateProduct">UPDATE PRODUCT</MenuItemLink>
               <MenuItemLink href="/addProduct">ADD PRODUCT</MenuItemLink>
                <MenuItemLink href="/register">REGISTER</MenuItemLink>
                <MenuItemLink href="/login">LOG IN</MenuItemLink>
                <MenuItem>
                  <Cart  onClick={()=> setShow(false)} >
                    <Span1 ><i className='fas fa-cart-plus'></i></Span1>
                    <Span2>{size}</Span2>
                  </Cart>
                </MenuItem>
            </Right>
        </Wrapper> 
    </Container>
  )
}

export default Navbar