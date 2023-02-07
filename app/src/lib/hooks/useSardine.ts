import { SardineEnvironment, SardineConfig } from '@lib/config';
import { useCallback } from 'react';
import { uuid } from 'uuidv4';

export const useSardine = ( sardineEnvironment: SardineEnvironment, enableSardine?: boolean)=>{
    
    const setup = useCallback(() => {
        if (!enableSardine)  {return };
        const loader = document.createElement('script');
        const config = SardineConfig[sardineEnvironment];
        const sardineConfig = {
          host: config.host,
          clientId: '30e33d73-f443-4178-9ac5-e7f100f4c6cb',
          environment: sardineEnvironment,
          isSardineEnabled: enableSardine ?? false,
        };
        if (sardineConfig.isSardineEnabled) {
          const sardineHost = sardineConfig.host;
    
          // const localSardineCtxt = null;
          loader.type = 'text/javascript';
          loader.async = true;
          loader.src = `https://${ sardineHost }/assets/loader.min.js`;
          loader.onload = function createSardineContext() {
            /* eslint no-underscore-dangle: ["error", { "allow": ["_Sardine"] }] */
            // const user: any = meData?.me?.user;
            // localSardineCtxt =
            window._Sardine.createContext({
              clientId: sardineConfig.clientId,
              sessionKey: uuid(),
              userIdHash: 'b62813c9-88b1-496c-9b3b-59f457e71a36',
              flow: window.location.pathname,
              parentElement: document.body,
              environment: sardineConfig.environment,
              onDeviceResponse(data: any) {
                console.log(`sardine's deviceID is ${ data.deviceId }`);
              },
            });
            // setSardineContext(localSardineCtxt);
          };
        }
        document.body.appendChild(loader);
    
        return () => {
          document.body.removeChild(loader);
        };
      }, [sardineEnvironment, enableSardine]);

    return setup;
}