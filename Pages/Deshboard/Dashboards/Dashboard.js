import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete'

const Dashboard = () => {
  const [bikes,setBikes]=useState([])
  useEffect(()=>{
      fetch('https://radiant-wave-51353.herokuapp.com/bikes')
      .then(res=>res.json())
      .then(data=>setBikes(data))
  },[])
  const handleDelete=(id)=>{
    const process=window.confirm("Are You Want to Delete!!!!!!")
    if(process){
      const url=`https://radiant-wave-51353.herokuapp.com/bike/${id}`
      fetch(url,{
        method:'delete',
        headers:{
          'content-type':'appliction/json'
        }
      }).then(res=>res.json())
      .then(bike=>{
          if(bike.deletedCount>0){
              alert('Deteted successfully')
              const remainingProduct=bikes.filter(d=>d._id!==id)
              setBikes(remainingProduct)
          }
      })
    }
  }
    return (
        <div>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{background:'rgba(3,3,3,0.3)'}}>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
            {
              bikes.map(bike=><TableBody key={bike._id}>
                  <TableCell >
                <div>
                <img style={{width:'30px',height:'30px'}} src={bike.img} alt=""></img>
                </div>
              </TableCell>
                <TableCell >{bike.name}</TableCell>
                <TableCell>{bike.Price}</TableCell>
                <TableCell>{bike.company}</TableCell>
                <TableCell><DeleteIcon onClick={()=>handleDelete(bike._id)} /></TableCell>
                <TableCell>Edit</TableCell>
                </TableBody>)
            }
        </Table>
      </TableContainer>
        </div>
    );
};

export default Dashboard;