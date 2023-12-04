const taskRouter = require("express").Router();
const Project = require("../../models/Project.model");
const Task = require("../../models/Task.model");
const { ObjectId } = require("mongoose").Types;

taskRouter.post("/tasks", async (req, res, next) => {
  const { title, description, projectID } = req.body;
  if (!title || !description || !projectID) {
    res.json({ error: "all fields required" });
    return;
  }

  if (!ObjectId.isValid(projectID)) {
    res.send("Object ID is not valid");
    return;
  }
  try {
    const createdTask = await Task.create({
      title,
      description,
      project: projectID,
    });
    const updatedProject = await Project.findByIdAndUpdate(
      projectID,
      { $push: { tasks: createdTask._id } },
      { new: true }
    ).populate("tasks");
    res.json(updatedProject);
  } catch (err) {
    next(err);
  }
});

module.exports = taskRouter;
