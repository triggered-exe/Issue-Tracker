const express = require("express");
const router = express.Router();

const projectController = require("../controllers/project_controller");

router.post("/create-project", projectController.createProject);
router.get("/open-project/:projectId", projectController.openProject);
router.post("/create-issue/:projectId", projectController.createIssue);

module.exports = router;