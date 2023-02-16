import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function usePasswordUpdate() {
  const {
    loading: passwordUpdateLoading,
    error: passwordUpdateError,
    act: passwordUpdate,
  } = useAsync(userApi.passwordUpdate, false);

  return {
    passwordUpdateLoading,
    passwordUpdateError,
    passwordUpdate,
  };
}
