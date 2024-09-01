// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import TeacherLoginScreen from './src/screens/TeacherLoginScreen';
import StudentLoginScreen from './src/screens/StudentLoginScreen';
import ParentLoginScreen from './src/screens/ParentLoginScreen';
import TeacherDashboard from './src/screens/TeacherDashboard';
import StudentDashboard from './src/screens/StudentDashboard';
import ParentDashboard from './src/screens/ParentDashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Graspp">
        <Stack.Screen name="Graspp" component={SplashScreen} />
        <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
        <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
        <Stack.Screen name="ParentLogin" component={ParentLoginScreen} />
        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="ParentDashboard" component={ParentDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
