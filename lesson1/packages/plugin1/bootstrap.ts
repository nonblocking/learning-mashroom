
import webapp from "./webapp";
import type {MashroomWebAppPluginBootstrapFunction} from '@mashroom/mashroom/type-definitions';

const bootstrap: MashroomWebAppPluginBootstrapFunction = async (pluginName, pluginConfig, contextHolder) => {
    const {loggerFactory} = contextHolder.getPluginContext();
    const logger = loggerFactory('my.category');
    const {name} = pluginConfig;
    logger.info('Starting web-app plugin');
    return webapp(name);
};

export default bootstrap;
