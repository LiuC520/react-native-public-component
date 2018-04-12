/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import {PublicCompoennt, dimens} from 'react-native-public-component'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <PublicCompoennt leftText="刘成"    />

        <PublicCompoennt 
          leftText="不带箭头"  
          isRightArrowShow={false} 
          containerStyle={styles.mv10}/>

        <PublicCompoennt leftText="带下划线"  bottomLineLeftMargin={0}  />

        <PublicCompoennt 
          leftText="上下划线"  
          bottomLineLeftMargin={0} 
          hiddenTopLine={false} 
          containerStyle={styles.mv10} />

        <PublicCompoennt 
          leftText="左侧文字，右侧箭头带下划线"  
          leftTextStyle={styles.leftTextStyle}
        />

        <PublicCompoennt 
          leftText="左侧文字 右侧图片"  
          leftTextStyle={styles.leftTextStyle}
          rightIcon={require('./images/head_default.png')}
          rightIconStyle={styles.rightIconStyle1}
          containerStyle={styles.mv10} 
        />

        <PublicCompoennt 
          leftText="左侧文字图片 右侧图片"  
          leftTextStyle={styles.leftTextStyle}
          rightIcon={require('./images/head_default.png')}
          leftIcon={require('./images/head_default.png')}
          leftIconStyle={styles.rightIconStyle1}
          rightIconStyle={styles.rightIconStyle1}
          containerStyle={styles.mv10} 
        />

        <PublicCompoennt 
          leftText="左侧文字图片 右侧文字图片"  
          rightText="右侧文字"
          leftTextStyle={styles.leftTextStyle}
          rightTextStyle={styles.leftTextStyle}
          leftComponentStyle={styles.flex2}
          rightIcon={require('./images/head_default.png')}
          leftIcon={require('./images/head_default.png')}
          isRightArrowShow={false} 
          hiddenBottomLine={true}
          leftIconStyle={styles.rightIconStyle1}
          rightIconStyle={styles.rightIconStyle1}
          containerStyle={styles.mv10} 
        />

        <PublicCompoennt leftText="账号" rightComponent={this.rightLogin()} />
          
        <PublicCompoennt leftText="左侧" centerText="中间" rightText="右侧" containerStyle={styles.mv10} />

        <PublicCompoennt 
          leftText="左侧"  
          rightText="右侧"
          centerText="中间" 
          leftTextStyle={styles.leftTextStyle}
          rightTextStyle={styles.leftTextStyle}
          rightIcon={require('./images/head_default.png')}
          leftIcon={require('./images/head_default.png')}
          isRightArrowShow={false} 
          hiddenBottomLine={true}
          leftIconStyle={styles.rightIconStyle1}
          rightIconStyle={styles.rightIconStyle1}
          containerStyle={styles.mv10} 
        />
      </ScrollView>
    );

  }
  rightLogin=()=>(
    <TextInput 
      style={[styles.textinput,styles.mv10]}
      placeholder = "请输入姓名" 
      clearButtonMode='always'
      blurOnSubmit= {false} 
      placeholderTextColor='#bbbbbb'
      underlineColorAndroid="transparent" 
      numberOfLines={1}
      ellipsizeMode='tail'
      returnKeyType='next'
      clearButtonMode='always'/>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flex2:{
    flex:2
  },
  mv10:{
    marginTop:  4,
  },
  leftTextStyle:{
    fontSize: dimens.normalize(12),
    color:'gray'
  },
  rightIconStyle1:{
    width:30,
    height:30
  },
  textinput:{
    flex:1,
    marginRight: 16,
    textAlign: 'right',
    
  },
});
