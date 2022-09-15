import React from 'react';
import {
    StyleSheet
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../colors'
import About from '../screens/AboutScreen';
import PlayerList from '../screens/PlayerListScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="Player List"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.teal },
        headerTintColor: Colors.white,
        // headerTitleAlign: "center"
      }}
    >
      <Drawer.Screen 
        name="Player List" 
        component={PlayerList} 
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
});

export default DrawerNavigator;