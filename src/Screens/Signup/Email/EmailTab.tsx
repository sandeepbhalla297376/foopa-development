import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import FormInput from 'src/Components/Shared/FormInput/FormInput';

function EmailTab() {
  const {control, errors} = useForm({
    defaultValues: {email: ''},
    mode: 'onChange',
  });
  return (
    <Fragment>
      <FormInput
        config={{
          name: 'email',
          textInputProps: {
            label: 'Your Email',
            placeholder: 'Email Address',
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
    </Fragment>
  );
}

export default EmailTab;
