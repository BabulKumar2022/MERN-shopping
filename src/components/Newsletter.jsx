
import { Send } from '@mui/icons-material'

import styled from 'styled-components'

const Container = styled.div`
height:60vh;
background-cole: #edf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
font-size:70px
`
const Description = styled.div`
font-size:24px;
font-wight:300;
margin-bottom:40px;

`
const InputContainer = styled.div`
width: 50%;
height: 40%
background-color: white;
display:flex;
justify-content: space-between;
border: 1px solid lightgray;
`
const Input = styled.input`
border: none;
flex:8;
padding: 15px;
`
const Button = styled.button`
flex:1;
border: none;
background-color: teal;
color: white;
cursor: pointer;

`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>
            Get timely update from your favorite product
        </Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send></Send>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter