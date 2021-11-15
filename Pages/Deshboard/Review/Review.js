import React from 'react';
import { Container, Typography, TextField, Button, /* CircularProgress, Alert */ } from '@mui/material';
import  { useState } from 'react';
const Review = () => {
    const [review, setReview] = useState({});
    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviews = { ...review };
        newReviews[field] = value;
        setReview(newReviews);
    }
    const handleLoginSubmit = e => {
        const url=`https://radiant-wave-51353.herokuapp.com/reviews`;
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json',
            },body:JSON.stringify(review)
        }).then(res=>res.json())
        .then(s=>alert('sucessfuly one'))
        e.preventDefault();
    }

    return (
        <Container>
                <Typography variant="body1" gutterBottom>Give Review</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Enter Your Name"
                        type="text"
                        name="Name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Enter Your Image url"
                        type="text"
                        name="img"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Write your comment"
                        type="text"
                        name="comment"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Enter Rating"
                        type="text"
                        name="rating"
                        onBlur={handleOnBlur}
                        variant="standard" />

                    <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Review</Button>
                    </form>
    </Container>
    );
};

export default Review;