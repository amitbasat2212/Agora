import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    itemsStore: []
};

const ChangeTheStoreList=(state,idItem,keyToChange,value)=>{
    const theNewItemStore=[...state.itemsStore]
    const index = theNewItemStore.findIndex((item)=>item.id==idItem)
    theNewItemStore[index][keyToChange]=value;
    state.itemsStore=theNewItemStore
}

export const agoraStoreSlice = createSlice({
    name: 'agoraStore',
    initialState,
    reducers: {
       addItemToStore:(state,action)=>{           
            state.itemsStore.push(action.payload)
            
       },
       purchedAnItem:(state,action)=>{ 
          ChangeTheStoreList(state,action.payload,"paurched",true)
                        
       },
       editThePrice:(state,action)=>{ 
        ChangeTheStoreList(state,action.payload.id,"price",action.payload.price)       
        
       }

    }

})

    
export const { addItemToStore,purchedAnItem,editThePrice} = agoraStoreSlice.actions;

export const selectItems = (state) => state.StoreItems.itemsStore;


export default agoraStoreSlice.reducer;

