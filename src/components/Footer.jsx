import { Email, Facebook, Instagram,  Phone, Pinterest, Room, RoomOutlined, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
display: flex;
background-color: teal;
${mobile({flexDirection: "column"})}

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo =styled.h1`
`
const Desc =styled.p`
margin: 20px 0px;
color:white;
`
const SocialContainer =styled.div`
display: flex;
`
const SocialIcon =styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right:20px;

`

const Center = styled.div`
flex: 1;
padding:20px;
${mobile({display: "none"})}
`
const Title =styled.h3`
margin-bottom:30px;

`
const List = styled.ul`
margin: 0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
cursor:pointer;
color:white;
`
const Right = styled.div`
flex: 1;
padding:20px;
${mobile({backgroundColor: "gray"})}
`
const ContactItem =styled.div`
margin-bottom:20px;
color:white;
display:flex;
align-items:center;

`
const PaymentImg =styled.img`
height:50%
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>BABUL</Logo>
            <Desc>
            There are many variation of passages 
            of Lorem ipsum dolor sit amet. Lorem
             ipsum dolor sit, amet consectetur 
             adipisicing elit. Molestiae, nam.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook></Facebook>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram></Instagram>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter></Twitter>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Pinterest></Pinterest>
            </SocialIcon>
        </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man fashion</ListItem>
                <ListItem>Woman fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}></Room>  538 Ramkrisna road, south Novel Tower 2412
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}}></Phone> Phone: 0170000000, Tel:0245632, Fax:65234
            </ContactItem>
            <ContactItem>
              <Email style={{marginRight:"10px"}}></Email>  Email: babulkumar96Yahoo.com
            </ContactItem>
            <ContactItem>
             <PaymentImg src="https://e7.pngegg.com/pngimages/659/303/png-clipart-logo-brand-product-design-money-bag-payment-method-text-logo-thumbnail.png"></PaymentImg>
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer