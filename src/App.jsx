import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Promo from './screens/Promo';
import Riwayat from './screens/Riwayat';
import Kontak from './screens/Kontak';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'green'}}>
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
        name="Promo"
        component={Promo}
        options={{
          tabBarLabel: 'Promo',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="brightness-percent" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="backup-restore" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Kontak"
        component={Kontak}
        options={{
          tabBarLabel: 'Kontak',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
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