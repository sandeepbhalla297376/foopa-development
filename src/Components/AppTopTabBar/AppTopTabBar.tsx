<<<<<<< HEAD
/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
=======
import React, {useState} from 'react';
import {Dimensions, ImageBackground, TouchableOpacity, View} from 'react-native';
import { color } from 'react-native-reanimated';
>>>>>>> 153055e76895bd78ea350fa347f230b756b7e88c
import scaler from 'src/Utils/Shared/scaler';
import Container from '../Shared/Container/Container';
import Row from '../Shared/Row/Row';
import Typography from '../Shared/Typography/Typography';

function AppTopTabBar(props: any) {
  const {active, TabCreator, tabArray} = useTopNavigator(props);

  return (
<<<<<<< HEAD
    <View style={{flex: 1}}>
      <Row style={{height: scaler(1), flex: 1}}>
        {tabArray.map((data: any, index: number) => {
          return <TabCreator data={data} key={index} />;
        })}
      </Row>
      {tabArray[active].screen}
    </View>
=======
  
     <Container>
       
          <Row style={{flex:1}}>
          {tabArray.map((data: any, index: number) => {
            return <TabCreator data={data} key={index} />;
          })}
        </Row>
        {tabArray[active].screen}
       </Container>

      
     
>>>>>>> 153055e76895bd78ea350fa347f230b756b7e88c
  );

  function useTopNavigator({props, tabArray}: any) {
    const [active, setActiveHeading] = useState(0);
    const fullWidth = Dimensions.get('screen').width;

    const StateChange = (name: any) => {
      name === active ? null : setActiveHeading(name);
    };

    const TabCreator = (data: any) => {
      // console.log('func', data);
      return (
        <TouchableOpacity
          onPress={() => StateChange(data.data.key)}
          style={{
            width: fullWidth / tabArray.length,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: scaler(32),
            backgroundColor: '#1d3357',
          }}>
          <View
            style={{
              flex: 1,
              width: fullWidth / 1.5,
              height: scaler(110),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Typography
              style={
<<<<<<< HEAD
                active === data.data.key
                  ? {fontWeight: '500'}
=======
                active == data.data.key
                  ? {fontWeight: '600'}
>>>>>>> 153055e76895bd78ea350fa347f230b756b7e88c
                  : {fontWeight: '300'}
              }
              color={'white'}>
              {data.data.name}
            </Typography>
          </View>
        </TouchableOpacity>
      );
    };

    return {
      active,
      fullWidth,
      StateChange,
      tabArray,
      TabCreator,
    };
  }
}

export default AppTopTabBar;

// /* eslint-disable react-native/no-inline-styles */
// import React, {Fragment, useState} from 'react';
// import {Dimensions, TouchableHighlight, View} from 'react-native';
// import {Surface} from 'react-native-paper';
// import scaler from 'src/Utils/Shared/scaler';
// import Body from '../Shared/Body/Body';
// import Row from '../Shared/Row/Row';
// import Toggle from '../Shared/Toggle/Toggle';
// import Typography from '../Shared/Typography/Typography';

// const {width: fullWidth, height} = Dimensions.get('screen');

// function AppTopTabBar(props: any) {
//   const {active, TabCreator, tabArray} = useTopNavigator(props);

//   return (
//     <Surface
//       style={{
//         flex: 1,
//         backgroundColor: '#ffffff',
//         borderRadius: scaler(20),
//         width: fullWidth - scaler(40),
//         height: height - scaler(260),
//         elevation: 0,
//       }}>
//       <Row
//         style={{
//           height: scaler(45.75),
//           justifyContent: 'center',
//           alignItems: 'center',
//           paddingTop: scaler(20),
//         }}
//         flex={0}>
//         {tabArray.map((data: any, index: number) => {
//           return (
//             <Fragment key={index}>
//               <TabCreator data={data} />
//               <Toggle visible={index === 0}>
//                 <View
//                   style={{
//                     width: scaler(2),
//                     backgroundColor: '#006142',
//                     height: scaler(21),
//                   }}
//                 />
//               </Toggle>
//             </Fragment>
//           );
//         })}
//       </Row>
//       <View
//         style={{
//           overflow: 'hidden',
//           borderRadius: scaler(20),
//           height: height - scaler(260) - scaler(45.75),
//         }}>
//         <Toggle visible={tabArray[active].name !== 'Notifications'}>
//           {tabArray[active].screen}
//         </Toggle>
//         <Toggle visible={tabArray[active].name === 'Notifications'}>
//           <Body style={{backgroundColor: 'grey'}}>
//             {tabArray[active].screen}
//           </Body>
//         </Toggle>
//       </View>
//     </Surface>
//   );
// }

// function useTopNavigator({tabArray}: any) {
//   const [active, setActiveHeading] = useState(0);

//   const StateChange = (name: any) => {
//     name === active ? null : setActiveHeading(name);
//   };

//   const TabCreator = (data: any) => {
//     return (
//       <TouchableHighlight
//         activeOpacity={0.6}
//         underlayColor="#DDDDDD"
//         onPress={() => StateChange(data.data.key)}
//         style={{
//           height: scaler(50.75),
//           flex: 1,
//           marginHorizontal: scaler(5),
//         }}>
//         {active === data.data.key ? (
//           <View
//             style={{
//               width: (fullWidth - scaler(50)) / tabArray.length,
//               justifyContent: 'center',
//               alignItems: 'center',
//               flex: 1,
//               flexDirection: 'row',
//               borderRadius: scaler(4.31),
//             }}>
//             <Typography fontSize={scaler(14)} color={'#006142'} type={'medium'}>
//               {data.data.name}
//             </Typography>
//           </View>
//         ) : (
//           <View
//             style={{
//               flex: 1,
//               width: (fullWidth - scaler(50)) / tabArray.length,
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Typography fontSize={scaler(14)} color={'#808080'} type={'medium'}>
//               {data.data.name}
//             </Typography>
//           </View>
//         )}
//       </TouchableHighlight>
//     );
//   };

//   return {
//     active,
//     fullWidth,
//     StateChange,
//     tabArray,
//     TabCreator,
//   };
// }

// export default AppTopTabBar;
