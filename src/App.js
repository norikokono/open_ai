// Reference: Skolo Online, Create AI Content Generator with Reactjs GPT-3 OpenAI API, https://www.youtube.com/watch?v=Xxtu-bkSAB8

import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductDescription from './components/ProductDescription';
import ColdEmails from './components/ColdEmails';
import Tweets from './components/Tweets';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/product-description" element={<ProductDescription/>} />
          <Route path="/cold-emails" element={<ColdEmails/>} />
          <Route path="/tweets" element={<Tweets/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
