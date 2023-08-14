import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);

  if (!res.ok) {
    console.error('Error response:', res.status, res.statusText);
    const responseBody = await res.text();
    console.error('Response body:', responseBody);
    throw new Error('Bad Request');
  }

  return res.json();
}
