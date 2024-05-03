import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Profil from './screens/Profil';
import Pengaturan from './screens/Pengaturan';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: '#e91e63'}}>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: 'beranda',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          tabBarLabel: 'Pengaturan',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MenuTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({});