import React from 'react';
import {StyleSheet, Pressable} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from '../utility/styles';

const FloatingButton = ({iconName, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? Styles.colors.lightGray
            : Styles.colors.darkGray,
        },
        styles.buttonContainer,
      ]}>
      <MaterialCommunityIcons
        name={iconName}
        color={Styles.colors.white}
        size={36}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 60,
    zIndex: 100,
    position: 'absolute',
    bottom: 80,
    right: 20,
    elevation: 2,
  },
});

export default FloatingButton;
