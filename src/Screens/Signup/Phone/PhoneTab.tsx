import React, {Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import FormInput from 'src/Components/Shared/FormInput/FormInput';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';
import CountryPicker from 'react-native-country-picker-modal';
import {View} from 'react-native'
import {useState} from 'react';
import AppCountryPicker from 'src/Components/Custom/AppCountryPicker/AppCountryPicker';

function PhoneTab() {
  const {control, errors} = useForm({
    defaultValues: {phone: ''},
    mode: 'onChange',
  });

  const [pickerCountryCode, setPickerCountryCode]: any = useState('');
  const [country, setCountry] = useState(null);

  const onSelect = () => {
    setPickerCountryCode(country?.cca2);
   
    // setCountryCode(country);
    setCountry(country);
    console.log('jj', pickerCountryCode, country);
  };
  console.log('jj', country);
  return (
    <Fragment>
      <FormInput
        config={{
          name: 'phone',
          textInputProps: {
            label: 'Phone number',
            placeholder: 'Phone number',
            keyboardType: 'number-pad',
            
            left: (
              
              <TextInput.Icon
            
              style={{height:30,width:60}}
                //@ts-ignore
                name={() => <AppCountryPicker />}
              />
         
            ),
          },
        }}
        errors={errors}
        control={control}
      />
      <Spacer size={scaler(15)} />
      <Typography textAlign={'center'} color={'#4D4D4D'} fontSize={scaler(12)}>
        You may receive SMS updates from Foopa11 and can opt out at any time.
      </Typography>
    </Fragment>
  );
}

export default PhoneTab;
