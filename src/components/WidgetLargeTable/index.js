import React from 'react';
import './widgetLargeTable.css';

import { widgetLargeTableData } from '../../static//widgetLargeTableData';

const Button = ({ type }) => {
  return <button className={`widgetLargeButton ${type}`}>{type}</button>;
};

const WidgetLargetable = () => {
  return (
    <table className="widgetLargeTable">
      <tr className="widgetLargeTr">
        <th className="widgetLargeTh">Customer</th>
        <th className="widgetLargeTh">Data</th>
        <th className="widgetLargeTh">Amount</th>
        <th className="widgetLargeTh">Status</th>
      </tr>
      {widgetLargeTableData.map((data, index) => {
        const { src, name, amount, date, type } = data;
        return (
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img src={src} alt={name} className="widgetLargeImg" />
              <span className="widgetLargeName">{name}</span>
            </td>
            <td className="widgerLargeDate">{date}</td>
            <td className="widgetLargeAmount">{amount}</td>
            <td className="widgerLargeStatus">
              <Button type={type} />
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default WidgetLargetable;
