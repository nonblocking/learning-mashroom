import type {MashroomServerConfig} from '@mashroom/mashroom-json-schemas/type-definitions';

const {
    REDIS_HOST,
    REDIS_PORT,
    REDIS_PASSWORD,
    LDAP_SERVER_URL = '',
    LDAP_BIND_DN = '',
    LDAP_BIND_PASSWORD = ''
} = process.env;

const serverConfig: MashroomServerConfig = {
    name: 'Mashroom Server Lesson 5',
    port: 8080,
    indexPage: '/portal',
    pluginPackageFolders: [
        {
            path: './node_modules/@mashroom'
        },
        {
            path: 'packages',
            // 'devMode': true
        }
    ],
    'plugins': {
        'My Web-App': {
            name: 'Everyone'
        },
        'Mashroom Security Services': {
            provider: 'Mashroom LDAP Security Provider', // NEW for production
            acl: './acl.json'
        },
        'Mashroom Security Default Login Webapp': {
            path: '/login'
        },
        'Mashroom Session Middleware': {
            provider: 'Mashroom Session Redis Provider', // NEW for production
            session: {
                cookie: {
                    maxAge: 1800000
                }
            }
        },
        'Mashroom Storage Services': {
            provider: 'Mashroom Storage Filestore Provider'
        },
        'Mashroom Storage Filestore Provider': {
            dataFolder: './data/storage',
            checkExternalChangePeriodMs: 1800000 // NEW for production
        },
        'Mashroom Portal WebApp': {
            adminApp: null, // NEW
            defaultTheme: 'Mashroom Portal Default Theme'
        },
        'Mashroom Portal Default Theme': {
            showEnvAndVersions: false // NEW for production
        },

        // NEW for production

        'Mashroom LDAP Security Provider': {
            serverUrl: LDAP_SERVER_URL,
            bindDN: LDAP_BIND_DN,
            bindCredentials: LDAP_BIND_PASSWORD,
            baseDN: 'ou=people,dc=planetexpress,dc=com',
            userSearchFilter: '(&(objectClass=person)(uid=@username@))',
            groupSearchFilter: '(objectClass=Group)',
            groupToRoleMapping: './groupToRoleMapping.ts'
        },
        'Mashroom Session Redis Provider': {
            client: {
                redisOptions: {
                    host: REDIS_HOST,
                    port: REDIS_PORT,
                    password: REDIS_PASSWORD,
                }
            },
            prefix: 'mashroom:sess:'
        },
        'Mashroom VHost Path Mapper Middleware': {
            hosts: {
                'localhost:6060': {
                    frontendBasePath: '/',
                    mapping: {
                        '/login': '/login',
                        '/': '/portal/web'
                    }
                }
            }
        }
    }
}

export default serverConfig;
