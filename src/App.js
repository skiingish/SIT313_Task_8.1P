import React from 'react';
import './App.css';
import NavBar from './NavBar';
import BannerImage from './BannerImage';
import Footer from './Footer';
import FeaturedExperts from './FeaturedExperts';

function App() {
  return (
    <div>
      <NavBar />
      <BannerImage />
      <FeaturedExperts />
      <Footer />
    </div>
  );
}

export default App;
