import React, { Component } from 'react';
import './App.css';
import "./font/iconfont.css"
import Main from "./components/main"

import {BrowserRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <div className="App">
   
   <Router>
		<div>
			<Route path="/" component={Main}>
      <Route path="/main" component={Main}></Route>

      
      
      </Route>
		  
		</div>
	</Router>
      
      </div>
    );
  }
}

export default App;
