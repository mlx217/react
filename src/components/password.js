import React from "react"
import {NavLink} from "react-router-dom"
import "../css/password.css"

class Reg extends React.Component{
     
    back(){
        this.props.history.push("/login")
    }

    render(){
        return(
            <div id="password">
                <header>
                    <span onClick={this.back.bind(this)}>&lt;</span>
                    <h1>忘记密码</h1>
                  
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
                   
                    <div className="reset-psw">
                        <button >重置密码</button>
                    </div>
                  
                </section>
            </div>
       
        )
    }
}

export default Reg;