import sendRequest from './send-request';

const BASE_URL = '/api/characters';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function create() {
  return sendRequest(`${BASE_URL}/studying`, 'POST');
}
