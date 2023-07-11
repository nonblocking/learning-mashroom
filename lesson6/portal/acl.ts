import type {MashroomSecurityAcl} from '@mashroom/mashroom-json-schemas/type-definitions';

const acl: MashroomSecurityAcl = {
    '/portal/**': {
        '*': {
            allow: {
                roles: ['Authenticated']
            }
        }
    }
};

export default acl;
