import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar" 
import Navbar from "../../component/navbar/Navbar" 
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import "./new.scss"; 
import { useState } from 'react';
const New = ({inputs,title}) => { 
  const [file,setFile]=useState("")
  console.log(file)
  return (
    <div className='new'> 
    <Sidebar/> 
    <div className="newContainer">
      <Navbar/> 
      <div className="top">
          <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
          src={file ? URL.createObjectURL(file) : "https://tse2.mm.bing.net/th?id=OIP.edS2RBz3r25hD8liQPTzNgHaGB&pid=Api&P=0&h=180"} alt="sample photo" /></div> 
        <div className="right">
              <form action="">  
              <div className="formInput">
                <label htmlFor="file">
                Upload Image: <DriveFolderUploadOutlined style={{cursor:"pointer"}}/>
                </label>            
                <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>  
              {inputs.map((i,index)=>(
                <div className="formInput" key={index}>
                <label htmlFor="">{i.label}</label> 
                <input type={i.type} placeholder={i.placeholder}/>
              </div> 
              ))}

          
              <button>Send</button>
              </form>
        </div>

      </div>
      
    </div>

    </div>
  )
}

export default New