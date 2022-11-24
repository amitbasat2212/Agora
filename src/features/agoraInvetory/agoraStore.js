import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import Transaction from "./agoraStoreItem";
import { useSelector } from 'react-redux';
import { StyledTableCell } from "../Style/storeStyle";
import React, { useState, useEffect } from 'react'
import {    
    selectItems
} from './agoraStoreSlice';

export  function AgoraStore() {
    const Storeitems = useSelector(selectItems);  
        
    return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left">transaction vendor</StyledTableCell>
            <StyledTableCell align="left">transaction amount&nbsp;</StyledTableCell>
            <StyledTableCell align="left">transaction category&nbsp;</StyledTableCell>           
            <StyledTableCell align="left">delete transaction&nbsp;</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {Storeitems.map((st) => (
            <div>hi</div>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}