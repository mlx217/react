import React, { Component } from 'react';
import "../font/iconfont.css"
import {NavLink} from "react-router-dom"
import "../css/my.css"
import $ from "jquery"

class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeStyle:false,
            show:false,
            phone:"",
           
        };
       
    }

   
    discount(){
       
        this.props.history.push("/discount")
    }
    componentDidMount(){
        var _this=this
        $(document).ready(function(){
            $('section').bind('touchstart', function(e) {
            var a = $("section").offset().top;
          var distance = a;
            console.log(distance)
            return show_taboo(distance)
            });
    });
    //执行函数
    function show_taboo(distance){
        if(distance>0){
          _this.setState({
              changeStyle:true
          })
        }else{
           _this.setState({
                changeStyle:false
            })
        }
    }
    }

    set(){
        this.props.history.push("/set")
    }
     
    componentDidMount(){
        console.log( localStorage.getItem("token"))
        
      
      
        if(localStorage.getItem("token")){
            var phone=JSON.parse(localStorage.getItem("token")).phone
             this.setState({
                 show:true,
                 phone:phone
             })
        }
    }
//    跳转关于订单详情页面
    allorder(){
        this.props.history.push("/myorder/0")
    }

    waitpay(){
        this.props.history.push("/myorder/1")
    }
    waitsend(){
        this.props.history.push("/myorder/2")
    }
    sending(){
        this.props.history.push("/myorder/3")
    }
    server(){
        
    }
   
        
    render() {
        const bgImage={
            width:"100%",
            height:"240px",
            background:`url(${require('../img/5.jpg')})`
        }

     
  
    
    
        
        return (
            <div id="my">
                <div className="my-first" style={bgImage}>
                    <div className={this.state.changeStyle?"fixHeader":"header"}>
                        <p>我的</p>
                        <span className="iconfont">&#xe61a;</span>
                    </div>

                    <div className="header-img">
                          <p>
                              
                              <span>清鲜</span>
                             
                             
                              <span>美食</span>

                              </p>
                          <p>
                              <NavLink to="/login"  style={{display:this.state.show?"none":"block"}}>点击登录</NavLink>
                              <span style={{display:this.state.show?"block":"none"}} >{this.state.phone}</span>
                          </p>

                    </div>

                </div> 
                <div className="my-two" onClick={this.allorder.bind(this)}>
                     <div>我的订单</div>
                     <div>
                         <span>全部订单</span>
                         <span>&gt;</span>
                     </div>
                </div>
                
                {/* 第三个div */}
                <div className="my-three">
                    <div onClick={this.waitpay.bind(this)}>
                        <p className="iconfont">&#xe6c6;</p>
                        <p>待付款</p>
                    </div>
                    <div onClick={this.waitsend.bind(this)}>
                        <p className="iconfont">&#xe67f;</p>
                        <p>待配送</p>
                    </div>
                    <div onClick={this.sending.bind(this)}>
                        <p className="iconfont">&#xe604;</p>
                        <p>配送中</p>
                    </div>
                    <div onClick={this.server.bind(this)}>
                        <p className="iconfont">&#xe640;</p>
                        <p>退货/售后</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="my-four" onClick={this.discount.bind(this)}>
                    <div >
                        <p className="iconfont">&#xe623;</p>
                        <p>优惠券</p>
                    </div>
                    <div>&gt;</div>
                </div>

                <div className="my-four">
                    <div>
                        <p className="iconfont" style={{color:"#04e1b0"}}>&#xe605;</p>
                        <p>切换门店</p>
                    </div>
                    <div>&gt;</div>
                </div>

                <div className="my-four">
                    <div>
                        <p className="iconfont" style={{color:"#ff6f00"}}>&#xe607;</p>
                        <p>收货地址</p>
                    </div>
                    <div>&gt;</div>
                </div>

                <div className="my-four">
                    <div>
                        <p className="iconfont">&#xe640;</p>
                        <p>关于售后服务</p>
                    </div>
                    <div>&gt;</div>
                </div>

                <div className="my-four" onClick={this.set.bind(this)}>
                    <div>
                        <p className="iconfont" style={{color:"blue"}}>&#xe66e;</p>
                        <p>设置</p>
                    </div>
                    <div>&gt;</div>
                </div>
            </div>
        )

        
    }

    
}

export default My;