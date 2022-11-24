import React from 'react';
import  {ItemForm } from './features/agoraInvetory/storeItemForm';
import  {AgoraStore } from './features/agoraInvetory/agoraStore';
import './App.css';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div id="home-background"></div>
      <div id="main-links">
          {/* <NavBar balance={balance}/>                   */}
      </div> 
      <div>     
      <Route path="/ItemForm" exact render={() => <ItemForm />} />   
      <Route path="/Store" exact render={() => <AgoraStore />} />   
        

      </div>       
    </div>
    </Router>
  );
}

export default App;
