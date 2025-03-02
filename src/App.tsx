import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}

export default App;
