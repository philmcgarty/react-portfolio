import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  const [categories] = useState([
    {name: 'About Me'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  
  return (
    <div className="App">
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} 
      />
      <main>
        <p>Content will go here!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
