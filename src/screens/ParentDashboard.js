// src/screens/ParentDashboard.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const ParentDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Weekly Progress</Text>
      {/* Add your weekly progress viewer component here */}
      <View style={styles.progressSection}>
        <Text style={styles.subtitle}>This Week's Progress:</Text>
        {/* Mock Data for Progress */}
        <Text>Math: 80%</Text>
        <Text>Science: 75%</Text>
        <Text>English: 90%</Text>
      </View>
      <Button title="View Detailed Report" onPress={() => {}} />
    </ScrollView>
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
  progressSection: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#388E3C', // Medium green for subtitle
  },
});

export default ParentDashboard;
