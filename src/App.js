import React from 'react';
import './app.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="sidebarContainer">
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default App;
