import styled from "styled-components"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
width:100%;
height: 100vh;
display: flex;
// background-color: coral;
position: relative;
overflow: hidden;
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
z-index: 2;
`
const Wrapper = styled.div`
display: flex;
transition: all 1.5s ease;
transform : translateX(${(props)=> props.slideIndex * -100}vw);

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=> props.bg};
`
const ImagContainer = styled.div`
flex: 1;
height: 100%;
`
const Image = styled.img`
height: 80%;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title= styled.h1`
  font-size: 70px
`
const Desc= styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing: 3px
`
const Button= styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;
cursor: pointer;
`
const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick =(direction) =>{
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <Container>
          <Arrow direction="left" onClick={()=>handleClick("left")}><KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon></Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=>
                      <Slide bg={item.bg}>
                      <ImagContainer>
                          <Image src={item.img}></Image>
                      </ImagContainer>
                      <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc> {item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                      </InfoContainer>
                  </Slide>
          )}
            {/* <Slide bg="f5fafd">
                <ImagContainer>
                    <Image src="https://media.istockphoto.com/id/1179065908/photo/woman-holding-credit-card-shopping-bags-consumerism-lifestyle-studio-shot.webp?s=1024x1024&w=is&k=20&c=9wfRdVO1aUsdv_nGH5TYmXemqZz9sTyvudG5A_XzA3Q="></Image>
                </ImagContainer>
                <InfoContainer>
                  <Title>Summer Sale</Title>
                  <Desc> Don't compromise on style and Free!</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="fcf1ed">
                <ImagContainer>
                    <Image src="https://media.istockphoto.com/id/922511982/photo/young-stylish-asian-woman-carrying-shopping-bags-and-holding-credit-card-beautiful-fashionable.webp?s=1024x1024&w=is&k=20&c=Yh4V_GJk7INLQrKdgL4yNeKfA3slq1C0d4kk5-s34xA="></Image>
                </ImagContainer>
                <InfoContainer>
                  <Title>Summer Sale-2</Title>
                  <Desc> Don't compromise on style-2</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="fbf0f4">
                <ImagContainer>
                    <Image src="https://media.istockphoto.com/id/1354994976/photo/portrait-of-beautiful-happy-smiling-girl-holding-posng-with-many.jpg?s=1024x1024&w=is&k=20&c=_hJtxDvmuVti5Il7VBipiLCuJpUCDRjMzL79T_Vt9IU="></Image>
                </ImagContainer>
                <InfoContainer>
                  <Title>Winter Sale-3</Title>
                  <Desc> Don't compromise on style-3</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide> */}
        </Wrapper>
          <Arrow direction="right" onClick={()=>handleClick("right")}><KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Arrow>
    </Container>
  )
}

export default Slider