import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import data from '../api/data';
import Styles from '../utility/styles';

import DetailText from '../components/DetailText';
import TicketStatus from '../components/TicketStatus';

const screenHeight = Dimensions.get('screen').height;

const TicketList = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const {Tickets} = data;

  const onPressHandler = () => {
    console.log('Press me!');
  };

  const cardTitle = item => (
    <View style={styles.cardTitleContainer}>
      <Text style={styles.heading}>{item.title}</Text>
      <View style={styles.statusWrapper}>
        <TicketStatus itemStatus={item.status} />
      </View>

      <MaterialCommunityIcons
        name={item.id === currentIndex ? 'chevron-up' : 'chevron-down'}
        color={Styles.colors.gray}
        size={26}
      />
    </View>
  );

  const cardContent = item => (
    <View style={styles.content}>
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
      <Pressable
        onPress={onPressHandler}
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
        {cardTitle(item)}
        {item.id === currentIndex && cardContent(item)}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Tickets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={currentIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Styles.colors.paleGreen,
    paddingVertical: 10,
  },
  cardContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderWidth: 0.2,
    marginHorizontal: 10,
    marginVertical: 8,
    borderColor: '#f1f1f1',
    borderRadius: 4,
    elevation: 4,
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
  },
  heading: {
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
    backgroundColor: '#f8faf7',
    opacity: 0.8,
    borderRadius: 4,
  },
  editButton: {
    backgroundColor: Styles.colors.lightGreen,
    marginHorizontal: 20,
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
