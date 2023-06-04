class BaseController{

    req;
    res;
    model;
    //La classe BaseController a les propriétés req et res qui représentent 
    //les objets de requête et de réponse d'Express. Ces propriétés sont initialisées dans le constructeur de la classe.
    constructor(req, res){
        this.req = req;
        this.res = res;
    }

    //La méthode getAll() récupère tous les éléments en utilisant la méthode getAll() du modèle associé à ce contrôleur. 
    //Elle retourne une promesse qui est résolue avec les résultats obtenus. 
    //Ensuite, la méthode sendJson() est appelée pour envoyer les résultats au format JSON.
    getAll() {
        this.model.getAll()
            .then (([results]) => this.sendJson(results))
    }
    //La méthode getById() récupère un élément spécifique en utilisant la méthode getById() du modèle associé à ce contrôleur. 
    //Elle utilise le paramètre id provenant de la requête pour spécifier l'élément à récupérer. 
    //Les résultats sont ensuite envoyés au format JSON à l'aide de la méthode sendJson().
    getById(){
        this.model.getById(this.req.params.id)
        .then (([results]) => this.sendJson(results))
    }

    // La méthode sendJson() prend des données en entrée et envoie une réponse JSON avec un statut HTTP 200 (OK).
    sendJson(data){
        this.res.status(200).json(data)
    }
}

// La classe BaseController est exportée pour pouvoir être utilisée dans d'autres fichiers.
module.exports= BaseController;