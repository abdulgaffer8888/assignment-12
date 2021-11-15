import Header from '../Shares/header/Header'
import Footer from '../Shares/footer/Footer'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Service from '../Home/Service/Service';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


const Bikeexplore = () => {
    const [bikes,setBikes]=useState([])
    useEffect(()=>{
        fetch('https://radiant-wave-51353.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    return (
        <div>
            <Header></Header>
        <Box sx={{marginLeft:'80px'}}>
          <Typography variant="h4" className="py-3 text-primary">Our Collections</Typography>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                 bikes.map(dat=><Service 
                  key={dat._id}
                  service={dat}
                  ></Service>)
              }
          </Grid>
          </Box>
          <Footer></Footer>
        </div>
    );
};

export default Bikeexplore;