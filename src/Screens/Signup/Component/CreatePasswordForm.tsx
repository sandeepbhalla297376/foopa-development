import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function CreatePasswordForm() {
  const navigation = useNavigation();
  const {control, errors, watch} = useForm({
    defaultValues: {password: '', repeatPassword: ''},
    mode: 'onChange',
  });
  return (
    <Fragment>
      <Spacer size={scaler(15)} />
      <Typography textAlign={'center'} fontSize={scaler(18)}>
        Create a password
      </Typography>

      <Spacer size={scaler(20)} />
      <FormInput
        config={{
          name: 'password',
          textInputProps: {
            label: 'Password',
            placeholder: 'Enter password',
            secureTextEntry: true,
            right: (
              <TextInput.Icon
                name={'eye'}
                color={'#626262'}
                style={{marginRight: scaler(15), top: scaler(5)}}
              />
            ),
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
      <Spacer size={scaler(16)} />
      <FormInput
        config={{
          name: 'repeatPassword',
          textInputProps: {
            label: 'Repeat password',
            placeholder: 'Repeat password',
            secureTextEntry: true,
            right: (
              <TextInput.Icon
                name={'eye'}
                color={'#626262'}
                style={{marginRight: scaler(15), top: scaler(5)}}
              />
            ),
          },
        }}
        rules={{
          required: {
            value: true,
            message: ' Repeat Password is required',
          },
          validate: {
            value: (value: any) =>
              value === watch('password')
                ? true
                : 'Repeat Passwords do not match',
          },
        }}
        errors={errors}
        control={control}
      />
      <Spacer size={scaler(305)} />
      <AppButton
        height={scaler(50)}
        labelStyle={{
          fontSize: scaler(15),
        }}
        onPress={() => {
          navigation.navigate('DOB');
        }}
        style={{
          borderRadius: scaler(16),
        }}>
        Next
      </AppButton>
    </Fragment>
  );
}

export default CreatePasswordForm;
