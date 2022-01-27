import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../hook/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { logOut, isAdmin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <br />
            <List><Link to="/home" style={{ textDecoration: "none", color: "#F37539", fontWeight: 'bold', margin: "10px" }} > <HomeIcon sx={{ fontSize: 20, marginBottom: '-4px' }} /> Home</Link></List>
            <List> <Link to="/dashboard" style={{ textDecoration: "none", color: "#F37539", fontWeight: 'bold', margin: "10px" }} > <GridViewIcon sx={{ fontSize: 20, margin: '6px 10px -5px 0' }} />Add Blog</Link></List>

            {!isAdmin && <List> <Link to="/dashboard/addExpe" style={{ textDecoration: "none", color: "#F37539", fontWeight: 'bold', margin: "10px" }} > <GridViewIcon sx={{ fontSize: 20, margin: '6px 10px -5px 0' }} />Add  Experience</Link></List>}
            {isAdmin && <Box>
                <List> <Link to="/dashboard/Blogbyuser" style={{ textDecoration: "none", color: "#F37539", fontWeight: 'bold', margin: "10px" }} > <GridViewIcon sx={{ fontSize: 20, margin: '6px 10px -5px 0' }} />Mange Blog</Link></List>
                <List> <Link to="/dashboard/admin" style={{ textDecoration: "none", color: "#F37539", fontWeight: 'bold', margin: "10px" }} > <GridViewIcon sx={{ fontSize: 20, margin: '6px 10px -5px 0' }} />Add Admin</Link></List></Box>}
            <List> <Typography variant="body3" onClick={logOut} style={{ textDecoration: "none", color: "#F37539", fontWeight: 'bold', margin: "10px" }} > <LogoutIcon sx={{ fontSize: 20, margin: '6px 10px -5px 0' }} />LogOut</Typography></List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#DCDBD9",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Dashboard;