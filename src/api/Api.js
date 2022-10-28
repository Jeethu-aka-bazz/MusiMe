const apiBaseUrl = 'https://ws.audioscrobbler.com/2.0/';
const ApiKey = '02337ace2e1fb8324fa527e58e799468';

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
