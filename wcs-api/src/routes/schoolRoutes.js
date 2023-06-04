const { Router } = require("express");
const { SchoolController } = require("../controllers");

const schoolRouter = Router();

schoolRouter.get('',(req, res) => new SchoolController (req,res).getAll());
schoolRouter.get('/:id',(req, res) => new SchoolController (req,res).getById());


module.exports = schoolRouter;

