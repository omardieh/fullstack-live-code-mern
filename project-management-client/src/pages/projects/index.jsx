import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const url = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${url}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
    0;
  }, []);

  return (
    <div className="ProjectListPage">
      {projects.map((project) => {
        return (
          <div className="ProjectCard card" key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
