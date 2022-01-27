import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../../../images/logo2.png";
import useAuth from "../../../hook/useAuth";
import { CardMedia } from "@mui/material";

const ElevationScroll = (props) => {
    const { children, window } = props;




    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    const { user, logOut } = useAuth();
    console.log(user);
    // const cart = useSelector((state) => state.cart.cart);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: "0 4px",
        },
    }));

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ backgroundColor: 'rgb(220, 219, 217)' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                            >
                                <Link style={{ textDecoration: "none", color: "white" }} to="/home">
                                    {/* <img width="100px" height="70px" src={logo} alt="" /> */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CardMedia

                                            component="img"
                                            style={{ width: '160px' }}
                                            image="https://www.gninsurance.com/wp-content/uploads/2019/06/logo.svg"
                                            alt="green iguana"
                                        />
                                    </Box>
                                </Link>
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon sx={{ color: '#F59C41' }} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        a: { textDecoration: "none", color: "black" },
                                        display: { xs: "block", md: "none" },
                                    }}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Link to={"/home"}>Home</Link>
                                    </MenuItem>
                                    {/* <MenuItem onClick={handleCloseNavMenu}>
                                        <Link to={"/products"}>Products</Link>
                                    </MenuItem> */}
                                    {user.email ? <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography onClick={logOut} >Log-Out</Typography>
                                    </MenuItem>
                                        : <MenuItem onClick={handleCloseNavMenu}>
                                            <Link to={"/Login"}>Login</Link>
                                        </MenuItem>
                                    }
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                            >
                                <CardMedia

                                    component="img"
                                    style={{ width: '160px' }}
                                    image="https://www.gninsurance.com/wp-content/uploads/2019/06/logo.svg"
                                    alt="green iguana"
                                />
                            </Typography>

                            <Box
                                sx={{
                                    a: { textDecoration: "none", color: '#F59C41', fontWeight: 'bold' },
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <MenuItem>
                                    <Link to={"/home"}>Home</Link>
                                </MenuItem>
                                {/* <MenuItem>
                                    <Link to={"/Products"}>Products</Link>
                                </MenuItem> */}
                                {/* {user.email ? <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography onClick={logOut} sx={{ color: '#F59C41', fontWeight: 'bold' }} >Log-Out</Typography>
                                </MenuItem>
                                    : <MenuItem onClick={handleCloseNavMenu}>
                                        <Link to={"/Login"}>Login</Link>
                                    </MenuItem>
                                } */}

                                <MenuItem>
                                    {!user.email && <Link to={"/Login"}>Login</Link>}
                                </MenuItem>
                            </Box>

                            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#F59C41', mr: 2, display: { xs: 'none', md: 'block' } }}>{user?.displayName}</Typography>
                                {/* <Link to="/cart">
                                    <IconButton aria-label="cart" sx={{ mr: 3 }}>
                                        <StyledBadge badgeContent={cart.length} color="secondary">
                                            <ShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Link> */}
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ a: { textDecoration: "none", color: "black" }, mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {/* <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Profile"}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Account"}>Account</Link>
              </MenuItem> */}
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Link to={"/Dashboard"}>Dashboard</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        {user.email && (
                                            <Button varient="contained" color="error" onClick={logOut}>
                                                Logout
                                            </Button>
                                        )}
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}