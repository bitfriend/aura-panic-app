/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 console.disableYellowBox = true;

import 'react-native-gesture-handler';

import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/scenes/Home';
import Contacts from './src/scenes/Contacts';
import Profile from './src/scenes/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends PureComponent {
  getTabIcon(routeName, focused) {
    switch (routeName) {
      case 'Home':
        return focused ? 'home-outline' : 'home';
      case 'Contacts':
        return focused ? 'call-outline' : 'call';
      case 'Profile':
        return focused ? 'person-outline' : 'person';
    }
  }

  render = () => (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={this.getTabIcon(route.name, focused)} />
          )
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
