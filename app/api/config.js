export const BASE_URL = 'http://localhost:3001/api';

export const isResponseOk = (response) => {
  return !(response instanceof Error);
}; 

export const endpoints = {
  games: `${BASE_URL}/games`,
  auth: `${BASE_URL}/me`,
  me: `${BASE_URL}/users/me`
}; 

