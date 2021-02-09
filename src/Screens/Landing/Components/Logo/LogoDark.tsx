import {Image, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';

import {logo_dark} from 'src/Assets/Images';
import scaler from 'src/Utils/Shared/scaler';

function LogoDark() {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        logoStyle: {
          height: scaler(145.18),
          width: scaler(171.64),
        },
      }),
    [],
  );

  return (
    <Image source={logo_dark} resizeMode={'contain'} style={styles.logoStyle} />
  );
}

export default LogoDark;
