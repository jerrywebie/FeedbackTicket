import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TicketStatus = ({itemStatus}) => {
  const getColorAndBackgroundColor = status => {
    if (status === 'closed') {
      return {
        color: '#545453',
        backgroundColor: '#f2f2f1',
      };
    } else if (status === 'solved') {
      return {
        color: '#6cc173',
        backgroundColor: '#d4ecd6',
      };
    } else if (status === 'open') {
      return {
         color: '#0504af',
        backgroundColor: '#006eb6',
        opacity: 0.4
      };
    } else {
      return {
        color: '#ffca2e',
        backgroundColor: '#fef5da',
      };
    }
  };

  return (
    <Text
      style={[styles.statusContainer, getColorAndBackgroundColor(itemStatus)]}>
      {itemStatus}
    </Text>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    flex: 0.4,
    paddingVertical: 4,
    borderRadius: 4,
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default TicketStatus;
