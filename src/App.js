import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  const [balance,setBalance]=useState(0)
  const [address,setAddress]=useState('')
  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };
  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <BrowserRouter>
      <Navbar updateBalance={updateBalance} updateAddress={updateAddress}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard balance={balance} address={address}/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
