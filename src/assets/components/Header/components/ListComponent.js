import React from 'react';
import { Link } from 'react-router-dom';

export const ListHeader = ({ togglemenu,nav_name, nav_route }) => {
  return (
    <li onClick={togglemenu} style={{ marginBottom: '10px',textAlign:'left' }}>
      <Link  to={nav_route} className='nav_link'>
        {nav_name}
      </Link>
    </li>
  );
};

