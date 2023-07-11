import type {MashroomServerConfig} from '@mashroom/mashroom-json-schemas/type-definitions';

const serverConfig: MashroomServerConfig = {
    name: 'Mashroom Server Lesson 6',
    port: 8080,
    indexPage: '/portal',
    pluginPackageFolders: [
        {
            path: './node_modules/@mashroom'
        },
        {
            path: './plugins',
            devMode: true
        }
    ],
    ignorePlugins: [],
    plugins: {
        'Mashroom Session Middleware': {
            provider: 'memory',
            session: {
                cookie: {
                    maxAge: 3600000
                }
            }
        },
        'Mashroom Security Services': {
            provider: 'Mashroom Security Simple Provider',
            acl: './acl.ts'
        },
        'Mashroom Security Simple Provider': {
            users: './users.ts',
            loginPage: '/login',
            authenticationTimeoutSec: 1200
        },
        'Mashroom Storage Services': {
            provider: 'Mashroom Storage Filestore Provider'
        },
        'Mashroom Storage Filestore Provider': {
            dataFolder: './data/storage',
            prettyPrintJson: true
        },
        'Mashroom Http Proxy Services': {
            poolMaxSocketsPerHost: 4,
            socketTimeoutMs: 30000,
            wsMaxConnectionsPerHost: 10
        },
        'Mashroom Portal WebApp': {
            warnBeforeAuthenticationExpiresSec: 60,
            versionHashSalt: 'abcdefghijk',
        },
        'Mashroom Portal Default Theme': {
            showEnvAndVersions: true,
            spaMode: true
        },

        // NEW

        'Mashroom Portal Remote App Background Job': {
            unregisterAppsAfterScanErrors: 3
        },
        'Mashroom Portal Remote App Registry': {
            remotePortalAppUrls: './remoteMicrofrontends.ts'
        }
    }
};

export default serverConfig;
