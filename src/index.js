import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider

    domain="kcw3-hedera.us.auth0.com"

    clientId="6wmqkpyj3Ri61Jx4OpMPqPCr3lq44S1E"

    authorizationParams={{

      redirectUri: window.location.origin,

      // onRedirectCallback: onRedirectCallback,

      audience: "auth0 web demo backend api",

      useRefreshTokens: true,

      useRefreshTokensFallback: true,

      scope: "openid email profile",

      cacheLocation: "localstorage"

    }}

  >

    <App />

  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
