import React from 'react';
import './featuredInfo.css';
import { featuredData } from '../../static/featuredData';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      {featuredData.map((data, index) => {
        const { title, money, rate, IconComponent, styleName } = data;
        return (
          <div className="featuredItem" key={index}>
            <span className="featuredTitle">{title}</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">{money}</span>
              <span className="featuredMoneyRate">
                {rate} <IconComponent className={`featuredIcon ${styleName}`} />
              </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedInfo;
