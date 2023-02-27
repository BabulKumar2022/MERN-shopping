import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.h1`
text-align: center;
`




// Update
const UpdateProduct = () => {
const [products, setProducts] = useState([]);

useEffect(() =>{
  fetch('http://localhost:5000/api/products')
  .then(res =>res.json())
  .then(data => setProducts(data));
},[]);


// Delete
const handleDelete = _id =>{
  console.log(_id)
  const agree =window.confirm(`Are You Sure You want to delete:${_id}`)
  if(agree){
fetch(`http://localhost:5000/api/products/${_id}`,{
  method: "DELETE"
})
.then(res => res.json())
.then(data => console.log(data));
  }
}
  return (
    <div>
      <Container>
      <h1 >UpdateProduct: {products.length}</h1> 
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id:</TableCell>
          <TableCell>Title:</TableCell>
          <TableCell>Desc:</TableCell>
          <TableCell>Photo:</TableCell>
          <TableCell>Category:</TableCell>
          <TableCell>Size</TableCell>
          <TableCell>Color:</TableCell>
          <TableCell>Price:</TableCell>
          <TableCell>Edit-----and-----Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          products.map(product =>(
            <TableRow>
              <TableCell>{product._id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.desc}</TableCell>
             
             <TableCell size="small"><img style={{width:100}} src={product.imgLink} alt="photo" /> </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.size}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
               
                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${product._id}`}>EDIT</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(product._id)}>DELETE</Button>
                </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
      </Container>
     
      </div>
  )
}

export default UpdateProduct