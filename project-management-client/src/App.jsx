import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projects/ProjectDetails";
import ProjectEdit from "./pages/projects/ProjectEdit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectID" element={<ProjectDetails />} />
        <Route path="/projects/edit/:projectID" element={<ProjectEdit />} />
      </Routes>
    </div>
  );
}

export default App;
