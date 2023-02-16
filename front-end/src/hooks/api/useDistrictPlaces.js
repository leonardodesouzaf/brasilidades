import useAsync from '../useAsync';

import * as placesApi from '../../services/placesApi';

export default function useDistrictPlaces() {
  const {
    loading: districtPlacesLoading,
    error: districtPlacesError,
    act: districtPlaces,
  } = useAsync(placesApi.districtPlaces, false);

  return {
    districtPlacesLoading,
    districtPlacesError,
    districtPlaces,
  };
}
