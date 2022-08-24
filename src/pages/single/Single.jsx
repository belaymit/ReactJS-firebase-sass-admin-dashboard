import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Charts from "../../components/charts/Charts"
import JohnMcCarthy from "../../assests/images/0013.jpg"
import "./single.scss"
import List from '../../components/table/List'

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="single__container">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="edit__button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={JohnMcCarthy} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="item__title">Jane Doe</h1>
                  <div className="detail__item">
                    <span className="item__key">Email:</span>
                    <span className="item__value">janedoe@gmail.com</span>
                  </div>
                  <div className="detail__item">
                    <span className="item__key">Email:</span>
                    <span className="item__value">janedoe@gmail.com</span>
                  </div>
                  <div className="detail__item">
                    <span className="item__key">Email:</span>
                    <span className="item__value">janedoe@gmail.com</span>
                  </div>

                  <div className="detail__item">
                    <span className="item__key">Email:</span>
                    <span className="item__value">janedoe@gmail.com</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="right">
            <Charts title="User Spending (Last six Months)" aspect={3 / 1}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single