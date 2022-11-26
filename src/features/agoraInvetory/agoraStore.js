

import Grid from '@mui/material/Grid';
import {  useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';


import {    
    selectItems,
    purchedAnItem,
    editThePrice
} from './agoraStoreSlice';


import StoreItemCard from './StoreItemCard';


export  function AgoraStore() {
    const Storeitems = useSelector(selectItems);  
    const dispatch = useDispatch(); 
    
    const purchedItem = (IdItem)=>{
        dispatch(purchedAnItem(IdItem))
    }
    const editItem=(IdItem)=>{
        dispatch(editThePrice(IdItem))
    }
    return (
        <Grid container spacing={2} sx={{mt:4,ml:2}}>        
        {Storeitems.map((st) => (
            <StoreItemCard  storeItem={st} editItem={editItem} purchedItem={purchedItem}/>
          ))}       
       
      </Grid>
  );
}