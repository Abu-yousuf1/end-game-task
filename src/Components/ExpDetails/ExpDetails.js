import { Box, Card, CardContent, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation'


const ExpDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://enigmatic-shelf-41985.herokuapp.com/blogbyid/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])
    console.log(reviews, "rew..")

    useEffect(() => {
        fetch(`https://enigmatic-shelf-41985.herokuapp.com/expeByQuery/${blog.category}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [blog.category])
    return (
        <div>
            <Navigation />
            <Container sx={{ mt: 8 }}>
                {/* <Typography variant="h4" sx={{ my: 5 }}>Details</Typography> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img src={blog.image} style={{ width: '100%' }} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>Title: {blog.title}</Typography>
                            <Typography variant="h6" sx={{ mb: 2, color: 'info.main' }}>Information: {blog.title}</Typography>

                            <Typography variant="h6" sx={{ mb: 2, }}> Total Cost ${blog.cost}</Typography>
                            <Typography variant="body3" sx={{ mb: 2, color: 'text.secondary' }}> Description : {blog.Description}</Typography>
                            <Typography variant="h6" sx={{ mb: 2, color: 'text.disabled' }}>Location: {blog.location}</Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Box>
                    <Typography variant="h4" className="primary-color" sx={{ textAlign: 'center', fontWeight: 'medium', color: 'warning.main', mt: 5 }}>REVIEWS</Typography>
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

            </Container>
            <Footer />
        </div>
    );
};

export default ExpDetails;