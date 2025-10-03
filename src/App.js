import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Employment from './pages/Employment';
import Contact from './pages/Contact';
import BatchDetails from './pages/BatchDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/batch/:batchId" element={<BatchDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;