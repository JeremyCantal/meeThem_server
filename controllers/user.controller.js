var userModel = require('./../models/user.model');

var userController = function(){
}


userController.show = function(req, res){
    userModel.getAllUsers(function(err, result){
        if(err){
            throw err;
        }
        res.json({
            status: 200,
            result,
            message: "Success getAllUsers"
        });
    });
}

userController.findById = function(req, res, next){

    let userid = req.params.userid;

    userModel.findUserById(userid, function(err, result){
        try{
            if(result == null){
                throw err;
            }
            res.send(result);
        }
        catch(err){
            next(err);
        }
    });
}

userController.save = function (req, res) {

    let data = {
        userid: req.params.userid,
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    };

    userModel.saveUser(data, function (err, result) {
        if (err)
            throw err;
        res.json({
            status: 200,
            result,
            message: "Success save"
        });

    });

}

userController.deleteById = function(req, res, next){
    let userid = req.params.userid;

    userModel.deleteUserById(userid, function(err, result){
        try{
            if(result == null){
                throw err;
            }
            res.send({
                result
            });
        }
        catch(err){
            next(err);
        }
    });
}

userController.update = function(req, res){
    let userid = req.params.userid;
    let data = {
        userid: req.params.userid,
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    };

    userModel.updateUserById(userid, data, function(err, result){
        try{
            if(result == null){
                throw err;
            }
            res.json({
                status: 200,
                result,
                message: "Success update"
            });
        }
        catch(err){
            next(err);
        }
    });
}

module.exports = userController;













