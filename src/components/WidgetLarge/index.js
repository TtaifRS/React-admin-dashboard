import React from 'react';
import './widgetLarge.css';
import WidgetLargetable from '../WidgetLargeTable';

const WidgetLarge = () => {
  return (
    <div className="widgetLarge">
      <h3 className=" ">Latest transaction</h3>
      <WidgetLargetable />
    </div>
  );
};

export default WidgetLarge;
