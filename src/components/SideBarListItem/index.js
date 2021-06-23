import React from 'react';
import './sidebarlistitem.css';

const SideBarListItem = ({ name, Component, styleName }) => {
  return (
    <div>
      <li className={`sidebarlistItem ${styleName}`}>
        <Component className="sidebarIcon" />
        {name}
      </li>
    </div>
  );
};

export default SideBarListItem;
