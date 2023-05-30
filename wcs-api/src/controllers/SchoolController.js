const BaseController = require("./BaseController");
const {SchoolModel} = require("../models")

class SchoolController extends BaseController{

    constructor(req, res){
        super(req, res);
        this.model = new SchoolModel();
    }

}

module.exports = SchoolController;