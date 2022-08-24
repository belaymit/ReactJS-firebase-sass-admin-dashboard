import React from 'react'
import "./table.scss"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import elec_tv011 from "../../assests/images/elec_tv011.jpg"
import elec_001 from "../../assests/images/elec_001.jpg"
import cos001 from "../../assests/images/cos001.jpg"
import cs_011 from "../../assests/images/cs_011.jpg"
import fr_010 from "../../assests/images/fr_010.jpg"
import mb002 from "../../assests/images/mb002.jpg"
import lap__010 from "../../assests/images/lap__010.jpg"
import fr_012 from "../../assests/images/fr_012.jpg"



const List = () => {
  
  const rows = [
    {
        id:1345233,
        product:"Apple Flat Screen TV",
        img:elec_tv011,
        customer:"Belay Birhanu",
        date: "21 August, 2022",
        amount:543,
        method:"Credit Card",
        status:"Approved", 
    },
    {
        id:1545743,
        product:"HP Laptop",
        img:elec_001,
        customer:"Belay Birhanu",
        date: "17 August, 2022",
        amount:758,
        method:"Cash On Delivery",
        status:"Approved", 
    },
    {
        id:1241133,
        product:"Brand Perfume",
        img:cos001,
        customer:"Belay Birhanu",
        date: "01 August, 2022",
        amount:300,
        method:"Credit Card",
        status:"Approved", 
    },
    {
        id:1545639,
        product:"Male Shampoo",
        img:cs_011,
        customer:"Belay Birhanu",
        date: "21 April, 2022",
        amount:780,
        method:"Cash On Deliver",
        status:"Approved", 
    },
    {
        id:2445577,
        product:"Home Furniture",
        img:fr_010,
        customer:"Belay Birhanu",
        date: "15 May, 2022",
        amount:900,
        method:"Loan",
        status:"Approved", 
    },
    {
        id:1942100,
        product:"Sumsung Mobile",
        img:mb002,
        customer:"Belay Birhanu",
        date: "21 February, 2022",
        amount:100,
        method:"Cash on Delivery",
        status:"Pending", 
    },
    {
        id:1545255,
        product:"New MacBook",
        img:lap__010,
        customer:"Belay Birhanu",
        date: "29 July, 2022",
        amount:1200,
        method:"Credit Card",
        status:"Approved", 
    },
    {
        id:1236698,
        product:"Comfort Cauch",
        img:fr_012,
        customer:"Belay Birhanu",
        date: "12 June, 2022",
        amount:900,
        method:"Online Payement",
        status:"Pending", 
    },

];
  
    return (
    <TableContainer component={Paper} class="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="productImg" />
                {row.product}
              </div>
                </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default List