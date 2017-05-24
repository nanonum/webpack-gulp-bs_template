var _ = require('lodash');

// import 'slick-carousel';
// import $ from 'jquery';
// import _ from 'lodash';

class Es6Class {
  constructor(name) {
    this.name = name;
  }

  // method
  meow(){
    console.log(this.name)
  }
}

$(function(){
  console.log('2:5');
  var k = new Es6Class('test');
  k.meow();
  var model = require('./model');
})
