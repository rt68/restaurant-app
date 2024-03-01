//utilities/admin-api.js

import sendRequest from "./send-request";

const BASE_URL = "/api/admin";

export function getAll() {
  return sendRequest(`${BASE_URL}/getusers`);
}
