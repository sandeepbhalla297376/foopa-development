/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Appbar} from 'react-native-paper';
import Col from 'src/Components/Shared/Col/Col';
import Row from 'src/Components/Shared/Row/Row';
import Toggle from 'src/Components/Shared/Toggle/Toggle';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/Utils/Shared/scaler';

function SignupHeader({onPress, skip}: any) {
  return (
    <Appbar.Header
      dark={false}
      style={{
        backgroundColor: 'transparent',
      }}>
      <Row style={{alignItems: 'center'}}>
        <Col flex={6}>
          <Appbar.BackAction color={'#8E8E8E'} onPress={onPress} />
        </Col>
        <Toggle visible={skip}>
          <Col flex={1}>
            <Typography color={'#8E8E8E'} fontSize={scaler(15)}>
              Skip
            </Typography>
          </Col>
        </Toggle>
      </Row>
    </Appbar.Header>
  );
}

export default SignupHeader;
