
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import React from 'react';
import GeoChart from './components/GeoChart';
import data from "./GeoChart.world.geo.json";

export default function App() {
 
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <GeoChart data={data} />
    
    </div>
  );
}


