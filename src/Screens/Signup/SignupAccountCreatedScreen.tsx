import React from 'react';
import {Image} from 'react-native';
import {group} from 'src/Assets/Images';
import SignupHeader from 'src/Components/Custom/SignupHeader/SignupHeader';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Body from 'src/Components/Shared/Body/Body';
import Center from 'src/Components/Shared/Center/Center';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function SignupAccountCreatedScreen({navigation}: any) {
  return (
    <Container fullScreen statusBarStyle={'dark-content'}>
      <SignupHeader onPress={() => navigation.goBack()} />
      <Body>
        <Padding horizontal size={scaler(35)}>
          <Spacer size={scaler(15)} />
          <Typography textAlign={'center'} fontSize={scaler(18)}>
            Account created
          </Typography>
          <Spacer size={scaler(15)} />
          <Typography
            variant={'accent'}
            textAlign={'center'}
            fontSize={scaler(14)}>
            Thank you for completing your profile.
          </Typography>
          <Spacer size={scaler(88)} />
          <Center>
            <Image source={group} />
          </Center>
          <Spacer size={scaler(166)} />
          <AppButton
            height={scaler(50)}
            labelStyle={{
              fontSize: scaler(15),
            }}
            onPress={() => {
              navigation.navigate('SignupNotification');
            }}
            style={{
              borderRadius: scaler(16),
            }}>
            Done
          </AppButton>
        </Padding>
      </Body>
    </Container>
  );
}

export default SignupAccountCreatedScreen;
