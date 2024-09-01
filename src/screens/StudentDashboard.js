// src/screens/StudentDashboard.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StudentDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Dashboard</Text>
      <Button title="View Homework" onPress={() => {}} />
      <Button title="Start Learning" onPress={() => {}} />
      {/* Add additional functionalities here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Subtle green color
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#1B5E20', // Dark green for text
  },
});

export default StudentDashboard;
