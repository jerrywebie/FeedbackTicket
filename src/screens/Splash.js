import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

//import splashImage from '../assets/images/splash.png';
import Styles from '../utility/styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('TicketList'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={[styles.container, {backgroundColor: Styles.colors.gray}]}>
      <StatusBar hidden={true} />
      <View style={styles.imageContainer}>
        {/* <Image
          source={splashImage}
          resizeMode="contain"
          style={styles.splashImage}
        /> */}
        <Text style={styles.splashText}>FeedbackTicket</Text>
      </View>
      <View style={styles.developedBy}>
        <Text style={styles.developerName}>developed by PHYU ZIN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    alignSelf: 'center',
    borderWidth: 4,
    width: Styles.standard.baseTwenty * 5,
    height: Styles.standard.baseTwenty * 5,
    borderColor: Styles.colors.white,
    borderRadius: Styles.standard.baseTwenty * 3,
  },
  splashText: {
    alignSelf: 'center',
    color: Styles.colors.white,
    paddingVertical: Styles.standard.baseTwenty,
    fontSize: Styles.size.medium,
    fontFamily: 'Poppins-Bold',
  },
  developedBy: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Styles.standard.baseTwenty,
  },
  developerName: {
    color: Styles.colors.light,
    fontSize: Styles.standard.baseTen,
    fontFamily: 'Poppins-Regular',
  },
});

export default Splash;
