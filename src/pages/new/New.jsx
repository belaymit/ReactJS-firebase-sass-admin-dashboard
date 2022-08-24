import React, { useState } from 'react'

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import "./new.scss"
const New = ({inputs, title, icon}) => {

  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar/>
      <div className="new__container">
        <Navbar/>
          <div className="top">
            <div className="top__icon">
              {icon}
            </div>
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
            </div>
            <div className="right">
              <form>
                <div className="form__input">
                    <label htmlFor="file">Image/File <CloudUploadOutlinedIcon className="icon"/></label>
                    <input type="file" id="file" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                  </div>

                  {inputs.map((input)=>(
                    
                    <div className="form__input" key={input.id}>
                      <label>{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder} />
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