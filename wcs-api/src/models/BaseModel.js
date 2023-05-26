const { db } = require("../config");

class BaseModel{
    table; // déclarations des valeurs NORME et + LISIBLE
    db;

    constructor(table){
        this.table = table;
        this.db = db;
    }

    getAll(){
        return this.db
        .query(`SELECT * FROM ${this.table}`)
    }
    getByID(id){
        return this.db
        .query( `SELECT * FROM ${this.table} WHERE id = ?`, [id])
    }
}

module.exports = BaseModel;