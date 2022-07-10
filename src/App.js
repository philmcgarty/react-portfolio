import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

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
        <MainContent 
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
