//import 'react-native-gesture-handler';
import * as React from 'react';
import {Home} from './Home';
import {Profile} from './Profile';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  btn: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 50,
    color: '#eeee',
    backgroundColor: '#00cc99',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 15,
    margin: 8,
  },
  ed: {
    width: 240,
    height: 50,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 8,
    marginBottom: 8,
    color: '#eeee',
    borderRadius: 15,
    backgroundColor: '#5555'

  },
});
