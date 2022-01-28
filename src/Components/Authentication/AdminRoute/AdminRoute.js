import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import useAuth from '../../../hook/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin } = useAuth();
    console.log(isAdmin, user.email, "from admin route")
    const location = useLocation();
    if (isLoading) {
        return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>;
    }
    if (user.email && isAdmin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;