import React, { Component } from 'react';
import "../css/main.css";
import "../font/iconfont.css";
import Shouye from "./shouye"
import List from "./list"
import Cart from "./cart"
import My from "./my"
// import 'antd/dist/antd.css';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div  className="Main">
   
   <Router>
            <div className="Main_center">
        
        <section className="Main-section">
       
            <div>
                <Switch>
        <Route path="/shouye" component={Shouye}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/my" component={My}></Route>
      
        </Switch>	
        </div>
       
        
        </section>
       
        <footer className="Main-footer">
      
   
          <ul>
            <li>
            <NavLink to="/shouye"  activeStyle={{color:"rgb(29, 177, 61)"}}>
              <i className="iconfont">&#xe62d;</i>
              <p>   首页</p>
              </NavLink> 
            </li>

            <li>
            <NavLink to="/list"  activeStyle={{color:"rgb(29, 177, 61)"}}>
              <i className="iconfont">&#xe602;</i>
              <p>分类</p>
              </NavLink> 
            </li>
            <li>
            <NavLink  to="/cart" activeStyle={{color:"rgb(29, 177, 61)"}}>
              <i className="iconfont">&#xe601;</i>
              <p>购物车</p>
              </NavLink> 
            </li>
            <li>
            <NavLink to="/my"  activeStyle={{color:"rgb(29, 177, 61)"}}>
              <i className="iconfont">&#xe859;</i>
              <p> 我的</p>
              </NavLink> 
            </li>
          </ul>

        </footer>
        </div>
        </ Router>
      </div>
    );
  }
}

export default Main;
