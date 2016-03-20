/// <reference path="../../typings/main.d.ts" />

import {AccountController} from "../controllers/account";

import express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index', { title: 'Index', data: 1 });
});

router.post('/', function(req, res, next){

    var controller = new AccountController();

    var result = controller.postLogin(req.body.Username, req.body.Password);

    res.render('index', { validations: result.GetValidations() });
    
    
});

module.exports = router;