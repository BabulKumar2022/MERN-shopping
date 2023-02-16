
import { Send } from '@mui/icons-material'

import styled from 'styled-components'

const Container = styled.div`
height:60vh;
background-cole: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1``
const Description = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``

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