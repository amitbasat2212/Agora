import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    itemsStore: []
};

export const agoraStoreSlice = createSlice({
    name: 'agoraStore',
    initialState,
    reducers: {
       addItemToStore:(state,action)=>{           
            state.itemsStore.push(action.payload)
            console.log(state) 
       },

    }

})

    
export const { addItemToStore} = agoraStoreSlice.actions;

export const selectItems = (state) => state.StoreItems.itemsStore;


export default agoraStoreSlice.reducer;

