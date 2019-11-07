import { Parent } from "./mixer";
import { M_Namespace } from "@utkusarioglu/namespace";
import { M_State } from "@utkusarioglu/state";
import { M_Controller } from "@utkusarioglu/controller";
import { M_Library } from "@utkusarioglu/library";


test("set_GlobalNamespace", () => {

    const namespace_input = "App/Random";

    const cls_sample = class extends Parent().with(
        M_Namespace,
    ) {
        constructor() {
            super();
            this.set_GlobalNamespace(namespace_input);
        }
    }

    const cls_instance = new cls_sample();
    const namespace_return = cls_instance.get_GlobalNamespace();

    expect(namespace_return).toBe(namespace_input)
})


test("set_GlobalNamespace", () => {

    const namespace_input = "App/Random";
    const some_value = "some value";

    const cls_sample = class extends Parent().with(
        M_Namespace,
        M_State
    ) {
        constructor() {
            super();
            this.set_GlobalNamespace(namespace_input);
            this.initialize_State({
                SomeProp: some_value
            })
        }

        get_SomeProp() {
            return this.get_State().get_Var("SomeProp");
        }
    }

    const cls_instance = new cls_sample();
    const prop_return = cls_instance.get_SomeProp();

    expect(prop_return).toStrictEqual(some_value);
})


test("dummy parent", () => {

    const parent_class = class Parent {
        constructor() {
            console.log("this is coming from parent constructor")
        }
        parent_Method(): string {
            return "-";
        }
    }

    const child_class = class extends Parent(parent_class).with(
        M_Namespace,
        M_Library,
        M_Controller,
        M_State
    ) {
        constructor() {
            super();
            this.set_GlobalNamespace("childns");
        }
        child_Method() {
            return this.parent_Method();
        }
    }

    const child_instance = new child_class();
    const child_method_return = child_instance.child_Method();
    const child_ns = child_instance.get_GlobalNamespace();

    expect(child_method_return).toStrictEqual("-");

    expect(child_ns).toStrictEqual("childns");

});