import React from 'react';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Center from 'src/Components/Shared/Center/Center';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import AppStateHandler from 'src/StateHandlers/AppStateHandler';

function FeedScreen() {
  return (
    <Container>
      <Center allAxis>
        <Typography>feed screen</Typography>
      </Center>
      <Padding horizontal>
        <Spacer />
        <AppButton mode={'contained'} onPress={AppStateHandler.logout}>
          Logout
        </AppButton>
      </Padding>
    </Container>
  );
}

export default FeedScreen;
