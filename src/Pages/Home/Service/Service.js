import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {_id, name, description, img ,Price,company,discount} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
          <Link to={`/placeorder/${_id}`}>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {company}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <strong>Price:    </strong><span>{Price}</span>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          <strong>Discount    </strong><span>{discount}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        
      </CardActions>
    </Card>
          </Link>
        </Grid>
    );
};

export default Service;