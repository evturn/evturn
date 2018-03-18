import React from 'react';
import { Route as R } from 'react-router-dom';

const Route = ({ component: C, data, ...rest }) => {
  return (
    <R 
      {...rest} 
      render={props => 
        <C 
          {...props} 
          data={data} 
        />
      } 
    />
  );
};

export default Route;
