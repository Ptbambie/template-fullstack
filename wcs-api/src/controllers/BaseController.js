class BaseController{

    req;
    res;
    model;

    constructor(req, res){
        this.req = req;
        this.res = res;
    }

    getAll() {
        this.model.getAll()//nous envoie tous nos user ds une promesse
            .then (([results]) => this.sendJson(results))
    }

    getById(){
        this.model.getById(this.req.params.id)//nous envoie tous nos user ds une promesse
        .then (([results]) => this.sendJson(results))
    }
    sendJson(data){
        this.res.status(200).json(data)
    }
}

module.exports= BaseController;