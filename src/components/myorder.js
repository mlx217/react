import { Tabs, WhiteSpace } from 'antd-mobile';
import React ,{Component} from "react"
import "../css/myorder.css"

class Myorder extends Component{
    constructor(props){
        super(props)

        this.state={
              id:''
        }
    };
     componentDidMount(){
       console.log(this.refs.tap)
             var id1= this.props.match.params.id
             console.log(id1)
             this.setState({
               id:id1
             })

      };

    back(){
      this.props.history.push("/main/my")
 }
    tap(a,b){

      this.setState({
        id:b
      })
    }

    render(){
      console.log(this.refs.tap)
        const tabs = [
            { title: '全部订单' },
            { title: '待付款' },
            { title: '待配送' },
            { title: '配送中' },
          ];
       
        return(
            <div id="myorder">


                   <header>
                          <span onClick={this.back.bind(this)}>&lt;</span>
                          <h1>我的订单</h1>
                        
                    </header>
              <div className="myorder" >
                    <Tabs tabs={tabs}
                        swipeable={true}
                        ref="tap"
                        page={Number(this.state.id)}
                        onTabClick={this.tap.bind(this)}
                    >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#f0f0f0' }}>
                            Content of first tab
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#f0f0f0' }}>
                            Content of second tab
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#f0f0f0' }}>
                            Content of third tab
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#f0f0f0' }}>
                            Content of third tab
                          </div>
                    </Tabs>  
              </div>
               
                  
            </div>
        )
    }
}


export default Myorder;