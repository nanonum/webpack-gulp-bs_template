webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(122);
var Model;
(function (Model) {
    var Person = (function () {
        function Person(name) {
            if (name === void 0) { name = 'dummy'; }
            this.name = name;
        }
        Person.prototype.getName = function () {
            console.log(config_1.default);
            return 'hoge';
        };
        return Person;
    }());
    Model.Person = Person;
})(Model || (Model = {}));
exports.default = Model;


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(119);
var $ = __webpack_require__(1);
var user = new model_1.default.Person('Mike');
$(function () {
    $('#name').html(user.getName());
    console.log('hello ts');
    $('#test1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed');
});


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/ws/dropbox/programming/js/webpack/src/ts/config.ts'");

/***/ })

},[121]);
//# sourceMappingURL=app.bundle.js.map