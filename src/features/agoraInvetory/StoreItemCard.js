import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';





export default function StoreItemCard(props) {
  const [expanded, setExpanded] = React.useState(false);
 
  const purchedItem=()=>{
    props.purchedItem(props.storeItem.id)
  }
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader    
        title={props.storeItem.product}
        subheader={"price:"+ props.storeItem.price}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.storeItem.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2"  sx={{mt:2}} color="text.secondary">
            { "category:"+ props.storeItem.categorey} 
        </Typography>
        <Typography variant="body2" sx={{mt:2,mb:2}} color="text.secondary">
            {"discription:" +props.storeItem.discription} 
        </Typography>
        {props.storeItem.paurched?<Typography variant="body2" color="text.secondary">
          {props.storeItem.product } is alredy purches 
        </Typography>:    
        <Button onClick={purchedItem} variant="contained" color="success">
             to purches
        </Button>
        } 

      </CardContent>
      
      
    </Card>
  );
}