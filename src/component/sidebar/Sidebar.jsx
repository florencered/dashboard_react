import React from 'react' 
import "./sidebar.scss" 
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'; 
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; 
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'; 
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'; 
import { Link } from 'react-router-dom'; 
import { DarkModeContext } from '../../context/darkModeContext'; 
import { useContext } from 'react'; 
const Sidebar = () => { 
  const {light} = useContext(DarkModeContext);
  return (
    <div className={light ? "sidebar" : "sidebar dark"}> 
    <div className="top"> 
    <Link to="/" style={{textDecoration:"none"}}> {/*// that means homepage*/}
    <span className="logo">FlorenceRed</span>
    </Link>
      </div>
    <hr />
    <div className="center"> 
    <ul> 
      <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon"/>
          <span>Dashboard</span></li> 
          <p className="title">LISTS</p> 
          <Link to="/users" style={{textDecoration:"none"}}>
        <li> 
        <GroupOutlinedIcon className="icon"/>
          <span>Users</span>
          </li> 
          </Link> 
          <Link to="/products" style={{textDecoration:"none"}}>
        <li> 
        <ShoppingCartOutlinedIcon className="icon"/>
          <span>Products</span>
          </li>  
          </Link> 

          <Link to="/users/test" style={{textDecoration:"none"}}>
        <li> 
        <SubscriptionsOutlinedIcon className="icon"/>
          <span>Orders</span>
          </li> 
        </Link> 

        <li> 
       < LocalShippingOutlinedIcon className="icon"/>
          <span>Delivery</span>
          </li> 
          <p className="title">USEFUL LINKS</p>
          <li> 
          <QueryStatsOutlinedIcon className="icon"/>
          <span>Statistics</span>
          </li> 
          <li> 
          <NotificationsActiveOutlinedIcon className="icon"/>
          <span>Notifications</span>
          </li> 
          <p className="title">SERVICE</p>
          <li> 
          <CloudDoneOutlinedIcon className="icon"/>
          <span>System Health</span>
          </li> 
          <li> 
         < PsychologyOutlinedIcon className="icon" />
          <span>Logs</span>
          </li> 
          <li> 
          <SettingsSuggestOutlinedIcon className="icon"/>
          <span>Settings</span>
          </li> 
          <p className="title">USER</p>
          <li> 
         
          <AccountCircleOutlinedIcon className="icon"/>
          <span>Profile</span>
          </li> 
          <li> 
          <ExitToAppOutlinedIcon className="icon"/>
          <span>Logout</span>
          </li>
    </ul>
        </div> 
    {/* <div className="bottom">
       <div className="colorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div> 
      <div className="colorOptions" onClick={()=>dispatch({type:"DARK"})}></div> 
      <div className="colorOptions"></div>

    </div>  */}
    </div>
  ) 
}

export default Sidebar