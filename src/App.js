import React from 'react';
import  {ItemForm } from './features/agoraInvetory/storeItemForm';
import  {AgoraStore } from './features/agoraInvetory/agoraStore';
import  {NavBar } from './features/NavBar';
import './App.css';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Tracker from './features/agoraInvetory/Tracker';



function App() {
  return (
    <Router>
    <div className="App" >
      <div  id="home-background"></div>
      <div id="main-links">
          <NavBar/>                  
      </div> 
      <div>     
      <Route path="/Invetory" exact render={() => <ItemForm />} />   
      <Route path="/store" exact render={() => <AgoraStore />} />         

      </div>  
      <Tracker/>     
    </div>
    </Router>
  );
}

export default App;
