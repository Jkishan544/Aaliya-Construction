import './App.css';
import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from "./components/Footer";
 
 
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Neeta = React.lazy(() => import('./pages/Neeta'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));


function App() {
  return (
    <div className='App'  >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>

      <main >
                   <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="neeta-residency" element={<Neeta />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
       </main>
       </Suspense>

      <Footer />

    </div>
  );
}

export default App;
