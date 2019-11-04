import { Constructor } from "./t_mixer";

/**
 * In case mixins are to be provided to the child, Super accepts the parent as 
 * the argument, followed by with() method for mixins
 * 
 * @param extender_class
 * 
 * @remarks
 * Service: Mixer
 */
export const Parent = (extender_class?: any) => new MixinBuilder(extender_class);

/**
 * Copies mixin methods inside the Prent class and returns the product
 *
 * @remarks
 * Service: Mixer
 * */
class MixinBuilder {

    private extender_class: any;

    /**
     * Copies mixin methods inside the Prent class and returns the product
     * 
     * @param extender_class
     * 
     * @remarks
     * Class: Mixin Builder
     * Service: Mixer
     */
    constructor(extender_class?: any) {
        this.extender_class = extender_class || class empty { };
    }

    /**
     * Accepts abstract classes that will be mixinified
     * 
     * @param mixins
     *
     * @remarks
     * Class: Mixin Builder
     * Service: Mixer
     */
    with(...mixins: any[]) {

        console.log("mixins", mixins)

        return mixins.reduce((parent, mixin) => {
            const mixin_func = MixinBuilder.produce_ClassExpression(mixin);
            return mixin_func(parent)
        }, this.extender_class);
    }

    /**
     * Mixin classes need to be wrapped in class expression function to be applied
     * Mixins don't call super. So, do not have any value declared by the constructor.
     * All mixin values need to be set by the setters.
     * Skips if the method with the same name has been added before. Mixins
     * cannot overload children
     * 
     * @param mixin_class
     *
     * @remarks
     * Class: Mixin Builder
     * Service: Mixer
     */
    private static produce_ClassExpression(mixin_class: any) {

        const extended_class_def = (extender_class: any) => {
            const extended_class = class extends extender_class { }

            Object.getOwnPropertyNames(mixin_class.prototype).forEach((name: string) => {

                if (!extended_class.prototype.hasOwnProperty(name)) {
                    Object.defineProperty(
                        extended_class.prototype,
                        name,
                        Object.getOwnPropertyDescriptor(mixin_class.prototype, name) as PropertyDescriptor);
                }
            });

            return extended_class;
        }

        return extended_class_def;

    };
}


