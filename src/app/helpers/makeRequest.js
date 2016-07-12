import ValidationError from 'app/helpers/ValidationError';

export default function makeRequest(method, url, data) {
  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(res => {
    if (res.errors && res.errors.length) {
      throw new ValidationError(res.errors);
    };

    return res;
  });
}
