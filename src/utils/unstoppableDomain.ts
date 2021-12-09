import UAuth from '@uauth/js';
const isDevelopementServer = (process || { env: { NODE_ENV: 'production' } })?.env.NODE_ENV === 'development';

const developmentCredentials = {
  clientID: 'qxRaA/ILJHo5WGXbo6NiWOI+FBModAIKVToTBGONEtI=',
  clientSecret: 'MSk1Lx/iddaggFHSNoBNCfRn4vwblWkvmVivxFYpyww=',
  scope: 'openid email wallet',
  redirectUri: 'http://localhost:3000/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
};
const productionCredentials = {
  clientID: 'R4LSjs5j2Ko+wH0NDDjuHEJoywGrc2DCvdRq99mLVko=',
  clientSecret: '3LSpiJdezdBGzcYyrzt/y9ri1eZ2BrPSz9UP7bCAJY0=',
  scope: 'openid email wallet',
  redirectUri: 'https://friends-show.netlify.app/callback',
  postLogoutRedirectUri: 'https://friends-show.netlify.app/',
};

export const uauth = new UAuth(isDevelopementServer ? developmentCredentials : productionCredentials);
