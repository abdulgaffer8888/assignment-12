import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress} from '@mui/material';
import  { useState,useEffect } from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useParams,useHistory } from 'react-router';

const PlaceOrder = () => {
    const [address, setAddress] = useState({});
    const [bike,setBike]=useState([])
    const [sucess,setSucess]=useState(false)
    const history = useHistory();
    const {user}=useAuth()
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://radiant-wave-51353.herokuapp.com/bike/${id}`)
        .then(res=>res.json())
        .then(data=>setBike(data))
    },[])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...address };
        newData[field] = value;
        setAddress(newData);
    }
    const userName=user.displayName
    const email=user.email
    const status='pendding'
    const handleLoginSubmit = e => {
        const order={bike,userName,email,status,address}
        fetch('https://radiant-wave-51353.herokuapp.com/orders',{
            method:"Post",
            headers:{
                'content-type':'application/json'
            },body:JSON.stringify(order)
        }).then(res=>res.json())
          .then(data=>{
            if (data.insertedId) {
                setSucess(true)
                history.push("/deshboard/order")
              }
          })
        e.preventDefault();
    }
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Enter your Address</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label=""
                            name="name"
                            disabled
                            defaultValue={user?.displayName}
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Enter Your Address"
                            type="text"
                            name="Adresss"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Phone Number"
                            type="text"
                            name="Phone"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Enter Quantity"
                            type="text"
                            name="quantity"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Place Order</Button>
                        </form>
                        {sucess && <CircularProgress />}
                </Grid>
                <Grid item xs={12} sx={{ mt: 8 }}  md={6}>
                    <h1>{bike.name}</h1>
                    <img style={{ width: '100%' }} src={bike.img} alt="" />
                    <Typography variant="body2" color="text.secondary">
                    {bike.description}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default PlaceOrder;