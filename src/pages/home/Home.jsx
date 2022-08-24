import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Widgets from '../../components/widgets/Widgets'
import Featured from "../../components/featured/Featured"
import Charts from "../../components/charts/Charts"

import "./home.scss"
import List from '../../components/table/List'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts title="Last Six Months (Revenue)" aspect={2 / 1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home