import App from './App.svelte';
import type {MashroomPortalAppPluginBootstrapFunction} from '@mashroom/mashroom-portal/type-definitions';

const bootstrap: MashroomPortalAppPluginBootstrapFunction = (portalAppHostElement, portalAppSetup, clientServices) => {
    const {appConfig: { name } = {}, user: {displayName} = {}, proxyPaths: { api } = {} as any} = portalAppSetup;

    portalAppHostElement.innerHTML = '';

    const app = new App({
        target: portalAppHostElement,
        props: {
            name: name ?? displayName,
            apiPath: api,
        }
    });

    return {
        willBeRemoved() {
            app.$destroy();
        }
    };
};

(window as any).startMicrofrontendLesson6 = bootstrap;
