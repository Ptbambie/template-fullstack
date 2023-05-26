const { UserModel } = require("../models")

function getAllUsers (req, res) {
    const userModel = new UserModel();

    userModel.getAll()
        .then(function([results, useless]){
            return res.status(200).json(results)
        })
        .catch(
            function (error){
                console.log(error);
                 return res.sendStatus(500)
})
}

module.exports={
    getAllUsers
}
