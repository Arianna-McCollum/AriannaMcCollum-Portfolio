import React from 'react';
import About from './components/About';
import Services from './components/Services';
// import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Nav';


function App() {
  return (
    <div>
      <main>
      <Navigation>
      </Navigation>
        <Header ></Header>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        {/* <ContactForm></ContactForm> */}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;