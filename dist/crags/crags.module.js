"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CragsModule = void 0;
const common_1 = require("@nestjs/common");
const crags_service_1 = require("./crags.service");
const crags_controller_1 = require("./crags.controller");
let CragsModule = class CragsModule {
};
CragsModule = __decorate([
    (0, common_1.Module)({
        controllers: [crags_controller_1.CragsController],
        providers: [crags_service_1.CragsService]
    })
], CragsModule);
exports.CragsModule = CragsModule;
//# sourceMappingURL=crags.module.js.map