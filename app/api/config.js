export const BASE_URL = 'https://askicooladmin.nomoredomainswork.ru/api';


export const isResponseOk = (response) => {
  return !(response instanceof Error);
}; 

export const endpoints = {
  games: `${BASE_URL}/games`,
  auth: `${BASE_URL}/auth/login`,
  me: `${BASE_URL}/me`
}; 

