/**
 * author: liucheng 
 * e-mail: 674668211@qq.com
 * 
 * instructions: 此页面为单位 字体大小等，间距的配置等等
 */
import {
  PixelRatio,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
const marginTop = Platform.OS === 'android' ? 0 : 20
export const height = Dimensions.get('window').height
export const width = Dimensions.get('window').width
export const pixelRatio = PixelRatio.get();
export const isIphoneX = Platform.OS === 'ios' && height === 812 && width === 375;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';


module.exports = {
  pt2px: pt => PixelRatio.getPixelSizeForLayoutSize(pt),
  px2pt: px => PixelRatio.roundToNearestPixel(px),
  isIOS: isIOS,
  isAndroid: isAndroid,
  isIphoneX: isIphoneX,
  /*最小线宽*/
  pixel: 1 / PixelRatio.get(),
  pixelRatio : pixelRatio,
  SEPARATOR_HEIGHT : StyleSheet.hairlineWidth, 
  fontSizeScaler : pixelRatio/PixelRatio.getFontScale(),
  // 导航栏高度
  navHeight: isIOS ? 64 : 52,
  // 状态栏高度
  statusBarHeight: isIOS ? isIphoneX ? 32 :  20 : 0,

  /*屏幕尺寸*/
  height : width < height ? height : width,
  getHeight : () => {
    const { height, width } = Dimensions.get('window')
    return width < height ? height : width
  },
  width: width < height ? width : height,
  getWidth: () => {
    const { height, width } = Dimensions.get('window')
    return width < height ? width : height
  },
  
  /**fontsize adapter */
  normalize: (size) => {
    const { height, width } = Dimensions.get('window')
    const _width = width < height ? width : height
    const _height = width < height ? height : width
  
    if (pixelRatio >= 2 && pixelRatio < 3) {
      // iphone 5s and older Androids
      if (_width < 360) {
        return size * 0.95;
      }
      // iphone 5
      if (_height < 667) {
        return size;
        // iphone 6-6s
      } else if (_height >= 667 && _height <= 735) {
        return size * 1.15;
      }
      // older phablets
      return size * 1.25;
    } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (_width <= 360) {
        return size;
      }
      // Catch other weird android _width sizings
      if (_height < 667) {
        return size * 1.15;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (_height >= 667 && _height <= 735) {
        return size * 1.2;
      }
      // catch larger devices
      // ie iphone 6s plus / 7 plus / mi note 等等
      return size * 1.27;
    } else if (pixelRatio >= 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (_width <= 360) {
        return size;
        // Catch other smaller android _height sizings
      }
      if (_height < 667) {
        return size * 1.2;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (_height >= 667 && _height <= 735) {
        return size * 1.25;
      }
      // catch larger phablet devices
      return size * 1.4;
    } else
    // if older device ie pixelRatio !== 2 || 3 || 3.5
    {
      return size;
    }
  },
}

