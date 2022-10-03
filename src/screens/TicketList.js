import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Platform,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomStatusBar from '../components/CustomStatusBar';
import data from '../api/data';
import Styles from '../utility/styles';

import DetailText from '../components/DetailText';
import TicketStatus from '../components/TicketStatus';
import FloatingButton from '../components/FlotaingButton';

const screenHeight = Dimensions.get('screen').height;

const TicketList = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const {Tickets} = data;

  const addOrEditTicket = item => {
    const ticketId = item ? item.id : null;
    navigation.navigate('NewTicket', {ticketId: ticketId});
  };

  const getBorderColor = status => {
    if (status === 'closed') {
      return {
        borderColor: Styles.colors.darkGray,
      };
    } else if (status === 'solved') {
      return {
        borderColor: '#6cc173',
      };
    } else if (status === 'open') {
      return {
        borderColor: '#00599a',
      };
    } else {
      return {
        borderColor: '#ffca2e',
      };
    }
  };

  const renderCardTitle = item => (
    <View
      style={[
        styles.cardTitleContainer,
        {borderLeftWidth: item.id === currentIndex ? 0 : 4},
        getBorderColor(item.status),
      ]}>
      <Text style={styles.heading}>{item.title}</Text>

      <MaterialCommunityIcons
        name={item.id === currentIndex ? 'chevron-up' : 'chevron-down'}
        color={Styles.colors.gray}
        size={26}
      />
    </View>
  );

  const renderCardContent = item => (
    <View style={styles.content}>
      <Pressable
        onPress={() => addOrEditTicket(item)}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#FF2400' : 'black'},
          styles.editButton,
        ]}>
        <MaterialCommunityIcons
          name="pen"
          color={Styles.colors.gray}
          size={16}
        />
        <Text style={styles.buttonText}>Edit</Text>
      </Pressable>
      <TicketStatus title="Status" itemStatus={item.status} />
      <DetailText title="Issue Type" text={item.issued_type} />
      <DetailText title="Request Date" text={item.request_date} />
      {item.solved_date ? (
        <DetailText title="Solved Date" text={item.solved_date} />
      ) : (
        <></>
      )}
      <DetailText title="Requester Name" text={item.requester_name} />
      <DetailText title="Feedback" text={item.feedback} />
      <DetailText title="Assignee" text={item.assignee} />
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setCurrentIndex(item.id === currentIndex ? null : item.id);
      }}
      style={styles.cardContainer}
      activeOpacity={0.9}>
      <View style={styles.card}>
        {renderCardTitle(item)}
        {item.id === currentIndex && renderCardContent(item)}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={Styles.colors.lightGreen}/>
      <FlatList
        data={Tickets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={currentIndex}
      />
      <FloatingButton iconName="plus" onPress={addOrEditTicket} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    position: 'relative',
  },
  cardContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderWidth: 0.2,
    marginHorizontal: 10,
    marginVertical: 8,
    borderColor: '#ffffff',
    borderRadius: 4,
    ...Platform.select({
      ios: {
        shadowColor: '#f2f2f1',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.26,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  card: {
    flexGrow: 1,
  },
  cardTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  heading: {
    flex: 1,
    fontSize: 18,
    justifyContent: 'flex-start',
    color: Styles.colors.darkGray,
  },
  statusWrapper: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  detailText: {
    fontSize: 16,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
    color: Styles.colors.gray,
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 16,
    backgroundColor: Styles.colors.paleGreen,
    borderWidth: 0.1,
    borderColor: Styles.colors.lightGreen,
    borderRadius: 4,
    padding: 10,
  },
  editButton: {
    backgroundColor: Styles.colors.lightGreen,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: Styles.colors.lightGreen,
    borderRadius: 4,
    width: '20%',
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    padding: 6,
  },
  buttonText: {
    color: Styles.colors.darkGray,
    lineHeight: 24,
    fontSize: 16,
  },
});

export default TicketList;
