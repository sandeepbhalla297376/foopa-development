import React from 'react';
import Body from 'src/Components/Shared/Body/Body';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import scaler from 'src/Utils/Shared/scaler';
import LoginForm from './Components/LoginForm/LoginForm';

function LoginScreen() {
  return (
    <Container fullScreen>
      <Body>
        <Padding horizontal size={scaler(35)}>
          <Spacer size={scaler(85)} />
          <LoginForm />
        </Padding>
      </Body>
    </Container>
  );
}

export default LoginScreen;
