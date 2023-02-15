import styled from "styled-components"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Container = styled.div`
width:100%;
height: 100vh;
display: flex;
background-color: coral;
position: relative;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:white;
border-radius:50%;
display: flex;
align-items:center;
justify-content: center;
position: absolute;
top:0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: .5;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left"><KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon></Arrow>
        <Arrow direction="right"><KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Arrow>
    </Container>
  )
}

export default Slider