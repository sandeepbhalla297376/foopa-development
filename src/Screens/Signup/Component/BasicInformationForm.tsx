import {useNavigation} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';
import {SpaceValidator} from 'src/Utils/Shared/SpaceValidator';

function BasicInformationForm() {
  const navigation = useNavigation();
  const {control, errors} = useForm({
    defaultValues: {firstName: '', lasttName: '', userName: ''},
    mode: 'onChange',
  });
  return (
    <Fragment>
      <Spacer size={scaler(15)} />
      <Typography textAlign={'center'} fontSize={scaler(18)}>
        Basic information
      </Typography>
      <Spacer size={scaler(10)} />
      <Typography textAlign={'center'} fontSize={scaler(14)}>
        Add your name so friends can find you.
      </Typography>
      <Spacer size={scaler(20)} />
      <FormInput
        config={{
          name: 'firstName',
          textInputProps: {
            label: 'First name',
            placeholder: 'Enter first name',
          },
        }}
        rules={{
          required: {
            value: true,
            message: 'First name is required',
          },
          maxLength: {
            value: 25,
            message: 'First name should not be more than 25 characters',
          },
          validate: {
            value: (value: any) =>
              SpaceValidator(value) ? 'First name is required' : true,
          },
        }}
        errors={errors}
        control={control}
      />
      <Spacer size={scaler(16)} />
      <FormInput
        config={{
          name: 'lasttName',
          textInputProps: {
            label: 'Last name',
            placeholder: 'Enter last name',
          },
        }}
        rules={{
          required: {
            value: true,
            message: 'Last name is required',
          },
          maxLength: {
            value: 25,
            message: 'Last name should not be more than 25 characters',
          },
          validate: {
            value: (value: any) =>
              SpaceValidator(value) ? 'Last name is required' : true,
          },
        }}
        errors={errors}
        control={control}
      />
      <Spacer size={scaler(16)} />
      <FormInput
        config={{
          name: 'userName',
          textInputProps: {
            label: 'Username',
            placeholder: 'Enter username',
          },
        }}
        rules={{
          required: {
            value: true,
            message: 'User name is required',
          },
          maxLength: {
            value: 25,
            message: 'User name should not be more than 25 characters',
          },
          validate: {
            value: (value: any) =>
              SpaceValidator(value) ? 'User name is required' : true,
          },
        }}
        errors={errors}
        control={control}
      />
      <Spacer size={scaler(192)} />
      <AppButton
        height={scaler(50)}
        labelStyle={{
          fontSize: scaler(15),
        }}
        onPress={() => {
          navigation.navigate('CreatePassword');
        }}
        style={{
          borderRadius: scaler(16),
        }}>
        Next
      </AppButton>
    </Fragment>
  );
}

export default BasicInformationForm;
