"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
// Core Components
var sidebar_component_1 = require("./sidebar/sidebar.component");
var header_component_1 = require("./header/header.component");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule
        ],
        declarations: [
            sidebar_component_1.SidebarComponent,
            header_component_1.HeaderComponent
        ],
        exports: [
            sidebar_component_1.SidebarComponent,
            header_component_1.HeaderComponent
        ]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.modules.js.map