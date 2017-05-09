// var $ = require('jquery');
var _ = require('lodash');
import "../sass/style.scss"

import 'slick-carousel';

// import $ from 'jquery';
// import _ from 'lodash';
import moment from 'moment';
// var moment = require('moment');

class Es6Class {
  constructor(name) {
    this.name = name;
    console.log(this.name);
  }

  // method
  meow(){
    console.log(this.name, 'にゃーん?!')
  }
}

$(function(){
  console.log('2:5');
  var k = new Es6Class('classname33');
  k.meow();
  console.log($('#test'));


  var model = require('./model');
  model.test('a33333');

  // console.log($('#slide').slick())


  var ary = ['aaa', 'bebebe', 'cccc', window];

  _.each(ary, function(el, index){
    console.log(el, index)
  })

  console.log(moment());
  // console.log(vates)
  // console.log(Model);
  // var m = new Model();
  // console.log(m);

  $('#test1').html(moment().format() + '!!!');
  $('#test2').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

})
