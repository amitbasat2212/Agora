import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';





export default function StoreItemCard(props) {
  const [price,setPrice]=React.useState(props.storeItem.price)  
  const [edit,setEditMode]=React.useState(false)
  const purchedItem=()=>{
    props.purchedItem(props.storeItem.id)
  }
  const editItem=()=>{
    if(edit){
        setEditMode(false)
        props.editItem({"id":props.storeItem.id , "price":price})
    }else{
        setEditMode(true)

    }    
    
  }      

  const handleChange=(evt)=>{           
    setPrice(evt.target.value)
    
  }

  return (

    <Card style={{backgroundColor: "#1976d2"}} sx={{ maxWidth: 345, ml:3}}>
      <CardHeader    
        title={props.storeItem.product}
        
      />

      <CardMedia
        component="img"
        height="194"
        image={props.storeItem.image}
        alt="Paella dish"
      />
      <CardContent sx={{minWidth: 300 }}>
        <Typography variant="body2"  sx={{mt:2,color:"white"}} color="text.secondary">
            { "category: "+ props.storeItem.categorey} 
        </Typography>
        
        {edit?
        <TextField
          required
          onChange={handleChange}
          id="outlined-required"          
          sx={{border:"black", mt:2,backgroundColor:'white'}}
          defaultValue={price}
        />:
        <Typography variant="body2"  sx={{mt:2,color:"white"}} color="text.secondary">
            { "price: "+ price} 
        </Typography>}
        
        <Typography variant="body2" sx={{mt:2,mb:2,color:"white"}} color="text.secondary">
            {"discription: " +props.storeItem.discription} 
        </Typography>
        {props.storeItem.paurched?
        <Typography sx={{color:"white"}} variant="body2" color="text.secondary">
          {props.storeItem.product } is alredy purches 
        </Typography>:
        <CardContent>    
        <Button onClick={purchedItem} variant="contained" sx={{mr:2}} color="success">
             to purches
        </Button>    
        <Button onClick={editItem} variant="contained"  sx={{backgroundColor:'#9c27b0',':hover': {
            bgcolor: '#ba68c8',
            color: 'white',
            }}}>
             edit price
        </Button>    
        </CardContent>    
        } 

      </CardContent>
      
      
    </Card>
  );
}