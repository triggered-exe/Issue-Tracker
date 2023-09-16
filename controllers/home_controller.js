const Project = require("../models/project");
const Issue = require("../models/issue");


module.exports.home = async (req, res) => {
  Project.find({})
  .then((projects) => {
    return res.render("home", {
      projects: projects,
    });
  })
  .catch((err) => {
    console.log(err);
    return res.redirect("back");
  });

};
