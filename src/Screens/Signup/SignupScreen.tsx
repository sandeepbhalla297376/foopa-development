/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Body from 'src/Components/Shared/Body/Body';
import Container from 'src/Components/Shared/Container/Container';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';
import EmailTab from './Email/EmailTab';
import SignupHeader from 'src/Components/Custom/SignupHeader/SignupHeader';
import PhoneTab from './Phone/PhoneTab';
import Padding from 'src/Components/Shared/Padding/Padding';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Toggle from 'src/Components/Shared/Toggle/Toggle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Row from 'src/Components/Shared/Row/Row';
import {useTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';

function SignupScreen(props: any) {
  const theme = useTheme();
  const [phoneView, setPhoneView] = useState(true);
  const [emailView, setEmailView] = useState(false);

  const phoneDetail = () => {
    setPhoneView(true);
    setEmailView(false);
  };
  const emailDetail = () => {
    setPhoneView(false);
    setEmailView(true);
  };

  const styles = StyleSheet.create({
    phone: {
      height: scaler(32),
      backgroundColor: phoneView ? theme.colors.primary : theme.colors.white,
      justifyContent: 'center',
      width: scaler(125),
      alignItems: 'center',
      borderTopLeftRadius: scaler(10),
      borderBottomLeftRadius: scaler(10),
    },
    email: {
      height: scaler(32),
      backgroundColor: emailView ? theme.colors.primary : theme.colors.white,
      justifyContent: 'center',
      width: scaler(125),
      alignItems: 'center',
      borderTopRightRadius: scaler(10),
      borderBottomRightRadius: scaler(10),
    },
  });

  return (
    <Container fullScreen statusBarStyle={'dark-content'}>
      <SignupHeader onPress={() => props.navigation.goBack()} />
      <Padding horizontal size={scaler(35)}>
        <Body>
          <Spacer size={scaler(35)} />
          <Typography textAlign={'center'} fontSize={scaler(18)} type="regular">
            Enter Phone or Email
          </Typography>
          <Spacer size={scaler(20)} />
          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={phoneDetail} style={styles.phone}>
              <Typography
              
                fontSize={scaler(13)}
                color={phoneView ? 'white' : '#8E8E8E'}>
                Phone number
              </Typography>
            </TouchableOpacity>

            <TouchableOpacity onPress={emailDetail} style={styles.email}>
              <Typography
                fontSize={scaler(13)}
                color={emailView ? 'white' : '#8E8E8E'}>
                Email address
              </Typography>
            </TouchableOpacity>
          </Row>
          <Spacer size={scaler(20)} />
          <Toggle visible={phoneView}>
            <PhoneTab />
          </Toggle>
          <Toggle visible={emailView}>
            <EmailTab />
          </Toggle>
          <Spacer size={scaler(230)} />
          <AppButton
            fontSize={scaler(15)}
            height={scaler(50)}
            onPress={() => {
              props.navigation.navigate('BasicInfo');
            }}
            style={{
              borderRadius: scaler(16),
            }}>
            Next
          </AppButton>
          <Spacer size={scaler(20)} />
          <Typography fontSize={scaler(12)} textAlign={'center'}>
            By signing up, you agree to our
          </Typography>
        </Body>
      </Padding>
    </Container>
  );
}

export default SignupScreen;
