import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {upload} from 'src/Assets/Images';
import SignupHeader from 'src/Components/Custom/SignupHeader/SignupHeader';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Body from 'src/Components/Shared/Body/Body';
import Center from 'src/Components/Shared/Center/Center';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function SignupProfilePhotoScreen({navigation}: any) {
  const styles = StyleSheet.create({
    circle: {
      height: scaler(120),
      width: scaler(120),
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: scaler(80),
      alignItems: 'center',
      justifyContent: 'center',
    },
    upload: {
      height: scaler(42),
      width: scaler(42),
    },
  });

  return (
    <Container fullScreen statusBarStyle={'dark-content'}>
      <SignupHeader onPress={() => navigation.goBack()} skip={'skip'} />
      <Body>
        <Padding horizontal size={scaler(35)}>
          <Spacer size={scaler(15)} />
          <Typography textAlign={'center'} fontSize={scaler(18)}>
            Profile photo
          </Typography>
          <Spacer size={scaler(10)} />
          <Typography
            variant={'accent'}
            textAlign={'center'}
            fontSize={scaler(14)}>
            Here you can add a profile photo to your profile so your friends
            know it’s you.
          </Typography>
          <Spacer size={scaler(20)} />
          <Center>
            <View style={styles.circle}>
              <Image style={styles.upload} source={upload} />
            </View>
          </Center>
          <Spacer size={scaler(279)} />
          <AppButton
            height={scaler(50)}
            labelStyle={{
              fontSize: scaler(15),
            }}
            onPress={() => {
              navigation.navigate('FavClub');
            }}
            style={{
              borderRadius: scaler(16),
            }}>
            Next
          </AppButton>
        </Padding>
      </Body>
    </Container>
  );
}

export default SignupProfilePhotoScreen;
