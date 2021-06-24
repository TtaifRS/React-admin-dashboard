import React from 'react';
import './home.css';

import FeaturedInfo from '../../components/FeaturedInfo';
import Chart from '../../components/Chart';
import WidgetLarge from '../../components/WidgetLarge';
import WidgetSmall from '../../components/WidgetSmall';

import { userData } from '../../static/userData';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytic" data={userData} grid dataKey="Active User" />
      <div className="homeWidget">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
