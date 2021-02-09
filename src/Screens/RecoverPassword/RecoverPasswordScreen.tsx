import React from 'react';
import SignupHeader from 'src/Components/Custom/SignupHeader/SignupHeader';
import Body from 'src/Components/Shared/Body/Body';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import scaler from 'src/Utils/Shared/scaler';
import RecoverPasswordForm from './Components/RecoverPasswordForm';

function RecoverPasswordScreen({navigation}: any) {
  return (
    <Container fullScreen statusBarStyle={'dark-content'}>
      <SignupHeader onPress={() => navigation.goBack()} />
      <Body>
        <Padding horizontal size={scaler(35)}>
          <RecoverPasswordForm />
        </Padding>
      </Body>
    </Container>
  );
}

export default RecoverPasswordScreen;
