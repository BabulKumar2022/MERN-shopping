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
  width: 30%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Login = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    // console.log(user);

    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleInputOnBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
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
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onBlur={handleInputOnBlur}
            required
          />
          <Button type="submit">LOGIN</Button>
          <Link>Do not you remember the password</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
