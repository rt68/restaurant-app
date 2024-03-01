//utilities/admin-api.js
// import sendRequest from './send-request';

// const BASE_URL = '/api/admin';

// export function signUp(userData) {
//   return sendRequest(BASE_URL, 'POST', userData);
// }

// export function login(credentials) {
//   return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
// }

//utilities/admin-api.js

import sendRequest from './send-request';

const BASE_URL = '/api/admin';

export function getAll() {
  return sendRequest(`${BASE_URL}/getusers`);
}