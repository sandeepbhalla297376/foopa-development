/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput, useTheme} from 'react-native-paper';
import {calendar} from 'src/Assets/Images';
import SignupHeader from 'src/Components/Custom/SignupHeader/SignupHeader';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Body from 'src/Components/Shared/Body/Body';
import Container from 'src/Components/Shared/Container/Container';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';
import DateTimePicker from 'react-native-modal-datetime-picker';
//@ts-ignore
import {Dropdown} from 'react-native-material-dropdown-v2-fixed';
import moment from 'moment';

function SignupDOBScreen({navigation}: any) {
  const theme = useTheme();
  // const inputEl = useRef(null);
  const [userGender, setUserGender] = useState('');
  // const [date, setDate] = useState(new Date());
  const [showAgePicker, setShowAgePicker] = useState(false);
  const minimumAge = new Date(
    new Date().setFullYear(new Date().getFullYear() - 18),
  );
  const {control, errors, setValue} = useForm({
    defaultValues: {birthday: '', gender: ''},
    mode: 'onChange',
  });

  let genderData = [
    {
      value: 'Female',
    },
    {
      value: 'Male',
    },
    {
      value: 'Diverse',
    },
  ];
  const toggleGenderPicker = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      //@ts-ignore
      this.myDropdown.focus();
    });
  };

  const onConfirmGender = useCallback(
    (gender: string) => {
      setValue('gender', gender);
      setUserGender(gender);
    },
    [setValue],
  );
  const toggleAgePicker = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      setShowAgePicker((c) => !c);
    });
  };

  const onConfirmAge = useCallback(
    (date: Date) => {
      toggleAgePicker();
      setValue('birthday', moment(date).format('DD-MM-YYYY'));
    },
    [setValue],
  );

  return (
    <Container fullScreen statusBarStyle={'dark-content'}>
      <SignupHeader onPress={() => navigation.goBack()} skip={'skip'} />
      <Body>
        <Padding horizontal size={scaler(35)}>
          <Spacer size={scaler(15)} />
          <Typography textAlign={'center'} fontSize={scaler(18)}>
            Aditional information
          </Typography>
          <Spacer size={scaler(20)} />
          <TouchableOpacity onPress={toggleAgePicker}>
            <View pointerEvents={'none'}>
              <FormInput
                config={{
                  name: 'birthday',
                  textInputProps: {
                    label: 'Birthday',
                    placeholder: 'DD - MM - YYYY',
                    right: (
                      <TextInput.Icon
                        name={calendar}
                        color={'#626262'}
                        style={{marginRight: scaler(15), top: scaler(5)}}
                      />
                    ),
                  },
                }}
                errors={errors}
                control={control}
              />
            </View>
          </TouchableOpacity>
          <Spacer size={scaler(15)} />
          <TouchableOpacity onPress={() => toggleGenderPicker()}>
            <View pointerEvents={'none'}>
              <FormInput
                config={{
                  name: 'gender',
                  textInputProps: {
                    placeholder: 'Gender',
                  },
                }}
                // rules={{
                //   required: {
                //     value: true,
                //     message: 'Sex is required',
                //   },
                // }}
                errors={errors}
                control={control}
              />
              <Dropdown
                //@ts-ignore
                ref={(c: any) => (this.myDropdown = c)}
                data={genderData}
                containerStyle={{
                  height: 0,
                  width: 0,
                }}
                pickerStyle={{
                  width: '85%',
                  backgroundColor: theme.colors.background,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: theme.colors.accent,
                }}
                itemColor={theme.colors.placeholder}
                onChangeText={(value: string) => onConfirmGender(value)}
                fontSize={scaler(16)}
                dropdownPosition={0.48}
                selectedItemColor={
                  userGender ? theme.colors.accent : theme.colors.placeholder
                }
                renderAccessory={() => null}
                itemTextStyle={{...theme.fonts.regular}}
              />
            </View>
          </TouchableOpacity>
          <Spacer />
          <Spacer size={scaler(350)} />
          <AppButton
            height={scaler(50)}
            labelStyle={{
              fontSize: scaler(15),
            }}
            onPress={() => {
              navigation.navigate('ProfilePhoto');
            }}
            style={{
              borderRadius: scaler(16),
            }}>
            Next
          </AppButton>
        </Padding>

        <DateTimePicker
          isVisible={showAgePicker}
          onConfirm={onConfirmAge}
          onCancel={toggleAgePicker}
          date={minimumAge}
          maximumDate={minimumAge}
        />
      </Body>
    </Container>
  );
}

export default SignupDOBScreen;
