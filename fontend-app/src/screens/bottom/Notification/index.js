import {Container} from 'components';
import {Button} from 'native-base';
import React from 'react';
import {routes} from 'utils';

const NotificationScreen = ({navigation}) => {
  const _onLogin = () => {
    navigation.navigate(routes.AUTH_CONTAINER, {
      screen: routes.SIGN_IN_SCREEN,
    });
  };

  return (
    <Container title="Thông báo" canGoBack={false}>
      <Button onPress={_onLogin}>Đăng nhập</Button>
    </Container>
  );
};

export default NotificationScreen;
