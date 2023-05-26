const BaseModel = require("./BaseModel");

class UserModel extends BaseModel{
   
    constructor(){
        super('player') //permet de passer le parent
    }
    
}

module.exports = UserModel;