'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var $ = require("jquery");
var user = new model_1.default.Person('Mike');
$(function () {
    $('#name').html(user.getName());
});
