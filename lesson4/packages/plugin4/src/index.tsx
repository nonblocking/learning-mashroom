import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import type {MashroomPortalAppPluginBootstrapFunction} from '@mashroom/mashroom-portal/type-definitions';

const bootstrap: MashroomPortalAppPluginBootstrapFunction = (portalAppHostElement, portalAppSetup, clientServices) => {
    const { resourcesBasePath, lang, user, appConfig, proxyPaths } = portalAppSetup ?? {};
    const { messageBus } = clientServices ?? {};

    messageBus?.subscribe('somethingHappened', () => {
       alert('Something happened!');
    });

    const root = ReactDOM.createRoot(portalAppHostElement);
    root.render(
        <React.StrictMode>
            <App
                greeting={appConfig?.greeting}
                username={user?.username}
                hideLearnReact={user?.permissions?.hideLearnReact}
                spaceFlightNewsAPIProxyURL={proxyPaths?.spaceFlightNewsAPI}
            />
        </React.StrictMode>
    );

    return {
        willBeRemoved() {
            root.unmount();
        }
    }
}

(global as any).startMyFirstApp = bootstrap;

// Never do global stuff like this in a Microfrontend
// reportWebVitals();
