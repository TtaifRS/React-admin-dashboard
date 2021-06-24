import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/FeaturedInfo';
import Chart from '../../components/Chart';
import { userData } from '../../static/userData';
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytic" data={userData} grid dataKey="Active User" />
    </div>
  );
};

export default Home;
