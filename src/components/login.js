import React from "react"
import {NavLink} from "react-router-dom"
import "../css/Login.css"
import styles from "../css/Login.css"

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

    render(){
        return(
            <div id="login">
                <header className="header">
                    <span>&lt;</span>
                    <h1>登录</h1>
                    <span onClick={this.skip.bind(this)}>注册</span>
                </header>
                <section>
                    <div className="phone">
                        <span>1</span>
                        <input type="text" placeholder="请输入手机号" />
                    </div>
                    <div className="password">
                        <span>2</span>
                        <input type="text" placeholder="请输入登录密码" />
                    </div>
                    <div className="forget-psw" onClick={this.forgetPSW.bind(this)}>
                       忘记密码？
                    </div>
                    <div className="login">
                        <button >立即登录</button>
                    </div>
                </section>
            </div>
       
        )
            
    }
}

export default Login;