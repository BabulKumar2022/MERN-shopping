import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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


const EditProduct = () => {

    const {id} = useParams();
    useEffect(() =>{
        fetch(`http://localhost:5000/api/products/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[]);


  // send data to server
    const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
  
    console.log(user);

    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Product updated successfully');
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
        <Title>EDIT THIS PRODUCT: {id}</Title>
        <Form onSubmit={handleAddUser}>
          <Input
            type="text"
            name="title"
            id="name"
            value={user.title}
            placeholder="Title Name"
            onChange={handleInputOnBlur}
            required
          />
          <Input
            type="text"
            name="desc"
            value={user.desc}
            id="name"
            placeholder="Description"
            onChange={handleInputOnBlur}
            required
          />
          <Input
            type="url"
            name="imgLink"
            value={user.imgLink}
            id="lastName"
            placeholder="Insert Image Url"
            onChange={handleInputOnBlur}
            required
          />

          <Input
            type="text"
            name="category"
            value={user.category}
            id="category"
            placeholder="Category"
            onChange={handleInputOnBlur}
            required
          />
          <Input
            type="text"
            name="size"
            id="size"
            value={user.size}
            placeholder="Size"
            onChange={handleInputOnBlur}
            required
          />
          <Input
            type="text"
            name="color"
            value={user.color}
            id="color"
            placeholder="Color"
            onChange={handleInputOnBlur}
            required
          />
          <Input
            type="number"
            name="price"
           value={user.price}
            id="price"
            placeholder="Price"
            onChange={handleInputOnBlur}
            required
         
          />

          <Button type="submit">UPDATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default EditProduct