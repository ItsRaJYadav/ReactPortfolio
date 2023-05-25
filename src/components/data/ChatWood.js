<<<<<<< HEAD
import React, { useEffect } from 'react';

const ChatWoot = () => {
  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: 'ogAhc58DrBfRvn727oyHL4zu',
        baseUrl: BASE_URL
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div></div>;
};

export default ChatWoot;
=======
import React, { useEffect } from 'react';

const ChatWoot = () => {
  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: 'ogAhc58DrBfRvn727oyHL4zu',
        baseUrl: BASE_URL
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div></div>;
};

export default ChatWoot;
>>>>>>> b1e58a1bd63782704622d926dfca50b2e54b038a
