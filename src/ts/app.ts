'use strict'

import Model from './model';
import * as $ from 'jquery';

var user = new Model.Person('Mike');
$(() => {
  $('#name').html(user.getName());
  console.log('hello ts');

  $('#test1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed')

});
