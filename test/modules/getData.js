export async function getDataAsync(path) {
  const response = await fetch(`https://swapi.dev/api/${path}`);
  const data = response.json();

  return data;
}