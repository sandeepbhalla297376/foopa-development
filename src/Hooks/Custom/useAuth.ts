import {useCallback} from 'react';
import {Keyboard} from 'react-native';
import {useQueryCache} from 'react-query';
import AppStateHandler from 'src/StateHandlers/AppStateHandler';
import SnackbarHandler from 'src/Utils/Shared/SnackbarHandler';
import useApiMutation from '../Shared/useApiMutation';
import DeviceInfo from 'react-native-device-info';

function useAuth() {
  const [mutate, {status}] = useApiMutation();
  const queryCache = useQueryCache();

  // const login = useCallback(
  //   async ({email, password}) => {
  //     queryCache.clear();
  //     try {
  //       const response = await mutate({
  //         url: '/login',
  //         data: {email, password},
  //         method: 'POST',
  //       });

  //       if (response) {
  //         const {status: statusCode, data} = response;
  //         if (statusCode === 200) {
  //           console.log(data);
  //           AppStateHandler.login({
  //             token: data?.token,
  //             user: {email, password},
  //           });
  //           SnackbarHandler.successToast('Logged in successfully');
  //         }
  //       }
  //     } catch (error) {
  //       SnackbarHandler.errorToast('Logged failed');
  //     }
  //   },
  //   [mutate, queryCache],
  // );
  const login = useCallback(
    ({email, password}) => {
      Keyboard.dismiss();
      queryCache.clear();
      console.log('call');
      mutate(
        {
          url: '/auth/login',
          data: {email, password, UUID: DeviceInfo.getUniqueId()},
          method: 'POST',
        },

        {
          onSuccess: (response) => {
            const {status: statusCode, data} = response;
            console.log('data', response);
            if (statusCode === 200) {
              console.log('data', response);
              AppStateHandler.login({
                token: data?.token.token,
                user: data?.data,
              });
              if (data?.message) {
                SnackbarHandler.successToast(data.message);
              }
            }
          },
          // onError: (error: any) => {
          //   if (error?.response) {
          //     console.log(error.response);
          //     if (error.response?.data?.message) {
          //       SnackbarHandler.errorToast(error.response.data.message.trim());
          //     }
          //     if (error.response?.status === 401) {
          //       AppStateHandler.logout();
          //     }
          //     if (error.response?.status === 403) {
          //       // setVerifyEmail(true);
          //     }
          //   }
          // },
        },
      );
    },
    [mutate, queryCache],
  );

  const signUp = useCallback(
    ({firstName, lastName, email, password}) => {
      Keyboard.dismiss();
      if (!firstName.trim()) {
        return SnackbarHandler.errorToast('Firstname is required.');
      }
      if (!lastName.trim()) {
        return SnackbarHandler.errorToast('Lastname is required.');
      }
      queryCache.clear();
      mutate(
        {
          url: '/auth/register',
          data: {
            firstName,
            lastName,
            email,
            password,
            UUID: DeviceInfo.getUniqueId(),
          },
          method: 'POST',
        },
        {
          onSuccess: (response) => {
            const {status: statusCode, data} = response;
            console.log('response', response);
            if (statusCode === 200) {
              // setVerifyEmail(true);
              if (data?.message) {
                SnackbarHandler.successToast(data.message);
              }
            }
          },
        },
      );
    },
    [mutate, queryCache],
  );

  const forgotPassword = useCallback(
    ({email}) => {
      Keyboard.dismiss();
      mutate(
        {
          url: '/auth/forgetPassword',
          data: {email},
          method: 'POST',
        },
        {
          onSuccess: (response) => {
            const {status: statusCode, data} = response;
            console.log('response', response);
            if (statusCode === 200) {
              console.log('data', data);
              SnackbarHandler.successToast(data.message);
            }
          },
        },
      );
    },
    [mutate],
  );

  const logout = useCallback(() => {
    // PopupStateHandler.closePopup();
    Keyboard.dismiss();
    mutate(
      {
        url: `/auth/logout/${DeviceInfo.getUniqueId()}`,
        method: 'GET',
      },
      {
        onSuccess: (response) => {
          const {status: statusCode, data} = response;
          if (statusCode === 200) {
            console.log('data', data);
            AppStateHandler.logout();
            SnackbarHandler.successToast(data.message);
          }
        },
      },
    );
  }, [mutate]);

  // const getProfile = useCallback(() => {
  //   mutate(
  //     {
  //       url: '/getProfile',
  //       method: 'GET',
  //     },
  //     {
  //       onSuccess: (response) => {
  //         const {status: statusCode, data} = response;
  //         if (statusCode === 200) {
  //           console.log(data);
  //           AppStateHandler.updateUser({user: data.data});
  //         }
  //       },
  //     },
  //   );
  // }, [mutate]);

  return {
    logout,
    forgotPassword,
    signUp,
    login,
    // getProfile,
    loading: status === 'loading',
    // verifyEmail,
    // setVerifyEmail,
  };

  // return {login, loading: status === 'loading'};
}

export default useAuth;
