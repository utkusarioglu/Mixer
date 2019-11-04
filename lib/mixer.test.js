"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mixer_1 = require("./mixer");
test("set_GlobalNamespace", function () {
    var namespace_input = "App/Random";
    var cls_sample = (function (_super) {
        __extends(cls_sample, _super);
        function cls_sample() {
            var _this = _super.call(this) || this;
            _this.set_GlobalNamespace(namespace_input);
            return _this;
        }
        return cls_sample;
    }(mixer_1.Parent().with()));
    var cls_instance = new cls_sample();
    var namespace_return = cls_instance.getGlobalNamespace();
    expect(namespace_return).toBe(namespace_input);
});
//# sourceMappingURL=mixer.test.js.map