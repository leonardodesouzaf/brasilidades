import api from './api';

export async function signUp(email, password) {
  const response = await api.post('/users', { email, password });
  return response.data;
}

export async function emailUpdate(email, userId) {
  const id = userId;
  const response = await api.post('/users/settings/email', { email, id });
  return response.data;
}

export async function passwordUpdate(password, userId) {
  const id = userId;
  const response = await api.post('/users/settings/password', { password, id });
  return response.data;
}

export async function deleteAccount(userId) {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
}
