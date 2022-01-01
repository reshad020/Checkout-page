import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../useHooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    
    return (
         user.email? 
         children
        : <Navigate to="/login" />
    );
};

export default PrivateRoute;