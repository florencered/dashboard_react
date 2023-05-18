import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { FullscreenExitOutlined } from '@mui/icons-material';
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { ListOutlined } from '@mui/icons-material'; 
import { DarkModeContext } from '../../context/darkModeContext'; 
import { useContext } from 'react';
const Navbar = () => { 
  const {dispatch} =useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchIcon className='icon' />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' style={{padding:"2px"}} />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} style={{cursor:"pointer"}}/>
            
          </div>
          <div className="item">
            < FullscreenExitOutlined className='icon' />
            
          </div>
          <div className="item">
            < NotificationsNoneOutlined className='icon' /> 
            <div className="counter">1</div>
          </div>
          <div className="item">
            < ChatBubbleOutlineOutlined className='icon' /> 
            <div className="counter">2</div>
          </div>
          <div className="item">
            < ListOutlined className='icon' />
          </div> 
          <div className="item">
           <img src="/images/my_image.jpeg" alt="image of the admin" className="avatar"/>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Navbar