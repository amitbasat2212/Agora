import {  createSlice } from '@reduxjs/toolkit';
import {Item} from './storeItemObject'

const initialState = {
    itemsStore: []
};

export const agoraStoreSlice = createSlice({
    name: 'agoraStore',
    initialState,
    reducers: {
       addItemToStore:(state,action)=>{
            console.log(action.payload)
            state.items.push(action.payload) 
       },

    }

})

    
export const { addItemToStore} = agoraStoreSlice.actions;

export const selectItems = (state) => state.StoreItems.itemsStore;


export default agoraStoreSlice.reducer;

