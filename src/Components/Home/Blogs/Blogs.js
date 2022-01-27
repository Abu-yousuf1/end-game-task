import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Typography, Toolbar, Container, Grid, CircularProgress, Card, CardContent, Rating, CardActions, CardMedia } from '@mui/material';

const Blogs = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-shelf-41985.herokuapp.com/expe')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Box>
                <Typography variant="h4" className="primary-color" sx={{ textAlign: 'center', fontWeight: 'medium' }}>Experiences</Typography>
                <Box style={{ marginTop: '50px' }} >
                    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >

                        {reviews.slice(0, 3).map(review =>
                            <Grid item xs={12} sm={4} md={4}>


                                <Card sx={{ maxWidth: 345, maxHeight: 364, display: 'flex', justifyContent: "center" }} className="card childcart">

                                    <CardContent>
                                        <Box
                                            sx={{ display: "flex", justifyContent: "space-between" }}
                                        >

                                        </Box>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            sx={{ fontWeight: "bold" }}
                                            component="div"
                                        >
                                            {review.user.name}
                                        </Typography>


                                        <Typography gutterBottom variant="h5" component="div">
                                            <Rating
                                                name="half-rating"
                                                defaultValue={review?.rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                            <Typography
                                                gutterBottom
                                                variant="body2"
                                                sx={{ color: "text.secondary" }}
                                                component="div"
                                            >
                                                {review.Description}
                                            </Typography>

                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid >

                        )}


                    </Grid>

                </Box>
            </Box>
        </div>
    );
};

export default Blogs;