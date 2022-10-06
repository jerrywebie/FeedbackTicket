import React from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import {Controller} from 'react-hook-form';
import RNSelectList from 'react-native-dropdown-select-list';

import Styles from '../utility/styles';

const FormRNSelectList = ({
  control,
  name,
  rules = {},
  data,
  setSelected,
  placeholder,
  placeholderText,
  defaultOption,
  //size,
  // required,
  // formState
}) => {
  return (
    <Controller
          control={control}
          name={name}
          rules={rules}
          render={({field: {value, onChange, onBlur}}) => (
            
        <View  style={{
          flex: 1,
          justifyContent:'flex-start',
        }}>
          <Text
            style={{
              color: Styles.colors.gray,
              alignItems: 'flex-start',
              marginVertical: 1,
              marginLeft: 10
            }}>
            {placeholder}
          </Text>
          {/* <View style={styles.container}> */}
          
            <RNSelectList
              placeholder={placeholderText}
              setSelected={setSelected} 
              data={data} 
              onSelect={() =>onChange(value)}
              search={false} 
              dropdownStyles={[styles.container, { zIndex: 200}]}
              boxStyles={[styles.container,{
              borderColor: '#e8e8e8'}]}
              defaultOption={defaultOption} />
               
          {/* </View> */}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical:2,
    zIndex: 100,
    ...Platform.select({
      ios: {
        shadowColor: '#f1f1f1',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.28,
      },
      android: {
        elevation: 1,
      },
    }),
  },
//   input: {
//     textAlignVertical: 'top',
//   },
});

export default FormRNSelectList;
