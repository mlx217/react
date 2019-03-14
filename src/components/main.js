import React, { Component } from 'react';
import "../css/main.css";
import "../font/iconfont.css";
import Shouye from "./shouye"
import List from "./list"
import Cart from "./cart"
import My from "./my"
// import 'antd/dist/antd.css';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch,hashHistory} from 'react-router-dom';
var jump='';
class Main extends Component {
      

  constructor(props){
     super(props)
     this.state={
       skip:false
     }
  }
    // 判断跳转页面
    skipSelect(e){
      e.preventDefault()
      if(localStorage.getItem("token")){
        console.log(2)
         this.setState({
           skip:true
         })
         this.props.history.push("/main/cart")
      }else{
        console.log(1)
        this.setState({
          skip:false
        })
        this.props.history.push("/login");

      }
    
     console.log(jump)
    }
  
  
  render() {
     
   



    return (
     
      <div  className="Main">
    <Router>
  
            <div className="Main_center">
        
        <section className="Main-section">
       
            <div>
               
        <Route path="/main/shouye" component={Shouye}></Route>
        <Route path="/main/list" component={List}></Route>
        <Route path="/main/cart" component={Cart}></Route>
        <Route path="/main/my" component={My}></Route>
       
        
      
       
        </div>
       
        
        </section>
       
        <footer className="Main-footer">
      
   
          <ul>
            <li>
            <NavLink to="/main/shouye"  activeStyle={{color:"rgb(29, 177, 61)"}}>
              <i className="iconfont">&#xe62d;</i>
              <p>   首页</p>
              </NavLink> 
            </li>

            <li>
            <NavLink to="/main/list"  activeStyle={{color:"rgb(29, 177, 61)"}}>
              <i className="iconfont">&#xe602;</i>
              <p>分类</p>
              </NavLink> 
            </li>
            <li>
            <NavLink onClick={this.skipSelect.bind(this)}  to="/main/cart" activeStyle={{color:"rgb(29, 177, 61)"}}>
              <i className="iconfont">&#xe601;</i>
              <p>购物车</p>
              </NavLink> 
            </li>
            <li>
            <NavLink to="/main/my"  activeStyle={{color:"rgb(29, 177, 61)"}}>
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
