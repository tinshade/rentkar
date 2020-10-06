import React from 'react';
import Header from './components/UI/Header';
import MajorCarousel from './components/UI/MajorCarousel';
import CovidBanner from './components/UI/CovidBanner';
import ExploreSection from './components/UI/ExploreSection';
import WhatsHotSection from './components/UI/WhatsHotSection';
import LYISection from './components/UI/LYISection';
import OurPromises from './components/UI/OurPromises';
import CustomerReview from './components/UI/CustomerReview';
import Footer from './components/UI/Footer'; 

function App() {
  return (
    <div>
      <Header/>
      <MajorCarousel/>
      <CovidBanner/>
      <ExploreSection/>
      <WhatsHotSection/>
      <LYISection/>
      <OurPromises/>
      <CustomerReview/>
      <Footer/>
    </div>
  );
}

export default App;
