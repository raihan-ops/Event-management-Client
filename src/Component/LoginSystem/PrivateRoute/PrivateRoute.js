import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import Spinner from '../../Shared/Spinner/Spinner';

const PrivateRoute = ({ children, ...rest }) => {
    const { user,isLoading } = useAuth()
    let location = useLocation();
    if (isLoading) { return <Spinner></Spinner> }
    if (user?.email) {
        console.log(children);
        return children;
    }
    
      return <Navigate to="/login" state={{ from: location }} />;
    
    
     
};

export default PrivateRoute;