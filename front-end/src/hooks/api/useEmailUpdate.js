import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function useEmailUpdate() {
  const {
    loading: emailUpdateLoading,
    error: emailUpdateError,
    act: emailUpdate,
  } = useAsync(userApi.emailUpdate, false);

  return {
    emailUpdateLoading,
    emailUpdateError,
    emailUpdate,
  };
}
