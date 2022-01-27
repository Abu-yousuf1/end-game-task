import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@mui/styles';


const Footer = () => {
    // const style = makeStyles({
    //     bandIcon: {
    //         paddingLeft: "10px"
    //     }
    // })
    // const { bandIcon } = style()
    return (
        <Box sx={{ backgroundColor: "#DCDBD9" }}>
            <Container style={{ marginTop: "100px", paddinTop: "20px", }}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img src="https://www.gninsurance.com/wp-content/uploads/2019/06/logo.svg" alt="" />
                        <Typography variant="body3" sx={{ paddingTop: '10px' }} className=" mt-4 fw-bold">ANDSHOP is an multi-vendor B2C fast e-commerce company. The company mainly focuses on men,women and children wear, but it also offers other apparel, clothes, accessories, shoes, bags and other fashion items.
                        </Typography>
                        <Typography variant="h6" style={{ color: "#F37539", marginTop: "10px", fontWeight: 'bold' }}>SUBSCRIBE</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <h5 >USEFUL LINKS</h5>
                        <Link as={Link} style={{ display: 'block', textDecoration: 'none', color: "#F37539" }} to='/home'>Home</Link>
                        <Link as={Link} style={{ display: 'block', textDecoration: 'none', color: "#F37539" }} to='/products'>Products</Link>

                        {/* <Link as={Link}  style={{display:'block'}} to='/dashboard'>Dashboard</Link> */}

                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div>
                            <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" /><br />
                            <div className="text-center mt-5">
                                <i className="fab fa-facebook text-muted fs-3 " ></i>
                                <i className="fab fa-twitter text-muted ps-3 fs-3 " style={{ paddingLeft: "10px" }}></i>
                                <i className="fab fa-instagram-square text-muted ps-3 fs-3 " style={{ paddingLeft: "10px" }}></i>
                                <i className="fab fa-vimeo-v text-muted ps-3 fs-3 " style={{ paddingLeft: "10px" }}></i>
                            </div>
                        </div>
                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;