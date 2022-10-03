import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

import Styles from '../utility/styles';

const FormButton = ({onPress, text, bgColor, buttonTextColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: bgColor ? bgColor : Styles.colors.gray},
      ]}>
      <Text
        style={[
          styles.text,
          {color: buttonTextColor ? buttonTextColor : Styles.colors.white},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 2,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default FormButton;
