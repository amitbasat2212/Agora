import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import { useSelector } from 'react-redux';

import {    
    selectItems
} from './agoraStoreSlice';

export default function Tracker() {    
    const items = useSelector(selectItems)     
    const itemInsStore=()=>{
        const stock = items.filter(item => item.paurched==false);
        return stock.length
    }
  return (
    <Card sx={{ minWidth: 200,mt:8}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          the stocke in the store: 
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {itemInsStore()}
        </Typography>

      </CardContent>
    
    </Card>
  );
}