/* eslint-disable @typescript-eslint/no-unused-vars */
import {DarkTheme, DefaultTheme, configureFonts} from 'react-native-paper';
import {Font} from 'react-native-paper/lib/typescript/src/types';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      white: string;
      black: string;
      success: string;
    }
    interface Theme {}
    // interface ThemeFonts {
    //   black: Font;
    //   bold: Font;
    //   extraBold: Font;
    //   extraLight: Font;
    //   light: Font;
    //   medium: Font;
    //   regular: Font;
    //   semiBold: Font;
    //   thin: Font;
    // }
  }
}

// const fonts = {
//   bold: {
//     fontFamily: 'Poppins-Bold',
//     fontWeight: '600',
//   },
//   light: {
//     fontFamily: 'Poppins-Light',
//     fontWeight: '300',
//   },
//   medium: {
//     fontFamily: 'Poppins-Medium',
//     fontWeight: '900',
//   },
//   regular: {
//     fontFamily: 'Poppins-Regular',
//     fontWeight: '400',
//   },

//   semiBold: {
//     fontFamily: 'Poppins-SemiBold',
//     fontWeight: '600',
//   },
// };

// const fontConfig: any = {
//   ios: fonts,
//   android: fonts,
// };

export const DayTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: '#ffffff',
    black: '#000000',
    success: '#25a820',
    primary: '#1D3557',
    accent: '#707070',
  },
  // fonts: configureFonts(fontConfig),
};

export const NightTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    white: '#ffffff',
    black: '#000000',
    success: '#25a820',
    primary: '#1D3557',
  },
};
