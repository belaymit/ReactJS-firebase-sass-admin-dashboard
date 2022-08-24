import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import UserForm from '../../components/userform/UserForm'
import "./registration.scss"

const Registration = () => {
  return (
    <div className="registration">
        <Sidebar/>
        <div className="regContainer">
            <Navbar/>
            <UserForm/>
        </div>
    </div>
  )
}

export default Registration