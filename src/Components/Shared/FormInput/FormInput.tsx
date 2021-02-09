// /* eslint-disable react-native/no-inline-styles */
// import React, {ComponentProps, Fragment} from 'react';
// import {TextInput, HelperText} from 'react-native-paper';
// import {Controller} from 'react-hook-form';
// import VisibilityToggle from 'src/Components/Shared/VisibilityToggle/VisibilityToggle';
// import {ViewStyle} from 'react-native';

// const onChange = (args: {nativeEvent: {text: any}}[]) =>
//   args[0].nativeEvent.text;

// type FormConfigType = {
//   name: string;
//   customStyle?: ViewStyle;
//   textInputProps?: ComponentProps<typeof TextInput>;
// };

// type PropType = {
//   config: FormConfigType;
//   control: any;
//   errors?: any;
//   watch?: any;
// };

// function FormInput({config, control, errors, watch}: PropType) {
//   const {name, textInputProps} = config;

//   return (
//     <Fragment>
//       <Controller
//         as={
//           <TextInput
//             {...textInputProps}
//             mode={'flat'}
//             error={errors[name]}
//             style={[{backgroundColor: 'transparent'}, textInputProps?.style]}
//             // right={
//             //   textInputProps?.right &&
//             //   (errors[name]?.message ? false : true) &&
//             //   watch(name) !== '' &&
//             //   textInputProps?.right
//             // }
//           />
//         }
//         control={control}
//         name={name}
//         onChange={onChange}
//       />
//       <VisibilityToggle visible={errors[name]}>
//         <HelperText type={'error'}>{errors[name]?.message}</HelperText>
//       </VisibilityToggle>
//     </Fragment>
//   );
// }

// export default FormInput;

import React, {ComponentProps, Fragment} from 'react';
import {TextInput, HelperText} from 'react-native-paper';
import {
  Controller,
  Validate,
  ValidationRule,
  ValidationValueMessage,
} from 'react-hook-form';
import Toggle from '../Toggle/Toggle';
import InputComponent from 'src/Components/Custom/InputComponent/InputComponent';

export type FormConfigType = {
  name: string;
  textInputProps?: ComponentProps<typeof TextInput>;
  customProps?: any;
};
// This component is used for creating formInput in the app.

export type FormInputPropType = {
  config: FormConfigType;
  control: any;
  errors?: any;
  rules?:
    | Partial<{
        required: string | boolean | ValidationValueMessage<boolean>;
        min: ValidationRule<React.ReactText>;
        max: ValidationRule<React.ReactText>;
        maxLength: ValidationRule<React.ReactText>;
        minLength: ValidationRule<React.ReactText>;
        pattern: ValidationRule<RegExp>;
        validate: Validate | Record<string, Validate>;
      }>
    | undefined;
};

function FormInput({config, control, errors, rules}: FormInputPropType) {
  const {name, textInputProps, customProps} = config;

  return (
    <Fragment>
      <Controller
        render={({onChange, onBlur, value}) => {
          return (
            <InputComponent
              textInputProps={{
                ...textInputProps,
                onChangeText: onChange,
                onBlur,
                value,
              }}
              customProps={{...customProps, error: errors[name]}}
            />
          );
        }}
        rules={rules}
        control={control}
        name={name}
      />
      <Toggle visible={errors?.[name]}>
        <HelperText type={'error'}>{errors?.[name]?.message}</HelperText>
      </Toggle>
    </Fragment>
  );
}

export default FormInput;
