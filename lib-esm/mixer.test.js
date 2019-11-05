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
import { Parent } from "./mixer";
import { M_Namespace } from "@utkusarioglu/m_namespace";
import { M_State } from "@utkusarioglu/m_state";
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
    }(Parent().with(M_Namespace)));
    var cls_instance = new cls_sample();
    var namespace_return = cls_instance.get_GlobalNamespace();
    expect(namespace_return).toBe(namespace_input);
});
test("set_GlobalNamespace", function () {
    var namespace_input = "App/Random";
    var some_value = "some value";
    var cls_sample = (function (_super) {
        __extends(cls_sample, _super);
        function cls_sample() {
            var _this = _super.call(this) || this;
            _this.set_GlobalNamespace(namespace_input);
            _this.initialize_State({
                SomeProp: some_value
            });
            return _this;
        }
        cls_sample.prototype.get_SomeProp = function () {
            return this.get_State().get_Var("SomeProp");
        };
        return cls_sample;
    }(Parent().with(M_Namespace, M_State)));
    var cls_instance = new cls_sample();
    var prop_return = cls_instance.get_SomeProp();
    expect(prop_return).toStrictEqual(some_value);
});
//# sourceMappingURL=mixer.test.js.map