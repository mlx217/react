import React from "react"
import {NavLink} from "react-router-dom"
import "../css/Login.css"
import styles from "../css/Login.css"
import "../font/iconfont.css"
import $ from "jquery"

class Login extends React.Component{
    constructor(props){
        super(props)

    }
    
    skip(){
        this.props.history.push("/reg")
    }

    forgetPSW(){
        this.props.history.push("/password")
    }
    denglu(){
        var _this=this
         $.post("http://10.8.156.24:8080/login.do",{
             username:_this.refs.phone.value,
             password:_this.refs.password.value
         },function(data){
             console.log(data)
             if(data.code==2){
                 alert(data.msg)
             }
             if(data.code==1){
                 localStorage.setItem("token",JSON.stringify({id:data.data,phone:_this.refs.phone.value}))
                  alert("登录成功")
                 _this.props.history.push("/main")
             }
         })

       
    }
    back(){
        this.props.history.goBack()
    }

    render(){
        return(
            <div id="login">
                <header className="header">
                    <span onClick={this.back.bind(this)}>&lt;</span>
                    <h1>登录</h1>
                    <span onClick={this.skip.bind(this)}>注册</span>
                </header>
                <section>
                    <div className="phone">
                        <span className="iconfont" style={{background:"none"}}>&#xe60b;
</span>
                        <input type="text" placeholder="请输入手机号" ref="phone"/>
                    </div>
                    <div className="password">
                        <span className="iconfont">&#xe635;</span>
                        <input type="text" placeholder="请输入登录密码"  ref="password"/>
                    </div>
                    <div className="forget-psw" onClick={this.forgetPSW.bind(this)}>
                       忘记密码？
                    </div>
                    <div className="login" >
                        <button onClick={this.denglu.bind(this)}>立即登录</button>
                    </div>
                </section>
            </div>
       
        )
            
    }
}

export default Login;