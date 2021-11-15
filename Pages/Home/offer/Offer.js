import { Container, Grid, Typography} from '@mui/material';
import React from 'react';

const Offer = () => {
    return (
        <div>
           <Container>
           <Grid container  spacing={5} columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid item xs={4} sm={4}  sx={{backgroundColor:'green',width:'30%'}} >
            <Typography variant="h6" sx={{mt:4,color:'white'}} component="h6">
               10% discount if You our Old customer.
            </Typography>;
            </Grid>
            <Grid className='bg-info' sx={{width:'30%'}} item sm={4} xs={4}>
            <Typography variant="h6" sx={{mt:4,color:'white'}} component="h6">
               10% discount if pay with ATM card.
            </Typography>;
            </Grid>
            <Grid className='bg-primary' sx={{width:'30%'}} item sm={4} xs={4}>
            <Typography variant="h6" sx={{mt:4,color:'white'}} component="h6">
               2% discount for Independence day.
            </Typography>;
            </Grid>
            </Grid>
           </Container>
        </div>
    );
};

export default Offer;