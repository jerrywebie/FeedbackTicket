import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';


import CustomStatusBar from '../components/CustomStatusBar';
import FormTextInput from '../components/FormTextInput';
import FormButton from '../components/FormButton';

import Styles from '../utility/styles';

const {height, width} = Dimensions.get('screen');

const NewTicket = ({route, navigation}) => {
  const {ticketId} = route.params;
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const onSave = data => {
    console.log('data=', data);
    // navigation.navigate('TicketList');
  };
  return (
    <ScrollView style={styles.container}>
      <CustomStatusBar backgroundColor={Styles.colorslightGreen} />
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>
          {ticketId ? 'Edit Ticket' : 'Add Ticket'}
        </Text>
        <View style={{...styles.formRow, justifyContent: 'flex-start'}}>
          <FormTextInput
            name="requesterName"
            placeholder="Requester Name"
            size="full"
            multiline={false}
            numberOfLines={1}
            control={control}
            rules={{required: 'Requester name*'}}
          />
        </View>
        <View style={{...styles.formRow, justifyContent: 'space-between'}}>
          <FormTextInput
            name="issueType"
            placeholder="Issue Type"
            size="half"
            multiline={false}
            numberOfLines={1}
            control={control}
            rules={{required: 'Issue type*'}}
          />
          <FormTextInput
            name="status"
            placeholder="Ticket Status"
            size="half"
            multiline={false}
            numberOfLines={1}
            control={control}
            rules={{required: 'Assignee*'}}
          />
        </View>
        <View style={{...styles.formRow, justifyContent: 'flex-start'}}>
          <FormTextInput
            name="assignee"
            placeholder="Assignee"
            size="full"
            multiline={false}
            numberOfLines={1}
            control={control}
            rules={{required: 'Assignee*'}}
          />
        </View>
        <View style={{...styles.formRow, justifyContent: 'flex-start'}}>
          <FormTextInput
            name="title"
            placeholder="Title"
            size="full"
            multiline={false}
            numberOfLines={1}
            control={control}
            rules={{required: 'Title*'}}
          />
        </View>
        <View style={{...styles.formRow, justifyContent: 'flex-start'}}>
          <FormTextInput
            name="feedback"
            placeholder="Feedback"
            size="full"
            multiline={true}
            numberOfLines={6}
            control={control}
            rules={{required: 'Feedback*'}}
          />
        </View>
        <View style={{...styles.formRow, justifyContent: 'space-around'}}>
          <FormButton
            text="Cancel"
            onPress={() => reset()}
            buttonTextColor={Styles.colors.white}
            bgColor={Styles.colors.gray}
          />
          <FormButton
            text="Save"
            onPress={handleSubmit(onSave)}
            buttonTextColor={Styles.colors.white}
            bgColor={Styles.colors.textGreen}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.colors.lightGreen,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60,
  },
  formRow: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 4,
    marginHorizontal: 8,
  },
  formTitle: {
    marginBottom: 20,
    fontSize: 20,
  },
});

export default NewTicket;
