const Project = require("../models/project");
const Issue = require("../models/issue");
module.exports.createProject = async (req, res) => {
    try {
    const project = await Project.create({
      name: req.body.projectName,
      description: req.body.projectDescription,
      author: req.body.projectAuthor,
      issues: [],
    });
    console.log("project created");
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }

}

module.exports.openProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId);
        const issues = await Issue.find({_id: {$in: project.issues}});
        return res.render("project", {
            project: project,
            issues: issues
        });
    } catch (err) {
        console.log(err);
        return res.redirect("back");
    }
    
}

module.exports.createIssue = async (req, res) => {
    console.log(req.body.issueLabels)
     Issue.create({
        title: req.body.issueTitle,
        description: req.body.issueDescription,
        author: req.body.issueAuthor,
        labels: req.body.issueLabels
     })
     .then(async (issue) => {
        await Project.findByIdAndUpdate(req.params.projectId)
        .then((project) => {
            console.log(project);
            project.issues.push(issue.id);
            project.save();
            console.log(project);
            return res.redirect("back");
        })
     })
     .catch((err) => {
        console.log(err);
        return res.redirect("back");
     })

}