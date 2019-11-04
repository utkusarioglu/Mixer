import { Parent } from "./mixer";
import { M_Namespace } from "@utkusarioglu/m_namespace";

test("set_GlobalNamespace", () => {

    const namespace_input = "App/Random";

    const cls_sample = class extends Parent().with() {
        constructor() {
            super();
            this.set_GlobalNamespace(namespace_input);
        }
    }

    const cls_instance = new cls_sample();
    const namespace_return = cls_instance.getGlobalNamespace();

    expect(namespace_return).toBe(namespace_input)
})
