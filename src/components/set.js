import React ,{Component} from "react"
import {NavLink} from "react-router-dom"
import "../css/set.css"


class Set extends Component{
    

    login(){
        this.props.history.push("/password")
    }
    back(){
        this.props.history.push("/main/my")
    }
    about(){

    }

    loginout(){
        localStorage.removeItem("token")
    }

    render(){
        return(
            <div id="set">
                <header>
                    <span onClick={this.back.bind(this)}>&lt;</span>
                    <p>设置</p>
                </header>
                <section>
                <div className="my-four" onClick={this.login.bind(this)}>
                    <div >
                        
                      修改密码
                    </div>
                    <div>&gt;</div>
                </div>

                <div className="my-four" >
                    <div >
                        
                      版本号
                    </div>
                    <div>V2.1.1</div>
                </div>

                <div className="my-four" onClick={this.about.bind(this)}>
                    <div >
                        
                     关于我们
                    </div>
                    <div>&gt;</div>
                </div>
                </section>
                <footer>
                    <NavLink to="/login" onClick={this.loginout.bind(this)} activeStyle={{color:"#06eb6d"}}>退出登录</NavLink>
                </footer>
            </div>
        )
    }
}

export default Set;