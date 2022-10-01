import React from 'react';
import {View, Text} from 'react-native';

const NewTicket = ({route}) => {
  const {ticketId} = route.params;
  return <View>
    <Text>Add or edit ticket {ticketId}</Text>
    </View>;
};

export default NewTicket;
