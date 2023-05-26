class BaseModel{
    table;

    constructor(table){
        this.table = table;
    }

    getAll(){
        return `SELECT * FROM ${this.table}`
    }
    getByID(id){
        return `SELECT * FROM ${this.table} WHERE id = ?`
    }
}