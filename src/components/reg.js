import React from "react"
import {NavLink} from "react-router-dom"
import "../css/reg.css"

class Reg extends React.Component{
    back(){
        this.props.history.push("/login")
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
                    
                        <input type="text" placeholder="请输入手机号" />
                    </div>

                    <div className="code">
                      <input type="text" placeholder="请输入验证码"/>
                      <span>发送验证码</span>
                    </div>

                    <div className="password">
                
                         <input type="text" placeholder="请输入登录密码" />
                    </div>
                   
                    <div className="reg">
                        <button >立即注册</button>
                    </div>
                    <div className="reg-protocol">
                        注册即表示同意
                        <NavLink to="">清美会员注册协议</NavLink>
                    </div>
                </section>
            </div>
       
        )
    }
}

export default Reg;