import { AppBar, Box, Button, Typography, Toolbar, Container, Grid, CircularProgress, Card, CardContent, Rating, CardActions } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
// import { addToProduct } from '../../../Redux/cartRedux';
// import Product from './Product';
import { CardMedia } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CommentsDisabledOutlined } from '@mui/icons-material';


const Experiences = () => {
    // const { isLoading } = useAuth()
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [blog, setBlog] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const size = 6;
    console.log(page, "pageeeee", pageCount, "pageCount")
    useEffect(() => {
        fetch(`https://enigmatic-shelf-41985.herokuapp.com/blogbystatus?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                //     const newData = data.sort((a, b) => 0.5 - Math.random());
                setBlog(data.blogs)
                const count = data.count;
                console.log(count, "count")
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                // setIsLoading(false)

            })
    }, [page])


    return (
        <Container>
            {
                // isLoading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 15 }}>
                //     <CircularProgress />
                //</Box> 
                <Box style={{ marginTop: '50px' }}>
                    <Typography variant="h4" className="primary-color" sx={{ textAlign: 'center', fontWeight: 'medium' }}>Blogs</Typography>
                    <Box style={{ marginTop: '50px' }}>
                        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                            {blog.map(blog =>
                                <Grid item xs={12} sm={4} md={4} key={blog._id}>
                                    {/* <Link style={{ textDecoration: 'none' }} to={`/products/${_id}`}> */}

                                    <Card sx={{ maxWidth: 345, maxHeight: 400, textAlign: 'left' }} className="card childcart">
                                        <Link style={{ textDecoration: 'none' }} to={`/expDetails/${blog._id}`}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                className="cardImage"
                                                image={blog.image}
                                            />
                                            <CardContent>
                                                <Box
                                                    sx={{ display: "flex", justifyContent: "space-between" }}
                                                >
                                                    <Typography
                                                        gutterBottom
                                                        variant="caption"
                                                        sx={{ color: "text.secondary" }}
                                                        component="div"
                                                    >
                                                        {blog.category}
                                                    </Typography>
                                                    {/* <Typography
                                           gutterBottom
                                           variant="caption"
                                           sx={{ color: "text.secondary" }}
                                           component="div"
                                         >
                                           Serial: {item.serial}
                                         </Typography> */}
                                                </Box>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    sx={{ fontWeight: "bold" }}
                                                    component="div"
                                                >
                                                    {blog.title}
                                                </Typography>

                                                <Typography variant="body3" sx={{ color: "text.secondary" }} >
                                                    Information:  {blog.info.slice(0, 100)}
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    sx={{ color: "text.secondary" }}
                                                    component="div"
                                                >
                                                    Cost: $ {blog.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                </Typography>
                                            </CardContent>
                                        </Link>

                                    </Card>
                                </Grid >

                            )}


                        </Grid>

                        <Box sx={{ my: 10, display: 'flex', justifyContent: 'center' }}>
                            <Stack spacing={2} >

                                <Pagination count={pageCount}
                                    // page={page}
                                    variant="outlined"
                                    onChange={(event, value) => setPage(--value)} color="secondary" />

                            </Stack>
                        </Box>

                    </Box>
                </Box>}

        </Container>
    );
};

export default Experiences;