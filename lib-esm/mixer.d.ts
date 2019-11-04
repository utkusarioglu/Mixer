export declare const Parent: (extender_class?: any) => MixinBuilder;
declare class MixinBuilder {
    private extender_class;
    constructor(extender_class?: any);
    with(...mixins: any[]): any;
    private static produce_ClassExpression;
}
export {};
