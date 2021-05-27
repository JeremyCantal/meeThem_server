var sql = require('./../db/db');

var userModel = {};

userModel.getAllUsers = function(result){
    sql.query("SELECT * FROM users", function(err, res){
        if(err){
            return result(err, null);
        }
        else{
            return result(null, res);
        }
    });
}

userModel.saveUser = function(newUser, result){
    sql.query("INSERT INTO users SET ?", newUser, function(err, res){
        if(err){
            return result(err, null);
        }
        else{
            return result(null, res);
        }
    });
}

userModel.findUserById = function(userid, result){
    sql.query("SELECT * FROM users WHERE userid = " + userid, function(err, rows){
        if(err){
            throw err;
        }
        if(rows.length <= 0){
            return result(err, null);
        }
        else{
            return result(null, rows);
        }
    });
}

userModel.deleteUserById = function(userid, result){
    sql.query("DELETE FROM users WHERE userid = " + userid, function(err, res){
        if(err)
            throw err;
        if(res.affectedRows == 0){
            return result(err, null);
        }
        return result(null, res);
    });
}

userModel.updateUserById = function(userid, data, result){
    sql.query("UPDATE users SET ? WHERE userid = " + userid, data, function(err, res){
        if(err)
            throw err;
        if(res.affectedRows == 0){
            return result(err, null);
        }
        return result(null, res);
    });
}

module.exports = userModel;









