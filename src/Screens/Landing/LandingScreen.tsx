/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground} from 'react-native';
import Container from 'src/Components/Shared/Container/Container';
// import Body from 'src/Components/Shared/Body/Body';
import Center from 'src/Components/Shared/Center/Center';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import scaler from 'src/Utils/Shared/scaler';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import {background_landing} from 'src/Assets/Images';
import Logo from 'src/Screens/Landing/Components/Logo/Logo';
import useLandingScreen from './Hooks/useLandingScreen';

function LandingScreen() {
  const {goToLogin, goToSignup} = useLandingScreen();
  return (
    <Container>
      {/* <Body> */}
      <ImageBackground
        source={background_landing}
        style={{
          height: '100%',
          width: '100%',
        }}
        resizeMode="cover">
        <Padding flex={1} horizontal>
          <Center>
            <Spacer size={scaler(15)} />
            <Logo />
            <Typography
              style={{justifyContent: 'center'}}
              fontSize={scaler(14)}
              color="white"
              fontWeight="400"
              textAlign="center"
              type="regular">
              Welcome to our app, foopa11 is an app{'\n'}
              designed for the football enthusiast. Join{'\n'}
              now the community and learn more.
            </Typography>
          </Center>
          <Spacer size={scaler(260)} />

          <Padding horizontal>
            <AppButton
              fontSize={scaler(15)}
              height={scaler(50)}
              onPress={goToLogin}
              color="#1D3557"
              style={{
                borderRadius: scaler(16),
              }}>
              Already have an account
            </AppButton>
          </Padding>
          <Spacer size={scaler(15)} />
          <Padding horizontal>
            <AppButton
              fontSize={scaler(15)}
              color="white"
              height={scaler(50)}
              onPress={goToSignup}
              style={{
                borderRadius: scaler(16),
              }}>
              Create One
            </AppButton>
          </Padding>

          <Spacer size={scaler(30)} />
        </Padding>
      </ImageBackground>
      {/* </Body> */}
    </Container>
  );
}

export default LandingScreen;
