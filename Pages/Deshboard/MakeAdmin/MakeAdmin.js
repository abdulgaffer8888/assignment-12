import { Alert, Container } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const MakeAdmin = () => {
    const [email,setEmail]=useState("")
    const [sucess,setSucess]=useState(false)
    const handleOnBlur=e=>{
        setEmail(e.target.value)
    }
    const handleOnSubmit=e=>{
       
        const user={email}
        fetch('https://radiant-wave-51353.herokuapp.com/admin',{
            method:'put',
            headers:{
                'content-type':'application/json'
            },body:JSON.stringify(user)
        }).then(res=>res.json())
         .then(s=>{
            setSucess(true)
         })
        e.preventDefault()
    }

    return (
        <Container sx={{margin:'auto'}}>
             <h2 sx={{marginBottom:"49px"}}>Make an Admin</h2>
            <form onSubmit={handleOnSubmit}>
            <TextField 
            sx={{width:"50%"}} 
            id="standard-basic" 
            label="Enter Email" 
            variant="standard"
            name="email" 
            onBlur={handleOnBlur}
            type="email" />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {sucess && <Alert severity="success">Make Admin successfully!</Alert>}
        </Container>
    );
};

export default MakeAdmin;