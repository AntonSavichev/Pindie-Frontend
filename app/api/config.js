export const BASE_URL = 'https://askicooladmin.nomoredomainswork.ru/api';

export const isResponseOk = (response) => {
  return !(response instanceof Error);
}; 

export const endpoints = {
  games: `${BASE_URL}/games`,
  auth: `${BASE_URL}/me`,
  me: `${BASE_URL}/users/me`
}; 

