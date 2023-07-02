import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from './components/global/Loader';
import NavBar from './components/global/Nav'
import ChatWoot from './components/data/ChatWood';
import Test from './components/test/Test';

const Contacts = lazy(() => import('./components/data/Contacts'));
const UserData = lazy(() => import('./components/data/UserData'));
const HomePage = lazy(() => import('./components/screens/Home/Home'));
const Skills = lazy(() => import('./components/screens/Skills/Skills'));
const About = lazy(() => import('./components/screens/About/About'));
const Timelines = lazy(() => import('./components/screens/Timelines/Timelines'));
const Errors = lazy(() => import('./components/global/Errors'));
const Login = lazy(() => import('./components/global/Login'));
const Education = lazy(() => import('./components/screens/Timelines/Education'));
const Experience = lazy(() => import('./components/screens/Timelines/Experience'));
const Projects = lazy(() => import('./components/screens/portfolio/projects'));
const Coding = lazy(() => import('./components/screens/portfolio/Coding'));
const Portfolio = lazy(() => import('./components/screens/portfolio/portfolio'));
const Achievements = lazy(() => import('./components/screens/portfolio/Achievements'));

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ChatWoot />
        

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/user" element={<UserData />} exact />
            <Route path="/test" element={<Test />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/skills" element={<Skills />} exact />
            <Route path="/contacts" element={<Contacts />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="*" element={<Errors />} exact />
            <Route path='/timelines/' element={<Timelines />} >
              <Route index element={<Education />} />
              <Route path='experience' element={<Experience />} />
              <Route path='education' element={<Education />} />
            </Route>
            <Route path='/portfolio/' element={<Portfolio />} >
              <Route index element={<Projects />} />
              <Route path='projects' element={<Projects />} />
              <Route path='coding' element={<Coding />} />
              <Route path='achievement' element={<Achievements />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
