"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Jumbotron = (function () {
    function Jumbotron() {
        this.Heading = 'Hello, world!';
        this.JbcText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
        this.JbcBtn = 'Learn more';
        this.JbcUrl = '/about';
    }
    return Jumbotron;
}());
Jumbotron = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'jumbotron',
        templateUrl: 'jumbotron.html'
    }),
    __metadata("design:paramtypes", [])
], Jumbotron);
exports.Jumbotron = Jumbotron;
//# sourceMappingURL=jumbotron.js.map