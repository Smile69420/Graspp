// src/screens/SplashScreen.js

import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import CustomButton from '../components/CustomButton'; // Corrected import path

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/splash_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to GRASPP</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Login as Teacher"
            onPress={() => navigation.navigate('TeacherLogin')}
          />
          <CustomButton
            title="Login as Student"
            onPress={() => navigation.navigate('StudentLogin')}
          />
          <CustomButton
            title="Login as Parent"
            onPress={() => navigation.navigate('ParentLogin')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
  },
});

export default SplashScreen;
