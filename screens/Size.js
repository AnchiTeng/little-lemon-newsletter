import {Dimensions} from 'react-native';




const { width, height } = Dimensions.get('window');
  const baseFontSize = 16;
const responsiveSize = (size) => {
  const scale = Math.min(width, height) / 390; // 390 point is the standard width of an iPhone 13
  const scaledFontSize = size * scale;
  return Math.round(scaledFontSize > baseFontSize ? scaledFontSize : baseFontSize);
};



export default responsiveSize;