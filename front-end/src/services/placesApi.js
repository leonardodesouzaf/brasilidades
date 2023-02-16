import api from './api';

export async function districtPlaces(district) {
  const response = await api.get(`/places/${district}`);
  return response.data;
}

export async function favoritePlaces(userId) {
  const response = await api.get(`/places/favorites/${userId}`);
  return response.data;
}

export async function favorite(placeId, userId) {
  const response = await api.post('/places', { placeId, userId });
  return response.data;
}

export async function unfavorite(favoriteId) {
  const response = await api.delete(`/places/${favoriteId}`);
  return response.data;
}

export async function unfavoriteAll(userId) {
  const response = await api.delete(`/places/all/${userId}`);
  return response.data;
}
