import useAsync from '../useAsync';

import * as placesApi from '../../services/placesApi';

export default function useFavoritePlaces() {
  const {
    loading: favoritePlacesLoading,
    error: favoritePlacesError,
    act: favoritePlaces,
  } = useAsync(placesApi.favoritePlaces, false);

  return {
    favoritePlacesLoading,
    favoritePlacesError,
    favoritePlaces,
  };
}
