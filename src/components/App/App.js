import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';

import Hero from '../Hero/Hero';
import TextSection from '../TextSection/TextSection';
import Gallery from '../Gallery/Gallery';
import CallUs from '../CallUs/CallUs';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <main className="App">
      <SimpleReactLightbox>
        <Hero />
        <TextSection />
        <Gallery />
        <CallUs />
        <Footer />
      </SimpleReactLightbox>
    </main>
  );
};
