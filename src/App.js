import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  // pages that will be rendered 
  const [categories] = useState([
    {name: 'About Me'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ]);
  // variables copied from module
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  // main layout for page
  return (
    <div className="App">
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected} 
      />
      <main>
        <MainContent 
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
