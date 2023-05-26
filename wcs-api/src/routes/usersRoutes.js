const { Router } = require("express");
const { getAllUsers } = require("../controllers");

const userRouter = Router();

userRouter.get('', getAllUsers);

module.exports = userRouter;
