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

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top:10px;
`;

const AddProduct = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/api/auth/products", {
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
    console.log(newUser);
  };

  return (
    <Container>
      <Wrapper>
        <Title>ADD A NEW PRODUCT</Title>
        <Form onSubmit={handleAddUser}>
          <Input
            type="text"
            name="title"
            id="name"
            placeholder="Title Name"
            onBlur={handleInputOnBlur}
            required
          />
          <Input
            type="text"
            name="desc"
            id="name"
            placeholder="Description"
            onBlur={handleInputOnBlur}
            required
          />
          <Input
            type="url"
            name="imgLink"
            id="lastName"
            placeholder="Insert Image Url"
            onBlur={handleInputOnBlur}
            required
          />

          <Input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            onBlur={handleInputOnBlur}
            required
          />
          <Input
            type="text"
            name="size"
            id="size"
            placeholder="Size"
            onBlur={handleInputOnBlur}
            required
          />
          <Input
            type="text"
            name="color"
            id="color"
            placeholder="Color"
            onBlur={handleInputOnBlur}
            required
          />
          <Input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            onBlur={handleInputOnBlur}
            required
          />

          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;
