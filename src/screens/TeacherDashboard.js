// src/screens/TeacherDashboard.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TeacherDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teacher Dashboard</Text>
      <Button title="Create New Classroom" onPress={() => {}} />
      <Button title="Allot Homework" onPress={() => {}} />
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

export default TeacherDashboard;
