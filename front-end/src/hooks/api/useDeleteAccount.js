import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function useDeleteAccount() {
  const {
    loading: deleteAccountLoading,
    error: deleteAccountError,
    act: deleteAccount,
  } = useAsync(userApi.deleteAccount, false);

  return {
    deleteAccountLoading,
    deleteAccountError,
    deleteAccount,
  };
}
