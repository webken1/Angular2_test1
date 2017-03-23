"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var Home_1 = require("./component/page/Home");
var about_1 = require("./component/page/about");
var appRoutes = [
    {
        path: '',
        component: Home_1.Home
    },
    {
        path: 'about',
        component: about_1.About
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map