import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const Services = () => {
    const [bikes,setBikes]=useState([])
    useEffect(()=>{
        fetch('https://radiant-wave-51353.herokuapp.com/bikes')
        .then(res=>res.json())
        .then(data=>setBikes(data))
    },[])
    console.log(bikes)
    return (
        <div>
          <Box sx={{marginLeft:'80px'}}>
          <Typography variant="h4" className="py-3 my-3 text-primary">Our Collections</Typography>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                  bikes.slice(0,6).map(dat=><Service 
                  key={dat._id}
                  service={dat}
                  ></Service>)
              }
          </Grid>
          </Box>
        </div>
    );
};

export default Services;