import styled from "styled-components"
import { mobile } from "../responsive"

const Container =styled.div`
width:100vw;
height:100vh;
background:  url("http://wallpaperset.com/w/full/f/8/8/492379.jpg") center;
background-size:cover;
display:flex;
align-items: center;
justify-content: center;
`

const Wrapper =styled.div`
width:30%;
padding:20px;
background-color: white;
${mobile({width: "75%"})};
`
const Title =styled.h2`
font-size:24px;
font-weight:300;
`
const Form =styled.form`
display:flex;
flex-direction: column;
`
const Input =styled.input`
flex:1;
min-width:40%;
margin:  10px  0px;
padding:10px;
`
const Link =styled.a`
margin: 5px 0px;
font-size:12px;
text-decoration: underline;
cursor: pointer;
`
const Button =styled.button`
width:40%;
border: none;
padding:15px 20px;
background-color: teal;
color:white;
cursor: pointer;
`
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
            <Input placeholder="user name"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>Do not you remember the password</Link>
            <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login