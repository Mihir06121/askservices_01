import React, { useEffect } from 'react';
import './App.css';
import Routes from './Routes'
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar"
import AOS from 'aos'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <Router>
      {/* <Navbar> */}
        <Routes/>
      {/* </Navbar> */}
    </Router>
  );
}

export default App;
