import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from 'src/Screens/Landing/LandingScreen';
import LoginScreen from 'src/Screens/Login/LoginScreen';
import SignupScreen from 'src/Screens/Signup/SignupScreen';
import OnboardingScreen from 'src/Screens/Onboarding/OnboardingScreen';
import SignupBasicInfoScreen from 'src/Screens/Signup/SignupBasicInfoScreen';
import SignupCreatePasswordScreen from 'src/Screens/Signup/SignupCreatePasswordScreen';
import SignupDOBScreen from 'src/Screens/Signup/SignupDOBScreen';
import SignupProfilePhotoScreen from 'src/Screens/Signup/SignupProfilePhotoScreen';
import SignupFavClubScreen from 'src/Screens/Signup/SignupFavClubScreen';
import SignupAccountCreatedScreen from 'src/Screens/Signup/SignupAccountCreatedScreen';
import SignupNotificationScreen from 'src/Screens/Signup/SignupNotificationScreen';
import RecoverPasswordScreen from 'src/Screens/RecoverPassword/RecoverPasswordScreen';

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="BasicInfo"
        component={SignupBasicInfoScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="CreatePassword"
        component={SignupCreatePasswordScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="DOB"
        component={SignupDOBScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ProfilePhoto"
        component={SignupProfilePhotoScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="FavClub"
        component={SignupFavClubScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="AccountCreate"
        component={SignupAccountCreatedScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="SignupNotification"
        component={SignupNotificationScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="RecoverPassword"
        component={RecoverPasswordScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
