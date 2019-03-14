import React from "react"
import {NavLink} from "react-router-dom"
import "../css/reg.css"
import $ from "jquery"

class Reg extends React.Component{

    constructor(props){
        super(props)
        this.state={
            show:"none",
            Code:"1234"
        }
    }
    back(){
        this.props.history.push("/login")
    }
    
    getCode(){
        var Code=""
        for(var i=0;i<4;i++){
            Code+=parseInt(Math.random()*10)
         
            
        }
        this.setState({
            show:"block",
            Code:Code,
        })
       
    }
      
    cancel(){
        this.setState({
            show:"none",

        })
    }
    affirm(){
        this.setState({
            show:"none",
            
        })
    }
     

    // 注册发送请求
    reg(){
        var _this=this;
         $.post("http://10.8.156.24:8080/checkUser.do",{
              username:this.refs.phone.value,
             
         },
         function(data){
             console.log(data)
             
             if(data.code==2&&_this.state.Code==_this.refs.Code.value){
                $.post("http://10.8.156.24:8080/addUser.do",{
                username:_this.refs.phone.value,
                password:_this.refs.password.value
         },
         function(data){
             console.log(data)
             if(data.code==1){
                 alert("用户注册成功")
                 _this.props.history.push("/login")
             }
         }
         )
             }else{
                 alert("用户亦存在")
             }
         })
    }
    render(){
        return(
            <div id="reg">
                <header>
                    <span onClick={this.back.bind(this)}>&lt;</span>
                    <h1>注册</h1>
                  
                </header>
                <section>
                    <div className="phone">
                    
                        <input type="text" placeholder="请输入手机号" ref="phone" />
                    </div>

                    <div className="code">
                      <input type="text" ref="Code" placeholder="请输入验证码"/>
                      <span onClick={this.getCode.bind(this)}>发送验证码</span>
                    </div>

                    <div className="password">
                
                         <input ref="password" type="text" placeholder="请输入登录密码" />
                    </div>
                   
                    <div className="reg">
                        <button onClick={this.reg.bind(this)}>立即注册</button>
                    </div>
                    <div className="reg-protocol">
                        注册即表示同意
                        <NavLink to="">清美会员注册协议</NavLink>
                    </div>
                </section>
                <div id="filter-net"  style={{display:this.state.show}}>
                <div  className="getCode">
                   
                    <div onClick={this.cancel.bind(this)}>x</div>
                     <div>
                         <laber>验证码:</laber>
                         <input type="text" disabled value={this.state.Code}/>
                     </div>
                     <div>
                         <button onClick={this.affirm.bind(this)}>确定</button>
                         <button onClick={this.cancel.bind(this)}>取消</button>
                     </div>
                    
                </div>
                </div>
              
            </div>
       
        )
    }
}

export default Reg;