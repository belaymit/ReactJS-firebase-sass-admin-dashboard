import React, {useEffect, useState} from 'react'
import { Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"

import "./datatable.scss"
import { db } from '../../firebaseStore';
import { collection, onSnapshot } from 'firebase/firestore';




const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];






const Datatable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    const usub = onSnapshot(collection(db, "users"), (snapshot)=>{
      let list = [];
      snapshot.docs.forEach((doc)=>{
        list.push({id: doc.id, ...doc.data()})
      });
      setUsers(list);
      setLoading(false);
    }, (error)=>{
      console.log(error)
    });
    return () =>{
      usub();
    }
  },[])
  console.log(users)

const actionColumns = [
  {filed: "action",
  headerName: "Action",
  width:200,
  renderCell: ()=>{
    return(
      <div className="actionCell">
        <Link to="/users/test" style={{textDecoration:"none"}}>
        <div className="viewButton">View</div>
        </Link>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}
]


const userColumns = [
  {field:"id", headerName:"ID", width:70},
  {
    field:"user",
    headerName: "User",
    width:230,
    renderCell: (params) =>{
      return(
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt=""/>
          {params.row.name}
        </div>
      );
    },
  },
  
  {field:"status", headerName:"Status", width:160,
    renderCell:(params)=>{
      return(
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>) 
    }},
  {field:"contact", headerName:"Contact", width:230}
]


  return (
    <div className="datatable">
     
          <DataGrid 
              rows={users}
              columns={userColumns.concat(actionColumns)}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              className="data__grid"
      />        
      
      <div className="addUser">
       <Link to="/users/new"> <Button variant="outlined" startIcon={<AddOutlinedIcon />}>Add User</Button></Link>
      </div>
    </div>
  )
}

export default Datatable