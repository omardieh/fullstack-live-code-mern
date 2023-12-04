const projectRouter = require("./project.api");
const taskRouter = require("./task.api");

const apiRouter = require("express").Router();

apiRouter.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = (app) => {
  app.use("/api", apiRouter);
  app.use("/api", projectRouter);
  app.use("/api", taskRouter);
};
