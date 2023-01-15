
import type {MashroomPortalThemePluginBootstrapFunction} from '@mashroom/mashroom-portal/type-definitions';

const bootstrap: MashroomPortalThemePluginBootstrapFunction = async (pluginName, pluginConfig, contextHolder) => {
    return {
        engineName: 'pug',
        engineFactory: () => require('pug').__express,
    };
};

export default bootstrap;
