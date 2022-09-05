import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Constants from '../constants'
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
      }}
    >
      <Drawer.Screen 
        name="Player List" 
        component={PlayerList} 
        // initialParams={{playerDetails: playerDetails}} 
        // options={{
        //   headerRight: () => (
        //     <View style={styles.addPlayerHeaderButton}>
        //       <Button
        //         title={Constants.ADD_PLAYER_BUTTON_TITLE}
        //         onPress={console.log("Add Player")}
        //         color={Colors.teal}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
});

export default DrawerNavigator;