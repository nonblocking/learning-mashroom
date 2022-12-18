
import express from 'express';
import type {MashroomWebAppPluginBootstrapFunction} from '@mashroom/mashroom/type-definitions';

const bootstrap: MashroomWebAppPluginBootstrapFunction = async (pluginName, pluginConfig, contextHolder) => {
    const {name = 'World'} = pluginConfig;

    const webapp = express();

    webapp.get('/', (req, res) => {
       res.type('text/html');
       res.end(`
        <html>
            <body>
                <h1>Hello ${name}</h1>
            </body>
        </html>
       `);
    });

    return webapp;
};

export default bootstrap;
