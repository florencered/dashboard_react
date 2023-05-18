import React from 'react' 
import "./target_data.scss";

const Target_data = ({title,icon,amount,color}) => {
  return (
     <div className="itemTitle">{title}
            <div className="itemResult"> 
            {icon}
              <div className="resultAmount" style={{color:{color}}}>{amount}</div>
            </div>
            </div> 
  )
}

export default Target_data;