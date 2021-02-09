/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {useTheme} from 'react-native-paper';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Center from 'src/Components/Shared/Center/Center';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Row from 'src/Components/Shared/Row/Row';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import useAuth from 'src/Hooks/Custom/useAuth';
import LogoDark from 'src/Screens/Landing/Components/Logo/LogoDark';
import AppStateHandler from 'src/StateHandlers/AppStateHandler';
import scaler from 'src/Utils/Shared/scaler';

function LoginForm() {
  const theme = useTheme();
  const navigation = useNavigation();
  const {control, errors, handleSubmit} = useForm({
    defaultValues: {email: '', password: ''},
    mode: 'onChange',
  });

  const {login} = useAuth();

  const onSubmit = handleSubmit(login);

  return (
    <Fragment>
      <Center>
        <LogoDark />
      </Center>
      <FormInput
        config={{
          name: 'email',
          textInputProps: {
            label: 'Your email or phone number',
            placeholder: 'Enter Email or phonenumber',
          },
        }}
        rules={{
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: 'Email address is invalid',
          },
        }}
        errors={errors}
        control={control}
      />
      <Spacer size={scaler(16)} />
      <FormInput
        config={{
          name: 'password',
          textInputProps: {
            label: 'Your Password',
            secureTextEntry: true,
            placeholder: 'Enter Password',
          },
        }}
        rules={{
          required: {
            value: true,
            message: 'Password is required',
          },
          minLength: {
            value: 6,
            message: 'Password should be atleast 6 characters',
          },
          maxLength: {
            value: 20,
            message: 'Password should be between 6 and 20 characters',
          },
        }}
        errors={errors}
        control={control}
      />
      <Spacer size={scaler(30)} />
      <AppButton
        height={57}
        onPress={() => AppStateHandler.setState({loggedIn: true})}
        labelStyle={{
          fontSize: scaler(15),
        }}
        style={{
          borderRadius: scaler(16),
        }}>
        Sign In
      </AppButton>
      <Spacer size={scaler(20)} />
      <Center>
        <Row>
          <Typography
            fontSize={scaler(12)}
            style={{letterSpacing: 1}}
            type="regular">
            Forgot the login details?
          </Typography>
          <Spacer horizontal size={scaler(25)} />
          <Typography
            fontSize={scaler(12)}
            style={{letterSpacing: 1}}
            type="regular"
            onPress={() => {
              navigation.navigate('RecoverPassword');
            }}
            color={theme.colors.primary}>
            Recover
          </Typography>
        </Row>
      </Center>
      <Spacer size={scaler(154)} />
      <Center>
        <Row>
          <Typography
            fontSize={scaler(12)}
            type="regular"
            style={{letterSpacing: 1}}>
            Don't have an account?
          </Typography>
          <Spacer horizontal />
          <Typography
            fontSize={scaler(12)}
            type={'regular'}
            onPress={() => {
              navigation.navigate('Signup');
            }}
            color={theme.colors.primary}
            style={{letterSpacing: 1}}>
            Signup
          </Typography>
        </Row>
      </Center>
    </Fragment>
  );
}

export default LoginForm;
