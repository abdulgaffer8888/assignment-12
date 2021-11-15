import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
const Review = (props) => {
  const { img ,Name,comment,rating} = props.review;
  return (
    <Grid item xs={4} sm={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              borderRadius: "50%",
              backgroundPosition: "center",
            }}
            style={{width:'150px',height:'150px',margin:'auto'}}
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {Name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
             <Rating name="read-only" value={parseInt(rating)} readOnly />
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {comment}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Review;
