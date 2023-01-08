import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Opportunities from './pages/Opportunities';
import Splytr from './pages/Splytr';
import Monopoly from './pages/Monopoly';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/opportunities" element={<Opportunities />}/>
        <Route path="/splytr" element={<Splytr />}/>
        <Route path="/monopoly" element={<Monopoly />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
