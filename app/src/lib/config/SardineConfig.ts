
export type  SardineEnvironment = 'production' | 'sandbox';

export const SardineConfig = {
    'sandbox': { host: 'api.sandbox.sardine.ai', },
    'production': { host: 'api.sardine.ai', },
}