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
  View
} from 'react-native';

import {CommonItem} from 'react-native-public-component'

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.log(CommonItem)
    return (
      <View style={styles.container}>
        <CommonItem leftText="左侧文字，右侧箭头带下划线"  isRightArrowShow={true}  />
        <CommonItem leftText="左侧文字，不带箭头带下划线"  isRightArrowShow={false}   />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
