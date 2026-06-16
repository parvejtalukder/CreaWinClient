import React from 'react';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';
import { Navigate, useLocation } from 'react-router';
import Loader from '../utils/Loader/Loader';
import Forbidden from '../dashboard/Forbidden/Forbidden';

const CreatorRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const { userData, userDataLoading }  = useUser();
    console.log(userData.role)
    const location = useLocation();

    if (loading || userDataLoading) {
        return <Loader></Loader>;
    }

    if (!user) {
       return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (userData.role !== 'creator' && !userDataLoading) {
        return <Forbidden></Forbidden>
    }

    return children;

};

export default CreatorRoute;