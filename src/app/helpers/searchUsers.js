export default async function(query) {
  return fetch(`/searchUsers?q=${query}`);
}
