import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

import Styles from '../utility/styles';

const FormTextInput = ({
  control,
  name,
  rules = {},
  placeholder,
  size = 'half',
  multiline,
  numberOfLines,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View
          style={{
            flex: 1,
            justifyContent: size === 'half' ? 'space-around' : 'flex-start',
          }}>
          <Text
            style={{
              color: error ? 'red' : Styles.colors.gray,
              alignItems: 'flex-start',
              marginVertical: 1,
              marginLeft: 10
            }}>
            {error ? error.message : placeholder}
          </Text>
          <View
            style={[
              styles.container,
              {width: size === 'half' ? '98%' : null},
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              multiline={multiline}
              numberOfLines={numberOfLines}
              placeholder={placeholder}
              style={styles.input}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    textAlignVertical: 'top',
  },
});

export default FormTextInput;
