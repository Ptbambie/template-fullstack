const { Router } = require("express");
const { UserController } = require("../controllers");

//  instance du routeur d'Express pour les routes liées aux utilisateurs.
const userRouter = Router();

// route GET pour obtenir tous les utilisateurs. 
//Lorsque cette route est appelée, elle crée une instance du contrôleur UserController en passant 
//les objets de requête (req) et de réponse (res). 
//Ensuite, la méthode getAll() du contrôleur est appelée pour récupérer tous les utilisateurs.
userRouter.get('',(req, res) => new UserController (req,res).getAll());

// route GET pour obtenir un utilisateur spécifique en utilisant son identifiant. 
// Lorsque cette route est appelée avec un identifiant dans l'URL, elle crée une instance du contrôleur UserController
userRouter.get('/:id',(req, res) => new UserController (req,res).getById());//la méthode getById() du contrôleur est appelée avec l'identifiant pour récupérer l'utilisateur correspondant.

module.exports = userRouter;

