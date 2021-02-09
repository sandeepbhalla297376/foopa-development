import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function FavClub() {
  const styles = StyleSheet.create({
    search: {
      height: scaler(36),
      borderRadius: scaler(10),
      backgroundColor: 'rgba(142, 142, 147, 0.12)',
    },
  });
  return (
    <Fragment>
      <Typography variant={'accent'} textAlign={'center'} fontSize={scaler(14)}>
        Choose your favorites clubs. With this, we can find the best content
        suitable for you.
      </Typography>
      <Spacer size={scaler(28)} />
      <Searchbar style={styles.search} />
      <Spacer size={scaler(21)} />
      <Typography fontSize={scaler(13)}>Suggested</Typography>
      <Spacer size={scaler(21)} />
      <Padding horizontal size={scaler(20)}>
        <Typography fontSize={scaler(13)}>AS Monaco</Typography>
        <Spacer size={scaler(21)} />
        <Typography fontSize={scaler(13)}>AS Monaco</Typography>
        <Spacer size={scaler(21)} />
        <Typography fontSize={scaler(13)}>AS Monaco</Typography>
      </Padding>
    </Fragment>
  );
}

export default FavClub;
