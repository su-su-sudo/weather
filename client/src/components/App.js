import React from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';
require('dotenv').config()

function App() {
  
  return (
    <div>
      <Header />
      <Card/>
      <Footer />
    </div>
  )}

export default App;
