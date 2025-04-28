import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsView from './pages/login';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ProjectsView />} />
    </Routes>
  </Router>
  );
}

export default App;
