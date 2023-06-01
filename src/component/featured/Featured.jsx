import React from 'react';
import { useContext } from 'react';
import "./featured.scss"
import { MoreVert } from '@mui/icons-material'; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import {buildStyles} from 'react-circular-progressbar'; 
import { KeyboardArrowDown } from '@mui/icons-material';
import { KeyboardArrowUpOutlined } from '@mui/icons-material'; 
import Target_data from './Target_data';
import { DarkModeContext } from '../../context/darkModeContext';

const Featured = () => { 
  let T_data=[
    {
      title:"Target",
      icon:   <KeyboardArrowDown fontSize='small' style={{color:"red"}}/>, 
      amount:"$22.4k" ,
      color:"red"
    },
    {
      title:"Last Week", 
      icon:<KeyboardArrowUpOutlined fontSize='small'style={{color:"green"}}/> ,
      amount:"$10k", 
      color:"green"
    }, 
    {
      title:"Last Month", 
      icon:<KeyboardArrowUpOutlined fontSize='small' style={{color:"green"}}/> ,
      amount:"$15.5k" ,
      color:"green"
    }
    
  ]
  const {light} = useContext(DarkModeContext);
  return (
    <div className={light ? "featured" : "featured dark"}>
        <div className="top">
            <h1 className="title">Total Revenue</h1> 
            <MoreVert fontSize='small'/>
            </div> 
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} styles={buildStyles({
          textColor: "crimson",
          pathColor: "crimson",
          trailColor: "purple"
        })}/>
            </div> 
            <p className="title">Total sales made today</p> 
            <p className="amount">$420</p> 
            <p className="desc">Previous transactions processing.Last payments may not be included.</p>
        </div>
        <div className="summary" style={{
          width: "100%",
          justifyContent:"space-between",
            display: "flex",
            alignItems: "center"  }}>
          
          {T_data.map((i,index)=>(<Target_data title={i.title} icon={i.icon} amount={i.amount} color={i.color} key={index}/>))}
          
        </div>
    </div>
  )
}

export default Featured