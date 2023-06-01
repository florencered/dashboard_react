import React, { useContext } from 'react' 
import "./widgets.scss" 
import { DarkModeContext } from "../../context/darkModeContext";
import { KeyboardArrowUp,MonetizationOnOutlined } from '@mui/icons-material';
const Widgets = ({title,isMoney,link,icon}) => { 
     
    //temporary 
    const amount=100; 
    const diff=20; 
    
    
    // switch(type){
    //     case "user":
    //         data={
    //             title:"USERS",
    //             isMoney:false, 
    //             link:"See all users",
    //             icon:<PersonOutlined className="icon"/> 

    //         }; 
    //         break;
    //         case "order":
    //             data={
    //                 title:"ORDERS",
    //                 isMoney:false, 
    //                 link:"View all orders",
    //                 icon:<ShoppingCartOutlined className="icon"/> 
    
    //             }; 
    //             break; 
    //             case "earning":
    //                 data={
    //                     title:"EARNINGS",
    //                     isMoney:true, 
    //                     link:"View net earnings",
    //                     icon:<MonetizationOnOutlined className="icon"/> 
        
    //                 }; 
    //                 break; 
    //                 case "balance":
    //                     data={
    //                         title:"BALANCE",
    //                         isMoney:true, 
    //                         link:"See details",
    //                         icon:<AccountBalanceWalletOutlined className="icon"/> 
            
    //                     }; 
    //                     break;

    //         default:
    //             break;
    //         }
  const {dark} = useContext(DarkModeContext);
  return (
    <div className={dark ? "widget" : "widget dark"}>
        <div className="left">
            <span className="title">{title}</span> 
        <span className="counter">{isMoney && "$"}{amount}</span> 
            <span className="link">{link}</span>
        </div>
        <div className="right">
            <div className="percentage positive"> 
            <KeyboardArrowUp/>
            {diff}%

            </div> 
              {icon}
              
        </div>
        </div> 
  ) 
}


export default Widgets