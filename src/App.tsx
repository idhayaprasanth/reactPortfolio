import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsView from "./pages/landingPage";
import Skills from "./pages/skills";
import Project from "./pages/Projects";

function Routing() {
  return (
    <Router basename="/reactPortfolio">
      <Routes>
        <Route path="/" element={<ProjectsView />} />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default Routing;
