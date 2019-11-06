"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mixer_1 = require("./mixer");
const m_namespace_1 = require("@utkusarioglu/m_namespace");
const state_1 = require("@utkusarioglu/state");
test("set_GlobalNamespace", () => {
    const namespace_input = "App/Random";
    const cls_sample = class extends mixer_1.Parent().with(m_namespace_1.M_Namespace) {
        constructor() {
            super();
            this.set_GlobalNamespace(namespace_input);
        }
    };
    const cls_instance = new cls_sample();
    const namespace_return = cls_instance.get_GlobalNamespace();
    expect(namespace_return).toBe(namespace_input);
});
test("set_GlobalNamespace", () => {
    const namespace_input = "App/Random";
    const some_value = "some value";
    const cls_sample = class extends mixer_1.Parent().with(m_namespace_1.M_Namespace, state_1.M_State) {
        constructor() {
            super();
            this.set_GlobalNamespace(namespace_input);
            this.initialize_State({
                SomeProp: some_value
            });
        }
        get_SomeProp() {
            return this.get_State().get_Var("SomeProp");
        }
    };
    const cls_instance = new cls_sample();
    const prop_return = cls_instance.get_SomeProp();
    expect(prop_return).toStrictEqual(some_value);
});
test("dummy parent", () => {
    const parent_class = class Parent {
        constructor() {
            console.log("this is coming from parent constructor");
        }
        parent_Method() {
            return "-";
        }
    };
    const child_class = class extends mixer_1.Parent(parent_class).with(m_namespace_1.M_Namespace) {
        constructor() {
            super();
            this.set_GlobalNamespace("childns");
        }
        child_Method() {
            return this.parent_Method();
        }
    };
    const child_instance = new child_class();
    const child_method_return = child_instance.child_Method();
    const child_ns = child_instance.get_GlobalNamespace();
    expect(child_method_return).toStrictEqual("-");
    expect(child_ns).toStrictEqual("childns");
});
//# sourceMappingURL=mixer.test.js.map