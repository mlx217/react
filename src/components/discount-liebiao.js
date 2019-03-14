import { Tabs, WhiteSpace } from 'antd-mobile';
// import { StickyContainer, Sticky } from 'react-sticky';
import React from "react"

// function renderTabBar(props) {
//   return (<Sticky>
//     {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
//   </Sticky>);
// }
const tabs = [
  { title: '未使用' },
  { title: '已使用' },
  { title: '已过期' },
];
const tab={
  
  border:'1px solid #8d4c04'
}
class Discount1 extends React.Component{


  render(){
       return(
        <div >
           <Tabs tabs={tabs}
        initalPage={'t2'}
        tabBarUnderlineStyle={tab}
        tabBarBackgroundColor="#fff"
        tabBarInactiveTextColor="#8d4c04"
        tabBarPosition="top"
      >
        <div style={{ display: 'flex', flex:"1", alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#f0f0f0',paddingTop:"50px" }}>
          Content of first tab
        </div>
        <div style={{ display: 'flex', flex:"1", alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#f0f0f0',paddingTop:"50px" }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', flex:"1", alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#f0f0f0',paddingTop:"50px"}}>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          Content of third tab
          <br/>
          lorem  
        </div>
      </Tabs>
      </div>
    
       )
  }
   
  
}
export default Discount1;