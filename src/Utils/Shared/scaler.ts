//@ts-ignore
import {create} from 'react-native-pixel-perfect';
import UltimateConfig from 'react-native-ultimate-config';

const designResolution = {
  width: 375,
  height: 667,
};
const perfectSize = create(designResolution);

const scaler = (size: any) => perfectSize(size);

export default scaler;
