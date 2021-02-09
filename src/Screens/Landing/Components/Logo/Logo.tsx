import {Image, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';

import {logo} from 'src/Assets/Images';
import scaler from 'src/Utils/Shared/scaler';

function Logo() {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        logoStyle: {
          height: scaler(145.18),
          width: scaler(178.15),
          marginTop: scaler(25),
        },
      }),
    [],
  );

  return (
    <Image source={logo} resizeMode={'contain'} style={styles.logoStyle} />
  );
}

export default Logo;
