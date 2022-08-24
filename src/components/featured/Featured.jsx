import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert"


import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featureChart">
          <CircularProgressbar  value={67} text={"67%"} strokeWidth={3}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$860</p>
        <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, fugiat?</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
                <div className="resultAmount">$22.6K</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$12.4K</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                <div className="resultAmount">$37.8K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured