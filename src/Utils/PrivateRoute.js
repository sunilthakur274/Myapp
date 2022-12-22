
import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
    const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : 
      
      'hi'
    //   <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
    />
  )
}
 
export default PrivateRoute;