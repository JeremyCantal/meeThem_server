var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user.controller');

// router.get('/add', function(req, res) {
//     res.send('Ajout user');
// });

// router.get('/edit', function(req, res) {
//     res.send('Editer user');
// });

// router.get('/search', function(req, res) {
//     res.send('Rechercher user');
// });

//http://localhost:8080/user/show
router.get('/show', userController.show);

// http://localhost:8080/user/1
router.get('/:userid', userController.findById);

// http://localhost:8080/user/save
router.post('/save', userController.save);

// http://localhost:8080/user/1
router.delete('/:userid', userController.deleteById);

// http://localhost:8080/user/1
router.put('/:userid', userController.update);


module.exports = router;



























