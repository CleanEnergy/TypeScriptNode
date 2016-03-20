/// <reference path="../../typings/main.d.ts" />

import express = require("express");
import home = require("../controllers/home");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var a = new home.Application.HomeController();
    
    res.render('index', { title: 'Index', data: a.echo(req) });
});

router.post('/', function(req, res, next){
    
    res.render('index', { title: 'Index' });
    
});

module.exports = router;