import React from 'react';
import { Navigate } from 'react-router-dom';


function AuthComponent(props) {
  const { path ,Children} = props
  return localStorage.getItem('token') ? Children : <Navigate to={path} />;
}

export default AuthComponent;