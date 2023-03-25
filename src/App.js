import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/screens/Home/Home';
import Skills from './components/screens/Skills/Skills';
import About from './components/screens/About/About';
import Contacts from './components/data/Contacts';
import Timelines from './components/screens/Timelines/Timelines';
import Errors from './components/global/Errors';
import Education from './components/screens/Timelines/Education';
import Experience from './components/screens/Timelines/Experience';
import NavBar from './components/global/Nav';
import Projects from './components/screens/portfolio/projects';
import Coding from './components/screens/portfolio/Coding';
import Portfolio from './components/screens/portfolio/portfolio';
import Achievements from './components/screens/portfolio/Achievements';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      <BrowserRouter>
        <button
          className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-lg" />
        </button>
        
        <NavBar />

        <Routes>

          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/skills" element={<Skills />} exact />
          <Route path="/contacts" element={<Contacts />} exact />


          <Route path="*" element={<Errors />} exact />

          <Route path='/timelines/' element={< Timelines />} >
            <Route index element={<Experience />} />
            <Route path='experience' element={<Experience />} />
            <Route path='education' element={<Education />} />

          </Route>
          <Route path='/portfolio/' element={< Portfolio />} >
            <Route index element={<Projects />} />
            <Route path='projects' element={<Projects />} />
            <Route path='coding' element={<Coding />} />
            <Route path='achievement' element={<Achievements />} />

          </Route>



        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
