import React from 'react';
import './widgetSmallList.css';

import { widgetSmallData } from '../../static/widgetSmallData';

import { Visibility } from '@material-ui/icons';

const WidgetSmallList = () => {
  return (
    <ul className="widgetSmallList">
      {widgetSmallData.map((data, index) => {
        const { src, name, title } = data;
        return (
          <li className="widgetSmallListItem" key={index}>
            <img src={src} alt={name} className="widgetSmallImage" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUserName">{name}</span>
              <span className="widgetSmallUserTitle">{title}</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default WidgetSmallList;
