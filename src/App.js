import React from 'react'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Service from './components/Service';
import Product from './components/Product';
import Benefits from './components/Benefits';
import Feature from './components/Feature';
import Androwash from './components/Androwash';
import Demo from './components/Demo';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Navigation/>
      <Hero/>
      <Problem/>
      <Service/>
      <Benefits/>
      <Product/>
      <Feature/>
      <Androwash/>
      <Demo/>
      <Footer/>
    </div>
  )
}

export default App