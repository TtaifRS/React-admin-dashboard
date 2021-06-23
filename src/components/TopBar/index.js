import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const iconDatas = [
  {
    IconComponent: NotificationsNone,
    span: true,
  },
  {
    IconComponent: Language,
    span: true,
  },
  {
    IconComponent: Settings,
    span: false,
  },
];

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">React Admin</span>
        </div>
        <div className="topRight">
          {iconDatas.map((iconData, index) => {
            const { IconComponent, span } = iconData;
            return (
              <div className="topBarIconContainer" key={index}>
                <IconComponent />
                {span ? <span className="topIconBadge">2</span> : null}
              </div>
            );
          })}
          <img
            src="https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
