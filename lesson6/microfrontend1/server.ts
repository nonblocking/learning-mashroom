import {hostname, platform, release, arch} from 'os';
import {resolve} from "path";
import express from 'express';

const PORT = 8888;
const app = express();

// Plugin metadata
app.use('/package.json', express.static(resolve(__dirname, 'package.json')));
app.use('/mashroom.json', express.static(resolve(__dirname, 'mashroom.json')));

// Assets
app.use(express.static(resolve(__dirname, 'public')));

// API (BFF)
app.get('/api/os', (req, res) => {
    // --- Security ---
    // If sendPermissionsHeader is true in the proxy config:
    const permissions = (req.headers['x-user-permissions'] as string ?? '').split(',');
    console.info('PERMISSIONS:', permissions);
    // If @mashroom/mashroom-http-proxy-add-user-headers is installed
    const user = req.headers['x-user-name'];
    console.info('USER:', user);
    // If @mashroom/mashroom-http-proxy-add-id-token is installed and the authentication
    // is done via @mashroom/mashroom-security-provider-openid-connect
    // const bearer = req.headers.authorization?.split(' ')[1];
    // if (bearer) {
    //     try {
    //         const jwt = jsonwebtoken.verify(bearer, cert);
    //         console.info('JWT:', jwt);
    //     } catch (e) {
    //         console.error('Invalid bearer', bearer);
    //     }
    //  }
    // ---

    res.json({
       hostname: hostname(),
       platform: platform(),
       release: release(),
       arch: arch(),
    });
});

app.listen(PORT, () => console.info(`Remote Microfrontend 1 available at: http://localhost:${PORT}`));
