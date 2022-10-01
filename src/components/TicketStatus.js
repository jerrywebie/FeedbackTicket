import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Styles from '../utility/styles';

const TicketStatus = ({title, itemStatus}) => {
  const getBackgroundColor = status => {
    if (status === 'closed') {
      return {
        backgroundColor: Styles.colors.darkGray,
        borderColor: '#f2f2f1',
      };
    } else if (status === 'solved') {
      return {
        backgroundColor: Styles.colors.lightGreen,
        borderColor: Styles.colors.lightGreen,
      };
    } else if (status === 'open') {
      return {
        backgroundColor: '#b8e2f4',
        borderColor: '#b8e2f4',
      };
    } else {
      return {
        backgroundColor: '#fef5da',
        borderColor: '#fef5da',
      };
    }
  };

  const getColor = status => {
    if (status === 'closed') {
      return {
        color: '#fff',
      };
    } else if (status === 'solved') {
      return {
        color: '#059033',
      };
    } else if (status === 'open') {
      return {
        color: '#00599a',
      };
    } else {
      return {
        color: '#f57517',
      };
    }
  };

  return (
    <View style={styles.statusWrapper}>
      <Text style={styles.detailText}>
        {title} {':'}
      </Text>
      <View style={[styles.statusContainer, getBackgroundColor(itemStatus)]}>
        <Text style={[{lineHeight: 26}, getColor(itemStatus)]}>
          {' '}
          {itemStatus}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 4,
  },
  statusContainer: {
    borderWidth: 0.6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 10,
    elvation: 2,
  },
  detailText: {
    fontSize: 16,
    lineHeight: 26,
    color: Styles.colors.gray,
  },
});

export default TicketStatus;
