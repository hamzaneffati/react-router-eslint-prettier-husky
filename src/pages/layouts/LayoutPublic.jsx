import React from 'react';
import {Outlet} from 'react-router-dom';
import Menu from '../../components/Menu';

export const LayoutPublic = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};
