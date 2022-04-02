import { get } from 'lodash';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

// Constants
import { WHITELISTED } from '../constants/discord';

// Services
import {
  requestMemberInfo,
  requestTokenGrant,
  requestCode,
} from '../services/discord';

export const useVerification = () => {
  const [whitelisted, setWhitelisted] = React.useState(false);
  const [whitelisting, setWhiteListing] = React.useState(false);
  const { query } = useRouter();
  const init = async () => {
    try {
      setWhiteListing(true);
      setWhitelisted(false);

      const sessionAccessToken = sessionStorage.getItem('discord_access_token');

      if (sessionAccessToken) {
        const { data } = await requestMemberInfo(sessionAccessToken);

        const validRoles = data.roles.filter((role: string) =>
          WHITELISTED.includes(role)
        );

        if (validRoles.length > 0) setWhitelisted(true);

        return;
      }

      if (query.code) {
        const { data } = await requestTokenGrant(String(query.code));

        const { access_token } = data;

        sessionStorage.setItem('discord_access_token', access_token);
        setWhitelisted(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setWhiteListing(false);
    }
  };

  const connectDiscord = async () => {
    try {
      const data = await requestCode();

      const { url } = data.data;

      window.open(url, '_top');
    } catch (error) {}
  };

  const disconnect = async () => {
    setWhitelisted(false);
  };

  React.useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { whitelisted, connectDiscord, disconnect, whitelisting };
};
