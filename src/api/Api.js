import {apiBaseUrl, ApiKey} from './config';
// ?method=album.search

const getSearchApi = async () => {
  const params = {
    api_key: ApiKey,
    method: 'album.search',
    format: 'json',
    album: 'Believe',
  };
  return await fetch(apiBaseUrl + '?' + new URLSearchParams(params))
    .then(res => res.json())
    .then(({results}) => results);
};

export default getSearchApi;
