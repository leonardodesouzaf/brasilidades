import useAsync from '../useAsync';

import * as placesApi from '../../services/placesApi';

export default function useUnfavoriteAll() {
  const {
    loading: unfavoriteAllLoading,
    error: unfavoriteAllError,
    act: unfavoriteAll,
  } = useAsync(placesApi.unfavoriteAll, false);

  return {
    unfavoriteAllLoading,
    unfavoriteAllError,
    unfavoriteAll,
  };
}
