import React from 'react';
import './sidebar.css';
import SideBarList from '../SideBarList';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <SideBarList />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
