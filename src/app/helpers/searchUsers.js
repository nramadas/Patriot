export default async function(query) {
  return fetch(`/searchUsers?q=${query}`)
    .then(res => res.json());
}
