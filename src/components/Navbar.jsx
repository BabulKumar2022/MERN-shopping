import React from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Container = styled.div`
   height: 80px;
   background-color: blue; 
`


const Wrapper = styled.div`
padding: 0px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left:25px;
padding: 5px;
`
const Input = styled.input`
border: none;
padding:5px

`
const Logo = styled.h1`
font-weight: bold;

`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
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

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:15px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Language>ENG</Language>
            <SearchContainer>
            <Input></Input>
             <Search></Search>
          
            </SearchContainer>
            </Left>
            <Center><Logo>BABUL</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOG IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon color="" />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper> 
    </Container>
  )
}

export default Navbar