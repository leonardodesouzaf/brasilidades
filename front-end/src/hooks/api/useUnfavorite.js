import useAsync from '../useAsync';

import * as placesApi from '../../services/placesApi';

export default function useUnfavorite() {
  const {
    loading: unfavoriteLoading,
    error: unfavoriteError,
    act: unfavorite,
  } = useAsync(placesApi.unfavorite, false);

  return {
    unfavoriteLoading,
    unfavoriteError,
    unfavorite,
  };
}
