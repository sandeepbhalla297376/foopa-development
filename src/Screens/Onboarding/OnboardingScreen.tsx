/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Container from 'src/Components/Shared/Container/Container';
import {ImageBackground, View} from 'react-native';
import Typography from 'src/Components/Shared/Typography/Typography';
import {onboard1, onboard2, onboard3, onboard4} from 'src/Assets/Images';
import scaler from 'src/Utils/Shared/scaler';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Padding from 'src/Components/Shared/Padding/Padding';
import AppButton from 'src/Components/Shared/AppButton/AppButton';
import Swiper from 'react-native-swiper';

function OnboardingScreen({navigation}: any) {
  const [currentForm, setCurrentForm] = useState(1);
  const [sliderRef, setSliderRef] = useState(null);

  function setProgress(index: any) {
    console.log('index', index);
    setCurrentForm(index + 1);
  }

  const nextScreen = () => {
    console.log('currentForm', currentForm);
    switch (currentForm) {
      case 1: {
        //@ts-ignore
        sliderRef.scrollBy(1);
        break;
      }

      case 2: {
        //@ts-ignore
        sliderRef.scrollBy(1);
        break;
      }
      case 3: {
        //@ts-ignore
        sliderRef.scrollBy(1);
        // navigation.navigate('LoginSignup');
        break;
      }
      case 4: {
        //@ts-ignore
        sliderRef.scrollBy(1);
        navigation.navigate('Landing');
        break;
      }

      default:
        break;
    }
  };

  return (
    <Container fullScreen>
      <Swiper
        ref={(swiperRef: any) => setSliderRef(swiperRef)}
        horizontal={true}
        showsButtons={false}
        onIndexChanged={setProgress}
        index={currentForm - 1}
        loadMinimalSize={1}
        loadMinimal={true}
        loop={false}
        activeDotColor={'#1D3557'}
        activeDotStyle={{width: scaler(26), height: scaler(5)}}
        dotStyle={{width: scaler(10), height: scaler(5)}}
        paginationStyle={{
          bottom: scaler(-10),
        }}>
        <View style={{flex: 0}}>
          <ImageBackground
            style={{
              width: '100%',
              height: scaler(285),
            }}
            source={onboard1}>
            <Spacer size={scaler(15)} />
            <Padding horizontal size={scaler(30)}>
              <Typography
                fontSize={scaler(14)}
                variant={'white'}
                textAlign={'right'}>
                Skip
              </Typography>
            </Padding>
          </ImageBackground>
          <Spacer size={scaler(33)} />
          <Typography
            textAlign={'center'}
            fontWeight={'400'}
            fontSize={scaler(24)}>
            Welcome to foopa11
          </Typography>
          <Spacer size={scaler(10)} />
          <Padding horizontal size={scaler(40)}>
            <Typography textAlign={'center'} fontSize={scaler(14)}>
              Welcome to our app. With foopa11 you can follow other football
              enthusiasts across the globe and enjoy the great community.
            </Typography>
          </Padding>
        </View>

        <View style={{flex: 0}}>
          <ImageBackground
            style={{
              width: '100%',
              height: scaler(285),
            }}
            source={onboard2}>
            <Spacer size={scaler(15)} />
            <Padding horizontal size={scaler(30)}>
              <Typography
                fontSize={scaler(14)}
                variant={'white'}
                textAlign={'right'}>
                Skip
              </Typography>
            </Padding>
          </ImageBackground>
          <Spacer size={scaler(33)} />
          <Typography
            textAlign={'center'}
            fontWeight={'400'}
            fontSize={scaler(24)}>
            Discover our Feed
          </Typography>
          <Spacer size={scaler(10)} />
          <Padding horizontal size={scaler(40)}>
            <Typography textAlign={'center'} fontSize={scaler(14)}>
              With our feed, we keep you updated with the latest content from
              your favourite content creators, clubs and players.
            </Typography>
          </Padding>
        </View>

        <View style={{flex: 0}}>
          <ImageBackground
            style={{
              width: '100%',
              height: scaler(285),
            }}
            source={onboard3}>
            <Spacer size={scaler(15)} />
            <Padding horizontal size={scaler(30)}>
              <Typography
                fontSize={scaler(14)}
                variant={'white'}
                textAlign={'right'}>
                Skip
              </Typography>
            </Padding>
          </ImageBackground>
          <Spacer size={scaler(33)} />
          <Typography
            textAlign={'center'}
            fontWeight={'400'}
            fontSize={scaler(24)}>
            Watch top Videos
          </Typography>
          <Spacer size={scaler(10)} />
          <Padding horizontal size={scaler(40)}>
            <Typography textAlign={'center'} fontSize={scaler(14)}>
              Don't miss our top videos and live streams and share your football
              talent with others.
            </Typography>
          </Padding>
        </View>
        <View style={{flex: 0}}>
          <ImageBackground
            style={{
              width: '100%',
              height: scaler(285),
            }}
            source={onboard4}>
            <Spacer size={scaler(15)} />
          </ImageBackground>
          <Spacer size={scaler(33)} />
          <Typography
            textAlign={'center'}
            fontWeight={'400'}
            fontSize={scaler(24)}>
            Get the latests News
          </Typography>
          <Spacer size={scaler(10)} />
          <Padding horizontal size={scaler(40)}>
            <Typography textAlign={'center'} fontSize={scaler(14)}>
              Don't miss the latest news about football and clubs. Our news are
              updated day by day.
            </Typography>
          </Padding>
        </View>
      </Swiper>
      <Spacer size={scaler(131)} />
      <Padding horizontal size={scaler(35)}>
        <AppButton
          fontSize={scaler(15)}
          height={scaler(50)}
          onPress={() => nextScreen()}
          style={{
            borderRadius: scaler(16),
          }}>
          Next
        </AppButton>
      </Padding>
    </Container>
  );
}

export default OnboardingScreen;
