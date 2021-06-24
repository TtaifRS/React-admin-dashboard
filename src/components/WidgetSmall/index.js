import React from 'react';
import './widgeSmall.css';

import WidgetSmallList from '../WidgetSmallList';

const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <WidgetSmallList />
    </div>
  );
};

export default WidgetSmall;
