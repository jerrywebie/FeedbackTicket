import React, {useState, useLayoutEffect} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import data from '../api/data';
import CustomStatusBar from '../components/CustomStatusBar';
import FormTextInput from '../components/FormTextInput';
import FormButton from '../components/FormButton';
import FormRNSelectList from '../components/FormRNSelectList';

import Styles from '../utility/styles';

const {height, width} = Dimensions.get('screen');

const NewTicket = ({route, navigation}) => {
  const [scrollY, setScrollY] = useState(0);
  const {ticketId} = route.params;
  const isAddMode = !ticketId;
  const title = isAddMode ? 'Add Ticket' : 'Edit Ticket';

  const {Developers, IssueTypes, Status } = data;
  
  const [selectedDeveloper, setSelectedDeveloper] = useState("");
  const [selectedIssueType, setIssueType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  
 
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitted},
  } = useForm();

  useLayoutEffect(() => {
    scrollY > 3 && navigation.setOptions({headerShown: false});
    scrollY === 0 && navigation.setOptions({headerShown: true});
  }, [scrollY, navigation]);

  const onSave = data => {
   console.log(Developers.filter(obj=> obj.key === selectedDeveloper)[0].value, IssueTypes.filter(obj=> obj.key === selectedIssueType)[0].value,
   Status.filter(obj=> obj.key === selectedStatus)[0].value);
    const newTicket = {
      requester_name: data.requesterName,
      title: data.title,
      feedback: data.feedback,
      assignee:  Developers.filter(obj=> obj.key === selectedDeveloper)[0].value, 
      issued_type: IssueTypes.filter(obj=> obj.key === selectedIssueType)[0].value,
      status: Status.filter(obj=> obj.key === selectedStatus)[0].value,
      // request_date: 'Jun 3,  2022',
      // solved_date: 'Jun 5,  2022',
    }
    console.log('new_ticket=', newTicket);
    // navigation.navigate('TicketList');
  };

  const onCancel = () => {
    setSelectedDeveloper("");
    setIssueType("");
    setSelectedStatus("");
    reset();
  }
  return (
    <ScrollView
      style={styles.container}
      onScroll={e => {
        setScrollY(e.nativeEvent.contentOffset.y);
      }}>
      <CustomStatusBar backgroundColor={Styles.colorslightGreen} />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>{title}</Text>
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
        <View style={{...styles.formRow, justifyContent: 'flex-start'}}>
           <FormRNSelectList
             name="issued_type"
             data={IssueTypes}
             setSelected={setIssueType}
             placeholder="Issue Type"
             placeholderText="Select Issue Type"
             size="full"
             control={control}
             defaultOption={IssueTypes[0]}
          />
          </View>
          <View style={{...styles.formRow, justifyContent: 'flex-start'}}>
           <FormRNSelectList
             name="status"
             data={Status}
             setSelected={setSelectedStatus}
             placeholder="Ticket Status"
             placeholderText="Select Ticket Status"
             size="half"
             control={control}
             defaultOption={Status[0]}
          />
        </View>
        <View style={{...styles.formRow, justifyContent: 'flex-start'}}>
          <FormRNSelectList
             name="assignee"
             data={Developers}
             setSelected={setSelectedDeveloper}
             placeholder="Assignee"
             placeholderText="Select Assignee"
             size="full"
             control={control}
             defaultOption={{key: Developers[0].key, value: Developers[0].value}}
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
            numberOfLines={8}
            control={control}
            rules={{required: 'Feedback*'}}
          />
        </View>
        <View style={{...styles.formRow, justifyContent: 'space-around'}}>
          <FormButton
            text="Cancel"
            onPress={onCancel}
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
    marginTop: 46,
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
