import React from "react"
import {NavLink} from "react-router-dom"
import "../css/password.css"
import $ from "jquery"

class Reg extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:"none",
            Code:"1234"
        }
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
    back(){
        this.props.history.goBack()
    }

    reset(){
        var _this=this;
        $.post("http://10.8.156.24:8080/checkUser.do",{
             username:this.refs.phone.value,
            
        },
        function(data){
            console.log(data)
           
                if(data.code==1&&_this.state.Code==_this.refs.Code.value){
                    $.post("http://10.8.156.24:8080/addUser.do",{
                    username:_this.refs.phone.value,
                    password:_this.refs.password.value
             },
             function(data){
                 console.log(data)
                 if(data.code==2){
                     alert("重置密码成功")
                     _this.props.history.push("/login")
                 }
             }
             )
                 }
           else{
                if(data.code==2){
                    alert("用户不存在")
                }else{
                    alert("请输入正确的验证码")
                }
                
            }
        
        })
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
                    
                        <input type="text" placeholder="请输入手机号" ref="phone" />
                    </div>

                    <div className="code">
                      <input type="text" placeholder="请输入验证码" ref="Code"/>
                      <span onClick={this.getCode.bind(this)}>发送验证码</span>
                    </div>

                    <div className="password">
                
                         <input type="text" placeholder="请输入登录密码" ref="password"/>
                    </div>
                   
                    <div className="reset-psw">
                        <button onClick={this.reset.bind(this)}>重置密码</button>
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