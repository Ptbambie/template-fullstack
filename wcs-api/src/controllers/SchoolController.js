const BaseController = require("./BaseController");
const {SchoolModel} = require("../models")

class SchoolController extends BaseController{

    SchoolModel;

    constructor(req, res){
        super(req, res);
        this.SchoolModel = new SchoolModel();
    }

    getAll() {
        this.SchoolModel.getAll()//nous envoie tous nos user ds une promesse
            .then (([results]) => this.sendJson(results))
    }
}

module.exports = SchoolController;