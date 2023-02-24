import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("http://wallpaperset.com/w/full/f/8/8/492379.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  
  const [user, setUser] = useState({});


  const handleAddUser = (event) => {
    event.preventDefault();
    // console.log(user);

    fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };



  const handleInputOnBlur = (event) =>{
    const field = event.target.name;
    const value = event.target.value;
   const newUser = {...user}
   newUser[field] = value;
   setUser(newUser);
   
  };




  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleAddUser}>
          <Input
            type="text"
            name="username"
            id="name"
            placeholder="User Name"
            onBlur={handleInputOnBlur}
            required
          />
          <Input
            type="email"
            name="email"
            id="lastName"
            placeholder="email"
            // value={user.name}
            onBlur={handleInputOnBlur}
            required
          />

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onBlur={handleInputOnBlur}
            required
           
          />
         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
