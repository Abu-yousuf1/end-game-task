import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { CircularProgress, Box } from '@mui/material';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>;
    }
    if (user.email) {
        return children;
    } else return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;