import React from 'react';
import './home.scss'; 
import Sidebar from '../../component/sidebar/Sidebar'; 
import Navbar from '../../component/navbar/Navbar';
import Widgets from '../../component/widgets/Widgets'; 
import { AccountBalanceWalletOutlined, KeyboardArrowUp, ShoppingCartOutlined } from '@mui/icons-material'
import { PersonOutlined ,MonetizationOnOutlined } from '@mui/icons-material'
import Featured from '../../component/featured/Featured';
import Chart from '../../component/chart/Chart';

const Home = () => { 
  const data=[ 
    { 
        
        title:"USERS",
        isMoney:false, 
        link:"See all users",
        icon:<PersonOutlined className="icon" style={{backgroundColor:"purple",color:"white"}}/> 

    },
    { 
     
        title:"ORDERS",
        isMoney:false, 
        link:"View all orders",
        icon:<ShoppingCartOutlined className="icon" style={{backgroundColor:"purple",color:"white"}}/> 

    }, 
    { 
        type:"balance",
        title:"BALANCE",
        isMoney:true, 
        link:"See details",
        icon:<AccountBalanceWalletOutlined className="icon" style={{backgroundColor:"purple",color:"white"}}/> 

    },
    {
      type:"earning",
                          title:"EARNINGS",
                          isMoney:true, 
                          link:"View net earnings",
                          icon:<MonetizationOnOutlined className="icon" style={{backgroundColor:"purple",color:"white"}}/> 
          
                      }


]

  return (
    <div className='home'>
      <Sidebar/> 
      <div className="homeContainer">
        <Navbar/> 
        <div className="widgets"> 
          {data.map((i,index)=>
          (<Widgets title={i.title} isMoney={i.isMoney} link={i.link} icon={i.icon} key={index}/>)
          )}
        </div> 
        <div className="charts">
          <Featured/>
          <Chart title="Last 6 months (Revenue)"/>
        </div> 
       
        </div>
    </div>
  )
}

export default Home