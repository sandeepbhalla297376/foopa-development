import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function useLandingScreen() {
  const navigation = useNavigation();

  const goToLogin = () => navigation.navigate('Login');

  const goToSignup = () => navigation.navigate('Signup');

  const majorVersionIOS =
    typeof Platform.Version === 'string'
      ? parseInt(Platform.Version, 10)
      : Platform.Version;

  return {goToLogin, goToSignup, majorVersionIOS};
}

export default useLandingScreen;