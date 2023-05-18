import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from"../../component/navbar/Navbar" 
import Chart from "../../component/chart/Chart" 
import List from "../../pages/list/List" 


import "./single.scss" 
import Datatable from '../../component/datatable/Datatable';

const Single = () => {
  return (
    <div className="single">
    
      <Sidebar/> 
     
      <div className="singleContainer">
      <Navbar/> 
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
         <h1 className="title">Information</h1>
         <div className="item">
          <img src="/images/kavya1.png" alt="image of the admin" className="itemImg"/> 
          <div className="details">
            <h1 className="itemTitle">Kavya Srivastava</h1> 
            <div className="detailItem">
              <span className="itemKey">Phone:</span> 
              <span className="itemValue">+91 9650363830</span>
            </div> 
            <div className="detailItem">
              <span className="itemKey">Email:</span> 
              <span className="itemValue">sangubitiya@gmail.com</span>
            </div> 
            <div className="detailItem">
              <span className="itemKey">Address:</span> 
              <span className="itemValue">C2-119/Shriniketan Kunj,Rohini,Delhi</span>
            </div> 
            <div className="detailItem">
              <span className="itemKey">Country:</span> 
              <span className="itemValue">India</span>
            </div>
          </div>
         </div>
        </div>
        <div className="right">
          <Chart title="User spending(Last 6 months revenue)"/>
        </div>
      </div>
      <div className="bottom"> 
      <h1 className="title">Last Transactions</h1>
      <Datatable/>
      </div>
      
      </div>
    </div>
  )
}

export default Single