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
exports.Parent = function (extender_class) { return new MixinBuilder(extender_class); };
var MixinBuilder = (function () {
    function MixinBuilder(extender_class) {
        this.extender_class = extender_class || (function () {
            function empty() {
            }
            return empty;
        }());
    }
    MixinBuilder.prototype.with = function () {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        console.log("mixins", mixins);
        return mixins.reduce(function (parent, mixin) {
            var mixin_func = MixinBuilder.produce_ClassExpression(mixin);
            return mixin_func(parent);
        }, this.extender_class);
    };
    MixinBuilder.produce_ClassExpression = function (mixin_class) {
        var extended_class_def = function (extender_class) {
            var extended_class = (function (_super) {
                __extends(extended_class, _super);
                function extended_class() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return extended_class;
            }(extender_class));
            Object.getOwnPropertyNames(mixin_class.prototype).forEach(function (name) {
                if (!extended_class.prototype.hasOwnProperty(name)) {
                    Object.defineProperty(extended_class.prototype, name, Object.getOwnPropertyDescriptor(mixin_class.prototype, name));
                }
            });
            return extended_class;
        };
        return extended_class_def;
    };
    ;
    return MixinBuilder;
}());
//# sourceMappingURL=mixer.js.map