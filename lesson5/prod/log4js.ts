import util from "util";
import {addLayout, type Configuration} from 'log4js';

const {
    LOG_DEFAULT_LEVEL = 'info',
} = process.env;

// NEW for production: Add JSON layout
addLayout('json', () => {
   return (event) => {
       return JSON.stringify({
           time: event.startTime,
           level: event.level.levelStr.toLowerCase(),
           category: event.categoryName,
           message: util.format(...event.data),
           username: event.context.username,
           appName: event.context.portalAppName,
           appVersion: event.context.portalAppVersion,
           clientIP: event.context.clientIP,
           browser: event.context.browser,
           browserVersion: event.context.browserVersion,
           os: event.context.os,
       });
    }
});

const config: Configuration = {
    appenders: {
        console: {
            type: 'console', layout: { type: 'json' },
        },
        file: {
            type: "file",
            filename: '/var/log/mashroom/mashroom.log',
            maxLogSize: 10485760,
            backups: 3,
            layout: {
                type: "json",
            },
        },
    },
    categories: {
        default: {
            appenders: [
                'console',
                'file'
            ],
            level: LOG_DEFAULT_LEVEL
        }
    }
}

export default config;
