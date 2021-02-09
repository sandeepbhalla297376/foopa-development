import React, {useState} from 'react';
export default function useAppCountryPicker({
  setCountryCode,
  countryCode,
  defaultValue,
}: any) {
  // console.log(setCountryCode,
  // countryCode,);
  const [pickerCountryCode, setPickerCountryCode]: any = useState(
    defaultValue?.cca2 || 'EG',
  );
  const [country, setCountry] = useState({
    callingCode: defaultValue?.callingCode || '44',
  });

  const onSelect = (country: any) => {
    setPickerCountryCode(country.cca2);
    // setCountryCode(country);
    setCountry(country);
    // console.log('country----', country);
  };
  return {
    setCountry,
    onSelect,
    setCountryCode,
    countryCode,
    country,
    pickerCountryCode,
  };
}
