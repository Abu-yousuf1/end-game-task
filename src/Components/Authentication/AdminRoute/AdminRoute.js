import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { CircularProgress, Box } from '@mui/material';

const AdminRoute = ({ children }) => {
    const { user, isLoading, isAdmin } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>;
    }
    if (user.email && isAdmin) {
        return children;
    } else return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;