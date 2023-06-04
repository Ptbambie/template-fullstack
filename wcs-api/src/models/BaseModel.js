//importe un objet db à partir d'un fichier de configuration. 
//Cet objet représente une connexion à la base de données utilisée par l'application.
const { db } = require("../config");

//parents
//La classe a les propriétés table et db. 
//La propriété table représente la table de la base de données associée à ce modèle. 
//La propriété db représente la connexion à la base de données.
class BaseModel{
    table; // déclarations des valeurs NORME et + LISIBLE
    db;

//Le constructeur de la classe prend en paramètre le nom de la table et initialise les propriétés table et db.
    constructor(table){
        this.table = table;
        this.db = db;
    }

    // La méthode getAll() exécute une requête SQL pour récupérer tous les enregistrements 
    // de la table associée à ce modèle en utilisant la connexion à la base de données. 
    getAll(){
        return this.db
        // La requête SELECT utilise la variable this.table pour spécifier la table à interroger
        //  La méthode retourne la promesse renvoyée par la méthode query().
        .query(`SELECT * FROM ${this.table}`)
    }
    // La méthode getById(id) exécute une requête SQL pour récupérer un enregistrement 
    // spécifique de la table associée à ce modèle en utilisant la connexion à la base de données.
    getById(id){
        return this.db
        //La requête SELECT utilise la variable this.table pour spécifier la table à interroger 
        // et utilise le paramètre id pour spécifier l'identifiant de l'enregistrement à récupérer.
        .query( `SELECT * FROM ${this.table} WHERE id = ?`, [id])
    }
}
// La classe BaseModel est exportée pour pouvoir être utilisée dans d'autres fichiers.
module.exports = BaseModel;