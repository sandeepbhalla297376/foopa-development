import React from 'react';
import SignupHeader from 'src/Components/Custom/SignupHeader/SignupHeader';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Body from 'src/Components/Shared/Body/Body';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';
import FavClub from './Component/FavClub';

function SignupFavClubScreen({navigation}: any) {
  return (
    <Container fullScreen statusBarStyle={'dark-content'}>
      <SignupHeader onPress={() => navigation.goBack()} skip={'skip'} />
      <Body>
        <Padding horizontal size={scaler(35)}>
          <Spacer size={scaler(15)} />
          <Typography textAlign={'center'} fontSize={scaler(18)}>
            Favourite club
          </Typography>
          <Spacer size={scaler(10)} />
          <FavClub />

          <Spacer size={scaler(230)} />
          <AppButton
            height={scaler(50)}
            labelStyle={{
              fontSize: scaler(15),
            }}
            onPress={() => {
              navigation.navigate('AccountCreate');
            }}
            style={{
              borderRadius: scaler(16),
            }}>
            Finish
          </AppButton>
        </Padding>
      </Body>
    </Container>
  );
}

export default SignupFavClubScreen;
