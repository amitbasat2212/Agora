

import Grid from '@mui/material/Grid';
import {  useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';


import {    
    selectItems,
    purchedAnItem
} from './agoraStoreSlice';


import StoreItemCard from './StoreItemCard';


export  function AgoraStore() {
    const Storeitems = useSelector(selectItems);  
    const dispatch = useDispatch(); 
    
    const purchedItem = (IdItem)=>{
        dispatch(purchedAnItem(IdItem))
    }
    return (
        <Grid container spacing={2}>
        <Grid item xs={2} md={3}>
        {Storeitems.map((st) => (
            <StoreItemCard storeItem={st} purchedItem={purchedItem}/>
          ))}
            
        </Grid>
       
        
      </Grid>
  );
}