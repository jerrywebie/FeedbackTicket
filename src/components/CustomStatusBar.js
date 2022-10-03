import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';



const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;

const CustomStatusBar = ({backgroundColor}) => {
  return (
    <StatusBar
      backgroundColor={backgroundColor}
      StatusBarStyle={{
        height: STATUSBAR_HEIGHT,
      }}
    />
  );
};

export default CustomStatusBar;
