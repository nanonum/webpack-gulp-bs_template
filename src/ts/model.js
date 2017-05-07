'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
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
            // if (Config.ENV != 'production') {
            //     return this.name
            // } else {
            //     return this.name + 'さん';
            // }
        };
        return Person;
    }());
    Model.Person = Person;
})(Model || (Model = {}));
exports.default = Model;
