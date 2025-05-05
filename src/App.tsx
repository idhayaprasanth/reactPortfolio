import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsView from './pages/landingPage';
import Skills from './pages/skills';
function  Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectsView />} />
        <Route path='skills/' element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default Routing;
