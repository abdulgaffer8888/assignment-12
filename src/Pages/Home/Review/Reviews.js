import React,{useState,useEffect} from "react";
import { Container } from "react-bootstrap";
import { Grid, Typography,Box } from "@mui/material";
import Review from "./Review";
const Reviews = () => {
  const [review,setReview]=useState([])
  useEffect(()=>{
      fetch(`https://radiant-wave-51353.herokuapp.com/reviews`)
      .then(res=>res.json())
      .then(data=>setReview(data))
  },[])
  return (
   <Box sx={{marginLeft:'80px'}}>
      <Typography variant="h4" className="py-3 text-primary my-4">Reviews</Typography>
      <Container className="justify-content-center">
          <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
        {review.map((dat) => (
          <Review key={dat._id} review={dat}></Review>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
