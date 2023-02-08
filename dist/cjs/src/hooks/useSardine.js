'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var uuidv4 = require('uuidv4');
require('../config/RuntimeConfiguration.js');
var SardineConfig = require('../config/SardineConfig.js');
require('../config/paymentConfiguration.js');

const useSardine = (sardineEnvironment, enableSardine) => {
    const element = React.useRef();
    React.useEffect(() => {
        return () => {
            if (element.current)
                document.body.removeChild(element.current);
        };
    }, [element]);
    const setup = React.useCallback(() => {
        if (!enableSardine) {
            return;
        }
        const loader = document.createElement('script');
        const config = SardineConfig.SardineConfig[sardineEnvironment];
        // const localSardineCtxt = null;
        loader.type = 'text/javascript';
        loader.async = true;
        loader.src = `https://${config.host}/assets/loader.min.js`;
        loader.onload = function createSardineContext() {
            /* eslint no-underscore-dangle: ["error", { "allow": ["_Sardine"] }] */
            // const user: any = meData?.me?.user;
            // localSardineCtxt =
            window._Sardine.createContext({
                clientId: '30e33d73-f443-4178-9ac5-e7f100f4c6cb',
                sessionKey: uuidv4.uuid(),
                userIdHash: 'b62813c9-88b1-496c-9b3b-59f457e71a36',
                flow: window.location.pathname,
                parentElement: document.body,
                environment: sardineEnvironment,
                onDeviceResponse(data) {
                    console.log(`sardine's deviceID is ${data.deviceId}`);
                },
            });
            // setSardineContext(localSardineCtxt);
        };
        document.body.appendChild(loader);
        element.current = loader;
    }, [sardineEnvironment, enableSardine]);
    return setup;
};

exports.useSardine = useSardine;
//# sourceMappingURL=useSardine.js.map
