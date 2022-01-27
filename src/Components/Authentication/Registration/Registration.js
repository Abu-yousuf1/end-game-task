import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Footer from "../../shared/Footer/FooterFooter";
// import Navigation from "../../shared/Navigation/Navigation";
import useAuth from './../../../hook/useAuth';


const Register = () => {
    const { createWithEmailAuth } = useAuth()
    const [registerData, setRegisterData] = useState({});
    // const [display, setDisplay] = useState("none");
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    };
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // registration functionality here
        console.log(registerData, "lkfjsla");
        if (registerData.password === registerData.password2) {
            createWithEmailAuth(registerData.email, registerData.password, registerData.name);
            e.target.reset();
            // setDisplay("none");
        } else {
            // setDisplay("block");
        }


    };
    return (
        <Box>
            {/* <Navigation /> */}
            <Container sx={{ mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} sx={{ mt: 15 }}>
                        <Typography variant="h4">Please Register</Typography>
                        <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                label="Your Name"
                                type="text"
                                name="name"
                                onChange={handleOnBlur}
                                sx={{ width: "70%", m: "auto" }}
                                variant="standard"
                            />
                            <TextField
                                label="Your Email"
                                type="email"
                                name="email"
                                onChange={handleOnBlur}
                                sx={{ width: "70%", m: "auto" }}
                                variant="standard"
                            />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnBlur}
                                sx={{ width: "70%", m: "auto" }}
                                variant="standard"
                            />
                            <TextField
                                label="Confirm Password"
                                type="password"
                                name="password2"
                                onChange={handleOnBlur}
                                sx={{ width: "70%", m: "auto" }}
                                variant="standard"
                            />
                            <br /> <br />
                            {/* <p style={{ color: "red", display: display }}>Password Not Match</p> */}
                            <Button
                                type="submit"
                                style={{
                                    backgroundColor: "#0B1C2E",
                                    textAlign: "left",
                                    marginBottom: "15px",
                                }}
                                variant="contained"
                            >
                                Register
                            </Button>
                        </form>

                        <NavLink style={{ textDecoration: 'none', fontWeight: 600 }} to="/login">
                            Already Registered? Please Login
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img
                            width="90%"
                            height="500px"
                            src="https://i.ibb.co/sp4kCWS/login.jpg"
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Container>
            {/* <Footer /> */}
        </Box>
    );
};

export default Register;
