import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import Grid from '@mui/material/Grid';
import Layout from './Component/Navbar/HomePage/layout';


function App() {
  return( 
    <div className='App'>
      <Navbar />
      <Layout />
    
    </div>

  );
}

export default App;
