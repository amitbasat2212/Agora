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
import StoreItem from './agoraStoreItem';

export  function AgoraStore() {
    const Storeitems = useSelector(selectItems);  

    return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left">item price</StyledTableCell>
            <StyledTableCell align="left">item product name&nbsp;</StyledTableCell>
            <StyledTableCell align="left">item categorey&nbsp;</StyledTableCell>           
            <StyledTableCell align="left">item description&nbsp;</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {Storeitems.map((st) => (
            <StoreItem storeItem={st}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}