import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Work from './pages/Work';
import RisperStyling from './pages/case-studies/RisperStyling';
import StormXccessories from './pages/case-studies/StormXccessories';
import RidgeAlloys from './pages/case-studies/RidgeAlloys';
import TheLoftCastlerock from './pages/case-studies/TheLoftCastlerock';

import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies/risper-styling" element={<RisperStyling />} />
          <Route path="/case-studies/storm-xccessories" element={<StormXccessories />} />
          <Route path="/case-studies/ridge-alloys" element={<RidgeAlloys />} />
          <Route path="/case-studies/the-loft-castlerock" element={<TheLoftCastlerock />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;