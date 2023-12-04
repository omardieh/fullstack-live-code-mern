import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProjectEdit() {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const url = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${url}/api/projects/${projectID}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch((error) => console.error(error));
  }, [projectID, url]);

  const submitEditProject = (e) => {
    e.preventDefault();
    axios
      .put(`${url}/api/projects/${projectID}`, { title, description })
      .then(() => {
        navigate(-1);
      });
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
      <form onSubmit={submitEditProject}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
