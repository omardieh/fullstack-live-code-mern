const projectRouter = require("express").Router();
const Project = require("../../models/Project.model");
const { ObjectId } = require("mongoose").Types;

// create a new project
projectRouter.post("/projects", async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.json({ error: "all fields are required" });
    return;
  }
  try {
    const createdProject = await Project.create({
      title,
      description,
      tasks: [],
    });
    res.json(createdProject);
  } catch (err) {
    next(err);
  }
});

// get all projects
projectRouter.get("/projects", async (req, res, next) => {
  try {
    const foundProjects = await Project.find();
    res.json(foundProjects);
  } catch (err) {
    next(err);
  }
});

// get a project by its ID
projectRouter.get("/projects/:projectID", async (req, res, next) => {
  const { projectID } = req.params;
  if (!ObjectId.isValid(projectID)) {
    res.send("Object ID is not valid");
  }
  try {
    const foundProject = await Project.findById(projectID).populate("tasks");
    res.json(foundProject);
  } catch (err) {
    next(err);
  }
});

// update a project by its ID
projectRouter.put("/projects/:projectID", async (req, res, next) => {
  const { projectID } = req.params;
  if (!ObjectId.isValid(projectID)) {
    res.send("Object ID is not valid");
  }
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      projectID,
      req.body,
      { new: true }
    );
    res.json(updatedProject);
  } catch (err) {
    next(err);
  }
});

// delete a project by its ID
projectRouter.delete("/projects/:projectID", async (req, res, next) => {
  const { projectID } = req.params;
  if (!ObjectId.isValid(projectID)) {
    res.send("Object ID is not valid");
  }
  try {
    await Project.findByIdAndDelete(projectID);
    res.json({ message: `project with ID ${projectID} has been removed` });
  } catch (err) {
    next(err);
  }
});

module.exports = projectRouter;
