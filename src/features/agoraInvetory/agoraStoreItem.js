

 import Button from '@mui/material/Button';
 
import { StyledTableCell,StyledTableRow } from "../Style/storeStyle";




export default function StoreItem(props) {    
    const purchedItem=()=>{
        props.purchedItem(props.storeItem.id)
    }
     
    return (
        <StyledTableRow key={props.storeItem}>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }}  component="th" scope="row">
          {props.storeItem.product}
        </StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{props.storeItem.price}</StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{props.storeItem.categorey}</StyledTableCell>
        <StyledTableCell style={{ fontSize:20, fontWeight: 'bold' }} align="left">{props.storeItem.paurched?"purched":"not purched"}</StyledTableCell>
        <StyledTableCell>
        <Button onClick={purchedItem} variant="contained" color="success">
             to purches
        </Button>
      
      </StyledTableCell>
       
      </StyledTableRow>
    )
}