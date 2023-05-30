const { Router } = require("express");
const { SchoolController } = require("../controllers");

const schoolRouter = Router();

schoolRouter.get('',(req, res) => new SchoolController (req,res).getAll());

module.exports = schoolRouter;

