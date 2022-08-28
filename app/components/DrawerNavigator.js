import React from 'react';
import {
    View
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Constants from '../constants'
import Colors from '../colors'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator initialRouteName="Player List">
        <Drawer.Screen name="Player List" component={PlayerListScreen} initialParams={{playerDetails: playerDetails}} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
});

export default DrawerNavigator;