import React from 'react';
import SideBarListItem from '../SideBarListItem';

import { sidebarData } from '../../static/sidebarData';
import './sidebarlist.css';

const SideBarList = () => {
  return (
    <>
      {sidebarData.map((data, index) => {
        const { title, sidebarList } = data;
        return (
          <div key={index} className="sidebarListContainer">
            <div className="sidebarTitle">{title}</div>
            <ul className="sidebarList">
              {sidebarList.map((list) => {
                const { id, name, component, styleName } = list;
                return (
                  <SideBarListItem
                    key={id}
                    name={name}
                    Component={component}
                    styleName={styleName}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default SideBarList;
