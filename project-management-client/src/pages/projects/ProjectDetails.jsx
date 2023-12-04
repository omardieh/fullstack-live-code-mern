import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { projectID } = useParams();
  const [project, setProject] = useState({});
  const url = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${url}/api/projects/${projectID}`)
      .then((response) => setProject(response.data))
      .catch((error) => console.error(error));
  }, [projectID, url]);

  if (!project.tasks) return <div>loading...</div>;

  return (
    <div className="ProjectDetails">
      <>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </>
      {project.tasks.map((task) => (
        <li className="TaskCard card" key={task._id}>
          <h3>{task.title}</h3>
          <h4>Description:</h4>
          <p>{task.description}</p>
        </li>
      ))}
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      <Link to={`/projects/edit/${projectID}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}
