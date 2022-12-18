
import webapp from "./webapp";
import type {MashroomWebAppPluginBootstrapFunction} from '@mashroom/mashroom/type-definitions';

const bootstrap: MashroomWebAppPluginBootstrapFunction = async (pluginName, pluginConfig, contextHolder) => {
    const {loggerFactory} = contextHolder.getPluginContext();
    const {name = 'World'} = pluginConfig;
    return webapp(name);
};

export default bootstrap;
