import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete'

const ManageAllOrder = () => {
   const [orders,setOrders]=useState([])
   const [suc,setSuc]=useState(false)
   useEffect(()=>{
      fetch('https://radiant-wave-51353.herokuapp.com/orders')
      .then(res=>res.json())
      .then(data=>{
        setOrders(data)
        setSuc(false)
      })
   },[suc])
   const handleDeleteOrder=id=>{
    const url=`https://radiant-wave-51353.herokuapp.com/order/${id}`;
    const process=window.confirm("Want to delete!!!!!!!")
    if(process){
      fetch(url,{
        method:'delete',
        headers:{
          'content-type':'application/json'
        }
      }).then(res=>res.json())
      .then(order=>{
          if(order.deletedCount>0){
              alert('Deteted successfully')
              const remainingOrders=orders.filter(d=>d._id!==id)
              setOrders(remainingOrders)
          }
      })
    }
   }
   const handleOnUpdate=id=>{
    const url=`https://radiant-wave-51353.herokuapp.com/order/${id}`;
    fetch(url,{
      method:'put',
      headers:{
        'content-type':'application/json'
      }
    }).then(res=>res.json())
    .then(ok=>{
      setSuc(true)
    })

    
   }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{background:'rgba(3,3,3,0.3)'}}>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          {
            orders.map(order=><TableBody key={order._id}>
              <TableCell >
                <div>
                <img style={{width:'50px',height:'50px'}} src={order.bike.img} alt=""></img>
                </div>
              </TableCell>
              <TableCell>{order.bike.name}</TableCell>
              <TableCell>{order.bike.Price}</TableCell>
              <TableCell>{order.bike.company}</TableCell>
              <TableCell><DeleteIcon onClick={()=>handleDeleteOrder(order._id)} /></TableCell>
              <TableCell onClick={()=>handleOnUpdate(order._id)}>{order.status}</TableCell>
              </TableBody>)
          }
        </Table>
      </TableContainer>
    );
};

export default ManageAllOrder;