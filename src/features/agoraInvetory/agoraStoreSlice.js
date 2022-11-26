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
            
       },
       purchedAnItem:(state,action)=>{ 
            const theNewItemStore=[...state.itemsStore]
            const index = theNewItemStore.findIndex((item)=>item.id==action.payload)
            theNewItemStore[index].paurched=true;
            state.itemsStore=theNewItemStore
            
       }

    }

})

    
export const { addItemToStore,purchedAnItem} = agoraStoreSlice.actions;

export const selectItems = (state) => state.StoreItems.itemsStore;


export default agoraStoreSlice.reducer;

