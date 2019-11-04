import { Parent } from "./mixer";
import { M_Namespace } from "@utkusarioglu/m_namespace";
import { M_State } from "@utkusarioglu/m_state";


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
