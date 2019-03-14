import React ,{Component} from "react"
import Discount1 from "./discount-liebiao"
import "../css/discount.css"


class Discount extends Component{
   

    back(){
         this.props.history.push("/main/my")
    }

    render(){
        return(
            <div id="discount">
                   <header>
                    <span onClick={this.back.bind(this)}>&lt;</span>
                    <h1>我的优惠券</h1>
                  
                    </header>
                    <div className="discount1" >
                        <Discount1/>
                     </div>
            </div>
            
        )
    }
}

export default Discount