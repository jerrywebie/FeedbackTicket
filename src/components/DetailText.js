import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Styles from '../utility/styles';

const DetailText = ({title, text}) => {
  return (
    <Text style={styles.detailTextContainer}>
      <Text style={styles.detailText}>
        {title} {':'}
      </Text>
      <Text style={[styles.detailText, {color: Styles.colors.darkGray}]}>
        {' '}
        {text}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  detailTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  detailText: {
    fontSize: 16,
    lineHeight: 26,
    color: Styles.colors.gray,
  },
});

export default DetailText;
