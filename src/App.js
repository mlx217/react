import React, { Component } from 'react';
import './App.css';
import "./font/iconfont.css"
import Main from "./components/main"
import 'antd-mobile/dist/antd-mobile.css'

import Shouye from "./components/shouye"
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

import Reg from "./components/reg"
import Password from "./components/password"
import Login from "./components/login"
import Discount from "./components/discount"
import Set from "./components/set"
import Myorder from "./components/myorder"



class App extends Component{
  render() {
    return (
      <div className="App">
   
   <Router>
		<div className="container">
      
      <Route path="/main" component={Main}></Route>
      
      {/* <Route path="/list2" component={List2}></Route> */}
   
      <Route path="/login" component={Login}></Route>
      <Route path="/reg" component={Reg}></Route>
      <Route path="/password" component={Password}></Route>
      <Route path="/discount" component={Discount}></Route>
      <Route path="/set" component={Set}></Route>
      <Route path="/myorder/:id" component={Myorder}></Route>
		 
		</div>
	</Router>
      
      </div>
    );
  }
}

export default App;
