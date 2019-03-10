import React, { Component } from 'react';
import './App.css';
import "./font/iconfont.css"
import Main from "./components/main"
import Login from "./components/login"
import Reg from "./components/reg"
import Password from "./components/password"

import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <div className="App">
   
   <Router>
		<div>
			<Route path="/" component={Main}> </Route>
      <Route path="/main" component={Main}></Route>
     
       <Route path="/reg" component={Reg}></Route>
       <Route path="/password" component={Password}></Route>
       <Route path="/login" component={Login}></Route>
           
       
      
      
      
		  
		</div>
	</Router>
      
      </div>
    );
  }
}

export default App;
