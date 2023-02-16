import useAsync from '../useAsync';

import * as placesApi from '../../services/placesApi';

export default function useFavorite() {
  const {
    loading: favoriteLoading,
    error: favoriteError,
    act: favorite,
  } = useAsync(placesApi.favorite, false);

  return {
    favoriteLoading,
    favoriteError,
    favorite,
  };
}
