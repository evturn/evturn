import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ data }) => {
  return (
    <Helmet>
      {data.favicons.map(({ href, ...props }) =>
        <link 
          {...props} 
          href={require(`static/favicons/${href}`)} />)}
      <link 
        rel="canonical" 
        href="https://evturn.com/" />
      <title>Evan Turner | Software Engineer</title>
    </Helmet>
  );
};

export default Head;
