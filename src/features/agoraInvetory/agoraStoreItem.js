import React, { useState, useEffect } from 'react'

 import Button from '@mui/material/Button';
 import Box from '@mui/material/Box';
import { StyledTableCell,StyledTableRow } from "../Style/storeStyle";
// import DeleteButton from './buttons/DeleteButton';



export default function StoreItem(props) {
    const [item]=useState(props.storeItem)    
   
    return (
        <StyledTableRow key={item}>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }}  component="th" scope="row">
          {item.product}
        </StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{item.price}</StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{item.categorey}</StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{item.paurched?"purched":"not purched"}</StyledTableCell>
        <StyledTableCell>
        <Button variant="contained" color="success">
             to purches
        </Button>
      
      </StyledTableCell>
       
      </StyledTableRow>
    )
}