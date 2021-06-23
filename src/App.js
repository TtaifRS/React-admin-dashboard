import React from 'react';
import './app.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="sidebarContainer">
        <SideBar />
        <div className="othersForNow">other page</div>
      </div>
    </div>
  );
};

export default App;
