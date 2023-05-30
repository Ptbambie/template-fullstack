const BaseController = require("./BaseController");
const {UserModel} = require("../models")

class UserController extends BaseController{

    userModel;

    constructor(req, res){
        super(req, res);
        this.userModel = new UserModel();
    }

    getAll() {
        this.userModel.getAll()//nous envoie tous nos user ds une promesse
            .then (([results]) => this.sendJson(results))
    }
}

module.exports = UserController;