import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'particles.js';

export default function App() {

  particlesJS.load()

  return (
    <div id="particles.js" className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
