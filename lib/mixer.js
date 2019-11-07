"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parent = (extender_class) => new MixinBuilder(extender_class);
class MixinBuilder {
    constructor(extender_class) {
        this.extender_class = extender_class || class empty {
        };
    }
    with(...mixins) {
        return mixins.reduce((parent, mixin) => {
            const mixin_func = MixinBuilder.produce_ClassExpression(mixin);
            return mixin_func(parent);
        }, this.extender_class);
    }
    static produce_ClassExpression(mixin_class) {
        console.log("loading mixin:\n", mixin_class.constructor.name);
        const extended_class_def = (extender_class) => {
            const extended_class = class extends extender_class {
            };
            Object.getOwnPropertyNames(mixin_class.prototype).forEach((name) => {
                if (!extended_class.prototype.hasOwnProperty(name)) {
                    Object.defineProperty(extended_class.prototype, name, Object.getOwnPropertyDescriptor(mixin_class.prototype, name));
                }
            });
            return extended_class;
        };
        return extended_class_def;
    }
    ;
}
//# sourceMappingURL=mixer.js.map