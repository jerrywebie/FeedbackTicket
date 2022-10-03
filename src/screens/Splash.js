import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import CustomStatusBar from '../components/CustomStatusBar';
import splashImage from '../assets/images/splash.jpg';
import Styles from '../utility/styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('TicketList'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={[styles.container, {backgroundColor: Styles.colors.paleGreen}]}>
      <CustomStatusBar backgroundColor={Styles.colors.paleGreen} />
      <View style={styles.imageContainer}>
        <Image
          source={splashImage}
          resizeMode="contain"
          style={styles.splashImage}
        />
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
    width: Styles.standard.baseTwenty * 14,
    height: Styles.standard.baseTwenty * 14,
  },
  splashText: {
    alignSelf: 'center',
    color: Styles.colors.textGreen,
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
    color: Styles.colors.textGreen,
    fontSize: Styles.standard.baseTen,
    fontFamily: 'Poppins-Regular',
  },
});

export default Splash;
