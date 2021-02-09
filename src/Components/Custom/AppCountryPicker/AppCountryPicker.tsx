/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Platform} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import scaler from 'src/Utils/Shared/scaler';
import useAppCountryPicker from './useAppCountryPicker';

const AppCountryPicker = (props: any) => {
  const {
    onSelect,
    countryCode,
    pickerCountryCode,
    country,
  } = useAppCountryPicker(props);

  console.log('pickerCountryCode', pickerCountryCode, country, countryCode);
  return (
    <View style={{top: scaler(3)}}>
      <CountryPicker
        countryCode={pickerCountryCode}
        onSelect={(value) => onSelect(value)}
        withFlagButton={false}
        withFlag={true}
        withFilter={true}
        withAlphaFilter={true}
        withCallingCode={true}
        withCallingCodeButton={true}
        filterProps={{placeholder: 'Search Country'}}
      />

      
    </View>
  );
};

export default AppCountryPicker;
