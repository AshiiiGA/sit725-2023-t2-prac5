let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

app.post('/', function(req, res){
    controller.postCat(req, res);
});

app.get('/', (req, res)=>{
    controller.getAllCats(req, res)
});

module.exports = router;