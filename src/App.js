import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicesPage';
import ProjectsPage from './Pages/ProjectsPage';
import Footer from './components/Footer';
import {React, useState} from 'react'
import nightLogo from './img/moon.png'
import dayLogo from './img/sun.png'
import './App.css';

function App() {
  const [logo, setLogo] = useState(nightLogo);
  const [body, setBody] = useState("night-theme");
  const [isDayTheme, setIsDayTheme] = useState(false);

  const themeClick = (e) => {
    e.preventDefault();
    setIsDayTheme(!isDayTheme);
    setLogo(logo === nightLogo ? dayLogo : nightLogo);
    setBody(logo === nightLogo ? "App day-theme" : "App night-theme");
  };

  return (
    <div className={body}>
      <Header logo={logo} themeClick={themeClick} dayLogo={dayLogo} />
      <main>
        <Routes>
          <Route path='/' element={<HomePage logo={logo} dayLogo={dayLogo} />}></Route>
          <Route path='/about' element={<AboutPage logo={logo} dayLogo={dayLogo}/>}></Route>
          <Route path='/services' element={<ServicePage logo={logo} dayLogo={dayLogo} />}></Route>
          <Route path='/projects' element={<ProjectsPage logo={logo} dayLogo={dayLogo} />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
