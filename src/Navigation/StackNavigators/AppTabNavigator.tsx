import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image, ImageSourcePropType} from 'react-native';
import React, {useRef, Fragment} from 'react';
import {useTheme} from 'react-native-paper';
import scaler from 'src/Utils/Shared/scaler';
// import InstructorHomeScreen from 'src/Screens/InstructorHome/InstructorHomeScreen';
// import InstructorMessageScreen from 'src/Screens/InstructorMessage/InstructorMessageScreen';
// import InstructorCalenderScreen from 'src/Screens/InstructorCalender/InstructorCalenderScreen';
// import InstructorProfileScreen from 'src/Screens/InstructorProfile/InstructorProfileScreen';
import Center from 'src/Components/Shared/Center/Center';
import FeedScreen from 'src/Screens/Feed/FeedScreen';
import {feed_active, feed_inactive} from 'src/Assets/Images';
// This stack is used for creating bottom tab for instructor in the app.
const Tab = createMaterialBottomTabNavigator();

function AppTabNavigator() {
  const theme = useTheme();
  const tabs = useRef<Array<any>>(TabsArray);

  return (
    <Tab.Navigator
      shifting={false}
      activeColor={theme.colors.primary}
      labeled={false}
      inactiveColor={theme.colors.white}
      barStyle={{
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.primary,
        borderWidth: scaler(1),
      }}
      initialRouteName={'Home'}>
      {tabs.current.map((tab: any) => (
        <Tab.Screen key={tab.name} {...tab} />
      ))}
    </Tab.Navigator>
  );
}

const renderImage = (image: ImageSourcePropType) => (
  <Fragment>
    <Center allAxis>
      <Image
        style={{height: scaler(28.5), width: scaler(25.5)}}
        resizeMode={'contain'}
        source={image}
      />
    </Center>
  </Fragment>
);

const TabsArray = [
  {
    name: 'feed',
    component: FeedScreen,
    options: {
      tabBarIcon: ({focused}: any) =>
        renderImage(focused ? feed_active : feed_inactive),
    },
  },
  //   {
  //     name: 'InstructorMessage',
  //     component: InstructorMessageScreen,
  //     options: {
  //       tabBarIcon: ({focused}: any) =>
  //         renderImage(focused ? images.message_active : images.message_inactive),
  //     },
  //   },
  //   {
  //     name: 'Calender',
  //     component: InstructorCalenderScreen,

  //     options: {
  //       tabBarIcon: ({focused}: any) =>
  //         renderImage(
  //           focused ? images.calendar_active : images.calendar_inactive,
  //         ),
  //     },
  //   },
  //   {
  //     name: 'InstructorProfile',
  //     component: InstructorProfileScreen,
  //     options: {
  //       tabBarIcon: ({focused}: any) =>
  //         renderImage(focused ? images.user_active : images.user_inactive),
  //     },
  //   },
];

export default AppTabNavigator;
