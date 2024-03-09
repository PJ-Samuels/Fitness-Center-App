const projectId = process.env['REACT_APP_PROJECT_ID'];
const appId = process.env['REACT_APP_APP_ID'];
const storageBucket = process.env['REACT_APP_STORAGE_BUCKET'];
const apiKey = process.env['REACT_APP_API_KEY'];
const authDomain = process.env['REACT_APP_AUTH_DOMAIN'];
const messagingSenderId = process.env['REACT_APP_MESSAGING_SENDER_ID'];
const measurementId = process.env['REACT_APP_MEASUREMENT_ID'];


export const environment = {
  firebase: {
    projectId: projectId,
    appId: appId,
    storageBucket: storageBucket,
    apiKey: apiKey,
    authDomain: authDomain,
    messagingSenderId: messagingSenderId,
    measurementId: measurementId,
  },
  production: false,
};
