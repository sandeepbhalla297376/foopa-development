import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppTabNavigator from './AppTabNavigator';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="AppTab"
        component={AppTabNavigator}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
