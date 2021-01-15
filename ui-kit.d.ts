import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const UiKit: { install: InstallFunction };
export default UiKit;

export const UiKitSample: VueConstructor<Vue>;
