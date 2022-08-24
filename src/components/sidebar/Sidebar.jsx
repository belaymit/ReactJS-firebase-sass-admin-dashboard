import React,{ useContext} from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';

import {Link} from "react-router-dom"
import { DarkModeContext } from '../context/darkModeContext';


import "./sidebar.scss"
const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);
   
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">MyDashboard</span>
      </div>
      <div className="center">
          <ul>
            <p className="title">MAIN</p>
            
            <a href="/" className='active'>
              <DashboardIcon className="icon"/><span>Dashboard</span>
            </a>

            <p className="title">LISTS</p>
            <Link to="/users">
              <PersonOutlineIcon className="icon"/><span>Users</span>
            </Link>

            <Link to ="">
              <StoreIcon className="icon"/><span>Products</span>
            </Link>
            
            <Link to ="">
              <CreditCardIcon className="icon"/><span>Orders</span>
            </Link>
            
            <Link to="">
              <LocalShippingIcon className="icon"/><span>Delivery</span>
            </Link>
            
            <p className="title">USEFUL</p>
            <Link to="">
              <InsertChartIcon className="icon"/><span>Stats</span>
            </Link>
            <Link to="">
              <NotificationsNoneIcon className="icon"/><span>Notifications</span>
            </Link>
            <p className="title">SERVICE</p>
            <Link to="">
              <SettingsSystemDaydreamOutlinedIcon className="icon"/><span>System Health</span>
            </Link>
            <Link to="">
              <PsychologyOutlinedIcon className="icon"/><span>Logs</span>
            </Link>
            <Link to="">
              <SettingsApplicationsIcon className="icon"/><span>Settings</span>
            </Link>
            <p className="title">USER</p>
            <Link to="">
              <AccountCircleOutlinedIcon className="icon"/><span>Profile</span>
            </Link>
            <Link to="">
              <LogoutOutlinedIcon className="icon"/><span>Logout</span>
            </Link>
          </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" 
        onClick={()=> dispatch({type:"LIGHT"})}> 
        </div>
        <div className="colorOption"
        onClick={()=> dispatch({type:"DARK"})}>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar