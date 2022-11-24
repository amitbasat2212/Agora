
import { useSelector, useDispatch } from 'react-redux';
import {
    addItemToStore,
    selectItems
} from './agoraStoreSlice';




export function AgoraStoreComponent() {  
  const items = useSelector(selectItems);
  const dispatch = useDispatch();   
 

  return (
    <div>
      <div>
        <button          
          aria-label="Decrement value"
          onClick={() => dispatch(addItemToStore())}
        >
          add item
        </button>
        </div>
    </div>
  );
}
