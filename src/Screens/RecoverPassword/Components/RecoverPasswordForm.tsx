import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function RecoverPasswordForm() {
  const navigation = useNavigation();
  const {control, errors} = useForm({
    defaultValues: {email: ''},
    mode: 'onChange',
  });
  return (
    <Fragment>
      <Spacer size={scaler(57)} />
      <Typography textAlign={'center'} fontSize={scaler(18)}>
        Recover password
      </Typography>
      <Spacer size={scaler(15)} />
      <Typography variant={'accent'} textAlign={'center'} fontSize={scaler(14)}>
        Please enter your email to recover your password.
      </Typography>
      <Spacer size={scaler(30)} />
      <FormInput
        config={{
          name: 'email',
          textInputProps: {
            label: 'Your email',
            placeholder: 'Enter email ',
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
      <Spacer size={scaler(45)} />
      <AppButton
        height={scaler(50)}
        labelStyle={{
          fontSize: scaler(15),
        }}
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{
          borderRadius: scaler(16),
        }}>
        Recover password
      </AppButton>
    </Fragment>
  );
}

export default RecoverPasswordForm;
