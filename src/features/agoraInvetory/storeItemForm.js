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
    price:0,
    product:"",
    categorey:"",
    description:""
  })

  const setItemInputesHandle = (evt)=>{
    setItem({
        ...item,
        [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit=()=>{    
    dispatch(addItemToStore(item))
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
              name="categorey"
              label="categorey"
              type="categorey"
              onChange={setItemInputesHandle}
              id="categorey"
              autoComplete="current-categorey"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="description"
              onChange={setItemInputesHandle}
              type="description"
              id="description"
             
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