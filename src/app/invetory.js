import { configureStore } from '@reduxjs/toolkit';
import StoreItemsreducer from "../features/agoraInvetory/agoraStoreSlice";
export const invetory = configureStore({
  reducer: {
    StoreItems:StoreItemsreducer
  }
});
