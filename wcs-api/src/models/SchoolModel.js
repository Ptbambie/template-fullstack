const BaseModel = require("./BaseModel");

class SchoolModel extends BaseModel{
   
    constructor(){
        super('school') //permet de passer le parent
    }
    
}

module.exports = SchoolModel;