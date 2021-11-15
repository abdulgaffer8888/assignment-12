import React from 'react';
import { Container, Typography, TextField, Button, Alert, /* CircularProgress, Alert */ } from '@mui/material';
import  { useState } from 'react';
const AddProduct = () => {
    const [bike, setBike] = useState({});
    const [sucess,setSucess]=useState(false)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...bike };
        newLoginData[field] = value;
        setBike(newLoginData);
        
    }
    const handleLoginSubmit = e => {
        console.log(bike)
        fetch("https://radiant-wave-51353.herokuapp.com/addbikes",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },body:JSON.stringify(bike)
        }).then(res=>res.json())
        .then(data=>{
            setSucess(true)
        })
        e.preventDefault();
    }
    return (
        <div>
            <Container sx={{width:"50%",margin:'auto'}}>
                    <Typography variant="body1" gutterBottom>Enter Product</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Bike Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Enter Company"
                            type="text"
                            name="company"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Image Url"
                            type="text"
                            name="img"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Description"
                            type="text"
                            name="description"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Price"
                            type="text"
                            name="Price"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Dicount"
                            type="text"
                            name="discount"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add New Bike</Button>
                        </form>
                        {sucess && <Alert severity="success">Bike Add successfully!</Alert>}
        </Container>
        </div>
    );
};

export default AddProduct;