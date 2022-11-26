import React from 'react';
import  {ItemForm } from './features/agoraInvetory/storeItemForm';
import  {AgoraStore } from './features/agoraInvetory/agoraStore';
import  {NavBar } from './features/NavBar';
import './App.css';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App" >
      <div  id="home-background"></div>
      <div id="main-links">
          <NavBar/>                  
      </div> 
      <div>     
      <Route path="/operations" exact render={() => <ItemForm />} />   
      <Route path="/store" exact render={() => <AgoraStore />} />   
        

      </div>       
    </div>
    </Router>
  );
}

export default App;
