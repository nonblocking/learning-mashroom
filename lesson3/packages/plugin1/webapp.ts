import express from "express";
import type {MashroomSecurityService} from '@mashroom/mashroom-security/type-definitions';

export default (name: string) => {
    const webapp = express();

    webapp.get('/', (req, res) => {
        const securityService: MashroomSecurityService | undefined = req.pluginContext.services.security?.service;
        const userName = securityService?.getUser(req)?.displayName ?? name;
        // securityService?.isInRole(req, 'role2')

        res.type('text/html');
        res.end(`
        <html>
            <body>
                <h1>Hello ${userName}</h1>
            </body>
        </html>
       `);
    });

    return webapp;
}
