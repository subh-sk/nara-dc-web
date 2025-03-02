import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Commands from './components/Commands';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
    <Analytics />
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Features />
        <Commands />
      </main>
    </>
  );
}

export default App;