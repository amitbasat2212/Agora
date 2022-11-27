import * as React from 'react';
import  { useState, } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';


import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  useDispatch } from 'react-redux';
import {
    addItemToStore,    
} from './agoraStoreSlice';




const theme = createTheme();

export  function ItemForm() {
  const dispatch = useDispatch();   
  const [item,setItem]=useState({
    id:0,
    price:0,
    product:"",
    categorey:"",   
    paurched:false,
    discription:"",
    image:""
    
  })

  const setItemInputesHandle = (evt)=>{
    setItem({
        ...item,
        [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit=()=>{
    if(item.price=="" || item.product=="" || item.discription=="" || item.categorey=="" ){
        alert("you have to fill all the fileds ")
    }    
    else if(isNaN(item.price)){
        alert("price is not right ")
    }else{
        item.id = Math.random().toString(16).slice(2)+item.product
        dispatch(addItemToStore(item))
        alert("the item was added ")
    }
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
            Add Item
          </Typography>
          <Box  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="product"
              label="product name"
              name="product"
              autoComplete="product"
              onChange={setItemInputesHandle}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="image"
              label="image "
              name="image"
              autoComplete="image"
              onChange={setItemInputesHandle}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="price "
              name="price"
              onChange={setItemInputesHandle}
              autoComplete="price"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="discription"
              label="discription "
              name="discription"
              onChange={setItemInputesHandle}
              autoComplete="discription"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="categorey"
              label="categorey"
              type="categorey"
              onChange={setItemInputesHandle}
              id="categorey"
              autoComplete="current-categorey"
            />
            
            
            <Button             
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              add item
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}